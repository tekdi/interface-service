'use strict'
const elevateValidator = require('elevate-package-validator')
const { allExpectedRoutes } = require('@constants/routesConfigs')

const packageValidator = (packages) => {
	const meta = {
		supportedHttpTypes: process.env.SUPPORTED_HTTP_TYPES.split(' '),
	}
	const validationReport = elevateValidator.packageValidator(packages, allExpectedRoutes, meta)
	console.log('Validation Report: ', validationReport)
	return packages
}

module.exports = packageValidator
