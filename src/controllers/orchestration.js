'use strict'
const { bodyConfigGenerator } = require('@helpers/bodyConfigGenerator')
const { bodyValueReplacer } = require('@helpers/bodyValueReplacer')

const orchestrationHandler = async (packages, req, res) => {
	try {
		const { targetPackages, inSequence, sourceRoute } = req
		console.log(targetPackages, inSequence, sourceRoute)
		console.log(packages)
		let result
		const responses = {}
		if (inSequence) {
			for (const servicePackage of targetPackages) {
				const selectedPackage = packages.find(
					(obj) => obj.packageMeta.basePackageName === servicePackage.basePackageName
				)
				req['baseUrl'] =
					process.env[`${selectedPackage.packageMeta.basePackageName.toUpperCase()}_SERVICE_BASE_URL`]

				const bodyConfig = bodyConfigGenerator(servicePackage.targetBody)
				const newBody = bodyValueReplacer(req.body, bodyConfig)
				req.body = newBody
				responses[selectedPackage.packageMeta.basePackageName] = await selectedPackage.packageRouter(
					req,
					res,
					responses
				)
				const isBadResponse = (statusCode) => statusCode >= 400 && statusCode <= 599
				const responseStatusCode = responses[selectedPackage.packageMeta.basePackageName].status
				if (isBadResponse(responseStatusCode)) {
					return res
						.status(responseStatusCode)
						.send(responses[selectedPackage.packageMeta.basePackageName].data)
				}
			}
			result = responses
		} else {
			result = await Promise.all(
				targetRoutes.map((route) => {
					const servicePackage = packages.find(
						(obj) => obj.packageMeta.basePackageName === route.basePackageName
					)
					return servicePackage.controllers[route.controllerName][route.functionName].bind(
						null,
						responses
					)(req.body)
				})
			)
		}
		let response = {}
		for (const servicePackage of targetPackages) {
			const body = result[servicePackage.basePackageName].result
			const responseConfig = bodyConfigGenerator(servicePackage.responseBody)
			console.log('RESPONSE_CONFIG: ', responseConfig)
			response = {
				...response,
				...bodyValueReplacer(body, responseConfig),
			}
		}
		res.status(200).send(response)
	} catch (err) {
		console.log(err)
		const errorResponse = {
			responseCode: 'INTERNAL_SERVER_ERROR',
			message: 'Internal Server Error',
			error: [],
		}
		res.status(500).json(errorResponse)
	}
}

exports.orchestrationController = {
	orchestrationHandler,
}
