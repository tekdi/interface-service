'use strict'
const { rateLimitConfigs } = require('@constants/rateLimitConfigs')
const rateLimit = require('express-rate-limit')

const createRateLimiter = () => {
	const limiters = {}
	return (name) => {
		if (!limiters[name]) {
			const config = rateLimitConfigs[name]
			limiters[name] = rateLimit(config)
		}
		return limiters[name]
	}
}

const getRateLimiter = createRateLimiter()

exports.rateLimiter = (req, res, next) => {
	const rateLimitType = req.rateLimit && req.rateLimit.type ? req.rateLimit.type : 'general'
	const limiter = getRateLimiter(rateLimitType)
	return limiter(req, res, next)
}
