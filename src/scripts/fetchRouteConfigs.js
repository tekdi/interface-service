'use strict'
const request = require('../generics/request.js')
const fs = require('fs').promises
const path = require('path')
const { execSync } = require('child_process')
const _ = require('lodash');

// output dir to create files 
const outputDir = path.join('./configs','routesConfigs')
const orchestratedFile = path.join(outputDir , '/orchestrated.json')
let orchestratedFileUpdatedFlag = false
/**
 * Main fuction which fetches the routes from env file and creates json file in './configs/routesConfigs'
 */
function fetchRoutes() {
    // fetch routes config file from env and split
    const fetchRouteUrls = process.env.ROUTE_CONFIG_JSON_URLS_PATHS.split(",")

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
            // if(!isValidJson(routeJson?.data.toString()))  throw `Error : Config invalid! Config path : ${url}` 
            routeJson.success = routeJson?.data.routes.length > 0 ? true : false
        }else if(await isAValidJsonPath(url)){
            // load the json file from mentioned location
            routeJson.data = await loadJsonFile(url);
            // console.log("routeJson?.data : ",routeJson?.data)
            // if (!isValidJson(routeJson?.data.toString())) throw `Error : config invalid! Config path : ${url}`
            routeJson.success = routeJson?.data.routes.length > 0 ? true : false
        }else{
            routeJson.success = false
        }
        let fileData = {
            routes: []
        }
        let outputFile = ""
        if (routeJson.success) {
            // extract base package name to create json file 
            outputFile = path.join(outputDir, routeJson.data.routes[0]?.targetPackages[0]?.packageName + '.json')

            routeJson.data.routes.map(async (routeDetails) => {
                if (!routeDetails.orchestrated) {
                    // if the api is not orchestrated , write it in the package specific file 
                    // if(!isADuplicateRoute(routeDetails, fileData.routes)) fileData.routes.push(routeDetails)
                    
                    // Function to check if an object is present in an array using Lodash
                    // const isDuplicate = _.some(existingItems, item => _.isEqual(item, newItem));
                    if(!_.some(fileData.routes, item => _.isEqual(item, routeDetails))) fileData.routes.push(routeDetails)

                }
                else {
                    // if the api is orchestrated , append it to the orchestrated file 
                    await handleOrchestratedFile(routeDetails)
                }
            })
            // Ensure the directory exists
            const dir = path.dirname(outputDir);
            await fs.mkdir(dir, { recursive: true });

            // Write the JSON file (creates or overwrites the file)
            await fs.writeFile(outputFile, JSON.stringify(fileData, null, 4));
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
async function handleOrchestratedFile(newRoute) {
    try {
        console.log("PATH : ",orchestratedFile)
        const existingRoutes = await fs.readFile(orchestratedFile, 'utf8')
        let routes = []
        try{
            routes = JSON.parse(existingRoutes).routes || []
        }catch(error){
            routes = []
        }
        // isADuplicateRoute(newRoute, routes) ? console.log("isADuplicateRoute : ",isADuplicateRoute(newRoute, routes) , newRoute , routes) : console.log(" ")
        // if (!isADuplicateRoute(newRoute, routes)) {
        //     routes.push(newRoute)
        //     orchestratedFileUpdatedFlag = true
        //     await fs.writeFile(orchestratedFile, JSON.stringify({routes}, null, 4));
        // }
        const isDuplicate = _.some(existingItems, item => _.isEqual(item, newItem))
        console.log("isDuplicate : " , isDuplicate)
        if (!isDuplicate) {
            routes.push(newRoute)
            orchestratedFileUpdatedFlag = true
            await fs.writeFile(orchestratedFile, JSON.stringify({routes}, null, 4));
        }

    } catch (error) {
        if (error.code === 'ENOENT') {
            // if the file is not created , create an empty file
            await fs.writeFile(orchestratedFile, JSON.stringify({ routes: [] }, null, 4));
            console.log(`File generated : ' ${orchestratedFile} '`);
            await handleOrchestratedFile(newRoute)
        }else{
            console.log("-----> error : ", error)
        }
    }
}
// Function to check if a file is valid
async function isFileValid(filePath) {
    try {
        // Resolve the absolute path of the file
        const absolutePath = path.resolve(filePath);

        // Check if the file exists and is readable
        const stats = await fs.lstat(absolutePath);

        // Check if the path points to a regular file (not a directory)
        return stats.isFile();
    } catch (error) {
        // If an error occurs, the file is not valid
        console.error('Error checking file:', error.message);
        return false;
    }
}
// Function to check for duplicates in the routes
function isADuplicateRoute(newItem, existingItems) {
    try {
        return existingItems.some(item =>
            item.sourceRoute === newItem.sourceRoute &&
            item.type === newItem.type &&
            item.priority === newItem.priority &&
            item.inSequence === newItem.inSequence &&
            item.orchestrated === newItem.orchestrated &&
            deepEqual(item.targetPackages, newItem.targetPackages) &&
            (item.responseMessage === newItem.responseMessage || !item.responseMessage && !newItem.responseMessage) &&
            (JSON.stringify(item.rateLimit) === JSON.stringify(newItem.rateLimit) || (!item.rateLimit && !newItem.rateLimit))
        );
    } catch (error) {
        if (error.name === 'TypeError') return false;
    }
}

// Helper function for deep comparison
function deepEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
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
        JSON.parse(jsonString); // Attempt to parse the JSON string
        return true; // If parsing succeeds, it's a valid JSON
    } catch (error) {
        return false; // If an error occurs during parsing, it's not a valid JSON
    }
}
module.exports = { fetchRoutes, runFetchRoutes }

if (require.main === module) runFetchRoutes().catch((error) => console.error(error))
