const { routesConfigs } = require('../constants/routesConfigs');
const { orchestrationController } = require('../controllers/orchestration');
const { targetRoutesInjector } = require('../middlewares/targetRoutesInjector');
const { routeConfigInjector } = require('../middlewares/routeConfigInjector');

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
