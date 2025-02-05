'use strict'
const config = require('@configs/.config.json')

exports.routesConfigs = {
	services: process.env.REQUIRED_BASE_PACKAGES.split(','),
	routes: config.routes,
}
