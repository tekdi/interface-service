'use strict'
require('module-alias/register')
const express = require('express')
const cors = require('cors')
require('dotenv').config({ path: './.env' })
const packageInstaller = require('./utils/packageInstaller')

let environmentData = require('./envVariables')()
if (!environmentData.success) {
	console.error('Server could not start . Not all environment variable is provided')
	process.exit()
}

/* packageInstaller(process.env.REQUIRED_PACKAGES).catch((error) => {
	console.error(`An error occurred in package installer: ${error}`)
	process.exit()
}) */

const app = express()
const path = require('path')
//const packageValidator = require('./utils/packageValidator');

//Package Loader & Validation
const routerPackages = require('@utils/packageLoader').packageLoader()
//const validatedPackages = packageValidator(routerPackages);
const validatedPackages = routerPackages //Bypassing the validator for now

app.use(cors())
/* app.use(bodyParser.urlencoded({ extended: true, limit: '50MB' }));
app.use(bodyParser.json({ limit: '50MB' })); */

//Router
const { initializeRouter } = require('@router')
app.use(initializeRouter(validatedPackages))
app.get(process.env.API_DOC_URL, function (req, res) {
	res.sendFile(path.join(__dirname, './api-doc/index.html'))
})
/* const { initializeOrchestrationRouter } = require('./router/orchestrationRouter');
app.use('/interface', initializeOrchestrationRouter()); */

app.listen(process.env.APPLICATION_PORT, (res, err) => {
	if (err) {
		onError(err)
	}
	console.log('Environment: ' + process.env.APPLICATION_ENV)
	console.log('Application is running on the port:' + process.env.APPLICATION_PORT)
})
