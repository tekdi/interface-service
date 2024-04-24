'use strict'
const packageInitializer = () => {
	const packageNames = process.env.INSTALLED_PACKAGES.split(' ')
	const packages = []
	for (const servicePackage of packageNames) {
		const _package = require(servicePackage)
		console.log(_package.dependencies)
		//inject dependencies here by calling Initializer()
	}
	console.log(packages)
	return packages
}

module.exports = { packageInitializer }
