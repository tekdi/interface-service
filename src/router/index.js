const { getRequestController } = require('../controllers/get');
const { postRequestController } = require('../controllers/post');
const { patchRequestController } = require('../controllers/patch');
const { deleteRequestController } = require('../controllers/delete');
const { putRequestController } = require('../controllers/put');

exports.initializeRouter = (packages) => {
	try {
		const express = require('express');
		const router = express.Router();

		const requestHandlers = {
			GET: getRequestController.getRequestHandler,
			POST: postRequestController.postRequestHandler,
			PUT: putRequestController.putRequestHandler,
			PATCH: patchRequestController.patchRequestHandler,
			DELETE: deleteRequestController.deleteRequestHandler,
		};

		packages.forEach((package) => {
			const { packageMeta, routes } = package;

			routes.forEach((routeObject) => {
				routeObject.config.forEach((configObject) => {
					const requestHandler = requestHandlers[configObject.type];
					if (requestHandler) {
						router[configObject.type.toLowerCase()](
							`/${packageMeta.basePackageName}${routeObject.route}`,
							requestHandler
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
