require('module-alias/register');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const app = express();
const packageValidator = require('./utils/packageValidator');

//Package Loader & Validation
const routerPackages = require('./utils/packageLoader').packageLoader();
const validatedPackages = packageValidator(routerPackages);

const { orchestratorMapGenerator } = require('./helpers/orchestratorMapGenerator');
const orchestratedRoutes = require('./constants/orchestratedRoutes');
const orchestratedRouteMap = orchestratorMapGenerator(orchestratedRoutes);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50MB' }));
app.use(bodyParser.json({ limit: '50MB' }));

//Router
const { initializeRouter } = require('./router');
app.use(initializeRouter(validatedPackages));

app.listen(process.env.APPLICATION_PORT, (res, err) => {
	if (err) {
		onError(err);
	}
	console.log('Environment: ' + process.env.APPLICATION_ENV);
	console.log('Application is running on the port:' + process.env.APPLICATION_PORT);
});
