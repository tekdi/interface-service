'use strict'

const standardHandler = (req, res) => {
	res.status(429).json({
		responseCode: 'RATE_LIMITED',
		message: 'Too many requests. Please try again later.',
	})
}

exports.rateLimitConfigs = {
	'public-low': {
		windowMs: 2 * 60 * 1000,
		limit: 5,
		standardHeaders: false,
		legacyHeaders: false,
		handler: standardHandler,
	},
	general: {
		windowMs: 1 * 60 * 1000,
		limit: 50,
		standardHeaders: false,
		legacyHeaders: false,
		handler: standardHandler,
	},
	internal: {
		windowMs: 1 * 60 * 1000,
		limit: 50,
		standardHeaders: false,
		legacyHeaders: false,
		handler: standardHandler,
		skipSuccessfulRequests: true,
	},
}
