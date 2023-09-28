'use strict'
const transformRecursive = (source, targetConfig, output) => {
	for (const [key, value] of Object.entries(targetConfig)) {
		if (typeof value === 'object') transformRecursive(source, value, output[key])
		else {
			const sourceKey = value.split('.').reduce((obj, key) => obj[key], source)
			output[key] = sourceKey !== undefined ? sourceKey : source[value]
			delete output[value]
		}
	}
}

exports.bodyValueReplacer = (sourceObject, targetObjectConfig) => {
	const result = JSON.parse(JSON.stringify(sourceObject))
	transformRecursive(sourceObject, targetObjectConfig, result)
	return result
}
