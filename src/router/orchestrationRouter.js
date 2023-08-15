const { orchestrationController } = require('../controllers/orchestration');
const orchestratedRoutes = require('../constants/orchestratedRoutes');
const { orchestrationConfigInjector } = require('../middlewares/orchestrationConfigInjector');

const httpMethods = {
	GET: 'get',
	POST: 'post',
	PUT: 'put',
	PATCH: 'patch',
	DELETE: 'delete',
};

exports.initializeOrchestrationRouter = () => {
	const router = require('express').Router();
	orchestratedRoutes.forEach((route) => {
		const method = httpMethods[route.type];
		if (method) {
			router[method](
				route.sourceRoute,
				orchestrationConfigInjector,
				orchestrationController.orchestrationHandler
			);
		}
	});
	return router;
};
