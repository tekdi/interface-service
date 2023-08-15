require('module-alias/register');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const app = express();
const packageValidator = require('./utils/packagevalidator');

//Package Loader & Validation
const routerPackages = require('./utils/packageLoader').packageLoader();
const validatedPackages = packageValidator(routerPackages);

const { orchestratorMapGenerator } = require('./helpers/orchestratorMapGenerator');
const orchestratedRoutes = require('./constants/orchestratedRoutes');
const orchestratedRouteMap = orchestratorMapGenerator(orchestratedRoutes);
console.log(JSON.stringify(orchestratedRouteMap.get('GET'), null, 4));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true, limit: '50MB' }));
app.use(bodyParser.json({ limit: '50MB' }));

//Router
app.use('/interface', require('./routes/index'));

app.listen(process.env.APPLICATION_PORT, (res, err) => {
	if (err) {
		onError(err);
	}
	console.log('Environment: ' + process.env.APPLICATION_ENV);
	console.log('Application is running on the port:' + process.env.APPLICATION_PORT);
});
