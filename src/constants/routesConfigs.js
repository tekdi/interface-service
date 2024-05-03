'use strict'
const config = require('@constants/config.json')

exports.routesConfigs = {
	services: ['user', 'mentoring', 'notification', 'scheduler', 'unnati', 'entity-management', 'samiksha'],
	routes: config.routes,
}
