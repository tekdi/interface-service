const { executeFetchRoutesScript } = require('./fetchRouteConfigs');
const { runCombineRoutes } = require('./combineRoutesConfigs')

// Wrap the execution call in an async IIFE (Immediately Invoked Function Expression)
module.exports = async function executeScripts() {
    try {
        //fetch the route configs from each services
        await executeFetchRoutesScript();
        
        //combine the route configs
        await runCombineRoutes();
    } catch (error) {
        console.error('Error while running script :', error);
        process.exit()
    }
};