const { orchestratorMapGenerator } = require('../helpers/orchestratorMapGenerator');
const orchestratedRoutes = require('../constants/orchestratedRoutes');
const orchestratedRouteMap = orchestratorMapGenerator(orchestratedRoutes);

exports.orchestrationConfigInjector = (req, res, next) => {
	req['orchestrationConfig'] = orchestratedRouteMap.get(req.method)[req.originalUrl.replace('/interface', '')];
	next();
};
