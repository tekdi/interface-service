'use strict'

/**
 * name : fetchRouteConfigs.js
 * author : Adithya Dinesh
 * created-date : 04-Sep-2024
 * Description : Fetches routes from each service as provided in the .env file and creates routes config for each services. 
 * Seperates all orchestrated calls in a different file.
 */

// import requirements 
const request = require('../generics/request.js')
const schema = require('../constants/routeSchema.js')
const fs = require('fs').promises
const path = require('path')
const { execSync } = require('child_process')
const _ = require('lodash');
const Ajv = require("ajv"); // for validating schema
const ajv = new Ajv();

const currentDirectory = process.cwd(); //fetch the current working directory 
// output dir to create files 
const outputDir = path.join(currentDirectory,'configs','routesConfigs') //join path to routesConfigs folder
const orchestratedFile = path.join(outputDir , 'orchestrated.json') //join path to orchestrated.json file
let orchestratedFileUpdatedFlag = false // flag to check any updates in the orchestrated file
/**
 * Main fuction which fetches the routes from env file and creates json file in './configs/routesConfigs'
 */
function fetchRoutes() {
    // fetch routes config file from env and split
    const fetchRouteUrls = process.env.ROUTE_CONFIG_JSON_URLS_PATHS.split(",")

    // iterate through each urls and construct 
    fetchRouteUrls.map(async (fetchUrl) => {
        if (fetchUrl != '') {
            await constructJson(fetchUrl)
        }
    })
}
/**
 * Construct the json file in required format and writes it into file
 * @param {string} url - The URL to fetch.
 */
async function constructJson(url) {
    try {
        let routeJson = {}

        if(isAValidUrl(url)){
            // get the data in json format 
            routeJson = await request.get(url)
            
            routeJson.success = routeJson?.data.routes.length > 0 && isValidJson(routeJson) ? true : false
        }else if(await isAValidJsonPath(url)){
            // load the json file from mentioned location
            routeJson.data = await loadJsonFile(url);
            
            routeJson.success = routeJson?.data.routes.length > 0  && isValidJson(routeJson) ? true : false
        }else{
            routeJson.success = false
        }
        let fileData = {
            routes: []
        }
        let orchestratedFileData = {
            routes: []
        }
        let outputFile = ""
        if (routeJson.success) {
            // extract base package name to create json file 
            outputFile = path.join(outputDir, routeJson.data.routes[0]?.targetPackages[0]?.packageName + '.json')

            routeJson.data.routes.map(async (routeDetails) => {
                if (!routeDetails.orchestrated) {
                    // if the api is not orchestrated , write it in the package specific file 
                    if(!isADuplicateRoute(routeDetails, fileData.routes) && await isAValidSchema(routeDetails , schema.passThroughRouteSchema)) fileData.routes.push(routeDetails)
                }
                else {
                    if(await isAValidSchema(routeDetails , schema.orchestratedRouteSchema)) orchestratedFileData.routes.push(routeDetails)
                }
            })
            // Ensure the directory exists
            const dir = path.dirname(outputDir);
            await fs.mkdir(dir, { recursive: true });

            // Write the JSON file (creates or overwrites the file)
            await fs.writeFile(outputFile, JSON.stringify(fileData, null, 4));

            if(orchestratedFileData.routes.length > 0) await handleOrchestratedFile(orchestratedFileData.routes)

            console.log(`File generated : ' ${outputFile} '.`);
            if(orchestratedFileUpdatedFlag) console.log(`Orchestrated File Updated for package : ' ${outputFile.split('.json')[0]} '.`)
            orchestratedFileUpdatedFlag = false
        }
        
    } catch (error) {
        console.log(error)
    }

}
/**
 * Handles orchestrated calls, opens the orchestrated.json file and w
 * @param {string} url - The URL to fetch.
 */
const handleOrchestratedFile = async (newRoutes) => {
    try {
        const existingRoutes = await fs.readFile(orchestratedFile, 'utf8')
        let fileWriteFlag = false
        let routes = []
        try{
            routes = JSON.parse(existingRoutes).routes || []
        }catch(error){
            routes = []
        }

        newRoutes.map(async (routeDetails) => {
            if (!isADuplicateRoute(routeDetails, routes)) { 
                routes.push(routeDetails)
                fileWriteFlag = true
            }
        })

        if(fileWriteFlag) await fs.writeFile(orchestratedFile, JSON.stringify({routes}, null, 4));

    } catch (error) {
        if (error.code === 'ENOENT') {
            // if the file is not created , create
            await fs.writeFile(orchestratedFile, JSON.stringify({ routes: newRoutes }, null, 4));
            console.log(`File generated : ' ${orchestratedFile} '`);
        }else{
            console.log("-----> error : ", error)
        }
    }
}

// Function to check for duplicates in the routes
function isADuplicateRoute(newItem, existingItems) {
    try {
        return _.some(existingItems, item => 
            item.sourceRoute === newItem.sourceRoute &&
            item.type === newItem.type &&
            item.priority === newItem.priority &&
            item.inSequence === newItem.inSequence &&
            item.orchestrated === newItem.orchestrated &&
            _.isEqual(item.targetPackages, newItem.targetPackages) &&
            _.isEqual(item.responseMessage, newItem.responseMessage) &&
            _.isEqual(item.rateLimit, newItem.rateLimit)
        );
    } catch (error) {
        if (error.name === 'TypeError') return false;
    }
}

function runFetchRoutes() {
    try {
        execSync('node -e "require(\'./scripts/fetchRouteConfigs.js\').fetchRoutes()"', {
            stdio: 'inherit',
        })
        console.log('Route fetch Script executed successfully.')
    } catch (error) {
        console.error('Error occurred while running the script:', error)
    }
}

function isAValidUrl(path) {
    try {
        new URL(path);
        return true; // Input is a valid URL
    } catch (e) {
        return false; // Input is not a valid URL
    }
}
async function isAValidSchema(newRoute, schema) {
    try{
        // Compile the schema
        const validate = ajv.compile(schema);
    
        // Validate the data
        const valid = validate(newRoute);
        // Output the result
        if (valid) return true
        return false
    }catch(error){
        return false
    }

}
async function isAValidJsonPath(uri) {
    try {
         // Resolve the absolute path
         const absolutePath = path.resolve(uri);

         // Check if the path exists and is a file
         const stats = await fs.lstat(absolutePath);
 
         // Check if the file has a .json extension
         const isJsonFile = path.extname(absolutePath).toLowerCase() === '.json';
 
         return stats.isFile() && isJsonFile;
    } catch (error) {
        // If an error occurs, it's not a valid local path or file
        return false;
    }
}
async function loadJsonFile(filePath) {
    try {
        const fileContent = await fs.readFile(filePath, 'utf8');
        const jsonData = JSON.parse(fileContent);
        return jsonData;
    } catch (error) {
        return error; // Return null or handle the error as needed
    }
}

function isValidJson(jsonString) {
    try {
        typeof jsonString === "string" ? JSON.parse(jsonString) : "" ; // Attempt to parse the JSON string
        return true; // If parsing succeeds, it's a valid JSON
    } catch (error) {
        console.log("ERROR : : : ", error)
        return false; // If an error occurs during parsing, it's not a valid JSON
    }
}
module.exports = { fetchRoutes, runFetchRoutes }

if (require.main === module) runFetchRoutes().catch((error) => console.error(error))
