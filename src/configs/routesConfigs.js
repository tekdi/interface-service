'use strict'
const config = require('@configs/.config.json')

exports.routesConfigs = {
	services: ['user', 'mentoring', 'notification', 'scheduler', 'project', 'entity-management','self-creation-portal','survey'],
	routes: config.routes,
}
