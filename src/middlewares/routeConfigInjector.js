const { routesConfigs } = require('../constants/routesConfigs');

exports.routeConfigInjector = (req, res, next) => {
	const routeConfig = routesConfigs.routes.find((route) => route.sourceRoute === req.originalUrl);
	req['baseUrl'] = process.env[`${routeConfig.targetPackages[0].basePackageName.toUpperCase()}_SERVICE_BASE_URL`];
	req['type'] = routeConfig.type;
	req['inSequence'] = routeConfig.inSequence;
	req['orchestrated'] = routeConfig.orchestrated;
	req['sourceRoute'] = routeConfig.sourceRoute;
	next();
};
