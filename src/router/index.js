const { routesConfigs } = require('../constants/routesConfigs');
const { orchestrationController } = require('../controllers/orchestration');
const { targetRoutesInjector } = require('../middlewares/targetRoutesInjector');
const { httpMethods } = require('../constants/httpMethods');

exports.initializeRouter = (packages) => {
	try {
		const express = require('express');
		const router = express.Router();

		const routes = routesConfigs.routes;
		routes.map((route) => {
			const method = httpMethods[route.type];
			if (!route.orchestrated) {
				const basePackageName = route.targetRoutes[0].basePackageName;
				const package = packages.find((obj) => obj.packageMeta.basePackageName === basePackageName);
				const controllerName = route.targetRoutes[0].controllerName;
				const functionName = route.targetRoutes[0].functionName;
				router[method](route.sourceRoute, package.controllers[controllerName][functionName]);
			} else
				router[method](
					route.sourceRoute,
					targetRoutesInjector,
					orchestrationController.orchestrationHandler.bind(null, packages)
				);
		});
		return router;
	} catch (err) {
		console.log(err);
	}
};
