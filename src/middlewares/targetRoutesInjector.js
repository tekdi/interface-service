const { routesConfigs } = require('../constants/routesConfigs');

exports.targetRoutesInjector = (req, res, next) => {
	const routeConfig = routesConfigs.routes.find((route) => route.sourceRoute === req.originalUrl);
	req['targetPackages'] = routeConfig.targetPackages;
	req['inSequence'] = routeConfig.inSequence;
	next();
};
