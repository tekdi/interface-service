'use strict'
exports.matchPathsAndExtractParams = (pattern, url) => {
	console.log('pattern', pattern)
	console.log('url', url)
	const paramNames = []
	const regexPattern = new RegExp(
		pattern.replace(/\/:(\w+)/g, (_, paramName) => {
			paramNames.push(paramName)
			return '/([^/]+)'
		}) + '$'
	)
	const matchResult = url.match(regexPattern)
	if (!matchResult) return false
	const params = {}
	for (let i = 0; i < paramNames.length; i++) {
		params[paramNames[i]] = matchResult[i + 1]
	}
	return params
}
