'use strict'
const config = require('@constants/config.json')

exports.routesConfigs = {
	services: ['user', 'mentoring', 'notification', 'scheduler', 'project', 'entity-management','self_creation_portal'],
	routes: config.routes,
}
