'use strict'
const config = require('@constants/config.json')

exports.routesConfigs = {
	services: ['user', 'mentoring', 'notification', 'scheduler', 'project', 'entity_management','self_creation_portal','survey'],
	routes: config.routes,
}
