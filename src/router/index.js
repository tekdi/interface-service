const { routesConfigs } = require('../constants/routesConfigs');
const { orchestrationController } = require('../controllers/orchestration');
const { targetPackagesInjector } = require('../middlewares/targetPackagesInjector');
const { routeConfigInjector } = require('../middlewares/routeConfigInjector');
const bodyParser = require('body-parser');
const { httpMethods } = require('../constants/httpMethods');

exports.initializeRouter = (packages) => {
	try {
		const express = require('express');
		const router = express.Router();
		const routes = routesConfigs.routes;
		routes.map((route) => {
			const method = httpMethods[route.type];
			if (!route.orchestrated) {
				const basePackageName = route.targetPackages[0].basePackageName;
				const package = packages.find((obj) => obj.packageMeta.basePackageName === basePackageName);
				router[method](route.sourceRoute, routeConfigInjector, package.packageRouter);
			} else {
				console.log(route.sourceRoute);
				router[method](
					route.sourceRoute,
					targetPackagesInjector,
					bodyParser.urlencoded({ extended: true, limit: '50MB' }),
					bodyParser.json({ limit: '50MB' }),
					orchestrationController.orchestrationHandler.bind(null, packages)
				);
			}
		});
		return router;
	} catch (err) {
		console.log(err);
	}
};
