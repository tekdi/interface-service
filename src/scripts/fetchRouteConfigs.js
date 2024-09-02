'use strict'
const request = require('../generics/request.js')
const fs = require('fs').promises
const path = require('path')
const { execSync } = require('child_process')

// output dir to create files 
const outputDir = './configs/routesConfigs'
const orchestratedFile = outputDir + '/orchestrated.json'
let orchestratedFileUpdatedFlag = false
/**
 * Main fuction which fetches the routes from env file and creates json file in './configs/routesConfigs'
 */
function fetchRoutes() {
    // fetch routes config file from env and split
    const fetchRouteUrls = process.env.ROUTE_CONFIGS.split(",")

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
        // get the data in json format 
        const routeJson = await request.get(url)
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
                    fileData.routes.push(routeDetails)
                }
                else {
                    // if the api is orchestrated , append it to the orchestrated file 
                    await handleOrchestratedFile(routeDetails)
                }
            })
        }

        // Ensure the directory exists
        const dir = path.dirname(outputDir);
        await fs.mkdir(dir, { recursive: true });

        // Write the JSON file (creates or overwrites the file)
        await fs.writeFile(outputFile, JSON.stringify(fileData, null, 4));
        console.log(`File generated : ' ${outputFile} '.`);
        if(orchestratedFileUpdatedFlag) console.log(`Orchestrated File Updated for package : ' ${outputFile.split('.json')[0]} '.`)
        orchestratedFileUpdatedFlag = false
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
        const existingRoutes = await fs.readFile(orchestratedFile, 'utf8')
        let routes = []
        try{
            routes = JSON.parse(existingRoutes).routes || []
        }catch(error){
            routes = []
        }
        
        if (!isADuplicateRoute(newRoute, routes)) {
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

// Function to check for duplicates in the routes
function isADuplicateRoute(newItem, existingItems) {
    try {
        return existingItems.some(item =>
            item.sourceRoute === newItem.sourceRoute &&
            item.type === newItem.type &&
            item.priority === newItem.priority &&
            item.inSequence === newItem.inSequence &&
            item.orchestrated === newItem.orchestrated &&
            JSON.stringify(item.targetPackages) === JSON.stringify(newItem.targetPackages)
        );
    } catch (error) {
        if (error.code === 'TypeError') return false
    }
}
function runFetchRoutes() {
    try {
        execSync('node -e "require(\'./scripts/fetchRouteConfigs.js\').fetchRoutes()"', {
            stdio: 'inherit',
        })
        console.log('Script executed successfully')
    } catch (error) {
        console.error('Error occurred while running the script:', error)
    }
}

module.exports = { fetchRoutes, runFetchRoutes }

if (require.main === module) runFetchRoutes().catch((error) => console.error(error))
