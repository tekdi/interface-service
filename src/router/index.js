'use strict'
const { routesConfigs } = require('@constants/routesConfigs')
const { orchestrationController } = require('@controllers/orchestration')
const { targetPackagesInjector } = require('@middlewares/targetPackagesInjector')
const { routeConfigInjector } = require('@middlewares/routeConfigInjector')
const { rateLimiter } = require('@middlewares/rateLimiter')
const bodyParser = require('body-parser')
const { httpMethods } = require('@constants/httpMethods')
// Function to handle JSON parsing errors
const handleJsonParsingError = (req, res, next) => {
    bodyParser.json({ limit: '50MB' })(req, res, err => {
        if (err instanceof SyntaxError) {
            res.status(400).json({
                responseCode: 'INVALID_JSON', // response code and message can be customized here
                message: 'The JSON provided in the request is invalid or malformed.',
            });
        } else {
            next(err);
        }
    });
};

exports.initializeRouter = (packages) => {
	try {
		const express = require('express')
		const router = express.Router()
		const routes = routesConfigs.routes
		routes.map((route) => {
			const method = httpMethods[route.type]
			if (!route.orchestrated) {
				const basePackageName = route.targetPackages[0].basePackageName
				const servicePackage = packages.find((obj) => obj.packageMeta.basePackageName === basePackageName)
				router[method](route.sourceRoute, routeConfigInjector, rateLimiter, servicePackage.packageRouter)
			} else {
				router[method](
					route.sourceRoute,
					targetPackagesInjector,
					rateLimiter,
					bodyParser.urlencoded({ extended: true, limit: '50MB' }),
					handleJsonParsingError,
					orchestrationController.orchestrationHandler.bind(null, packages)
				)
			}
		})
		return router
	} catch (err) {
		console.log(err)
	}
}
