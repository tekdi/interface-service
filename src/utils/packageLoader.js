'use strict'
const packageLoader = () => {
	const packageNames = process.env.INSTALLED_PACKAGES.split(' ')
	const packages = []
	for (const servicePackage of packageNames) {
		packages.push(require(servicePackage))
	}
	console.log(packages)
	return packages
}

module.exports = { packageLoader }
