'use strict'
const config = require('@constants/config.json')

exports.routesConfigs = {
	services: ['user', 'mentoring'],
	routes: config.routes,
}
