const { getRequestController } = require('../controllers/get');
const { postRequestController } = require('../controllers/post');
const { patchRequestController } = require('../controllers/patch');
const { deleteRequestController } = require('../controllers/delete');
const { putRequestController } = require('../controllers/put');

exports.initializeRouter = (packages) => {
	try {
		const router = require('express').Router();
		packages.map((package) => {
			const { packageMeta } = package;
			package.routes.map((routeObject) => {
				routeObject.config.map((configObject) => {
					if (configObject.type === 'GET') {
						router.get(
							`/${packageMeta.basePackageName}${routeObject.route}`,
							getRequestController.getRequestHandler
						);
					} else if (configObject.type === 'POST') {
						router.post(
							`/${packageMeta.basePackageName}${routeObject.route}`,
							postRequestController.postRequestHandler
						);
					} else if (configObject.type === 'PUT') {
						router.put(
							`/${packageMeta.basePackageName}${routeObject.route}`,
							putRequestController.putRequestHandler
						);
					} else if (configObject.type === 'PATCH') {
						router.patch(
							`/${packageMeta.basePackageName}${routeObject.route}`,
							patchRequestController.patchRequestHandler
						);
					} else if (configObject.type === 'DELETE') {
						router.delete(
							`/${packageMeta.basePackageName}${routeObject.route}`,
							deleteRequestController.deleteRequestHandler
						);
					}
				});
			});
		});
		return router;
	} catch (err) {
		console.log(err);
	}
};
