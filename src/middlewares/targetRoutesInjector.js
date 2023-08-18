const { routesConfigs } = require('../constants/routesConfigs');

exports.targetRoutesInjector = (req, res, next) => {
	const routeConfig = routesConfigs.routes.find((route) => route.sourceRoute === req.originalUrl);
	req['targetRoutes'] = routeConfig.targetRoutes;
	req['inSequence'] = routeConfig.inSequence;
	next();
};
