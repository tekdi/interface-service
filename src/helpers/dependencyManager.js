'use strict'

const dependencyConfigs = require('@configs/dependencyConfig.json')
const requiredEnvsJSON = require('../configs/requiredEnvs.json')

const packageLoader = require('@utils/packageLoader')

const dependencyManager = () => {
	try {
		const { supportedDependencies } = dependencyConfigs
		const supportedDependencyMap = new Map()
		supportedDependencies.map((dependency) => {
			const dependencyPackage = require(dependency.packageName)
			supportedDependencyMap.set(dependency.name, dependencyPackage)
			return dependency.name
		})
		const packages = packageLoader.packageLoader()
		packages.forEach((packageInfo) => {
			const { packageName } = packageInfo.packageMeta
			const { dependencyManager, requiredEnvs } = require(packageName)
			requiredEnvsJSON.requiredEnvs = {
				...requiredEnvsJSON.requiredEnvs,
				...requiredEnvs,
			}
			if (packageInfo.requiredDependencies) {
				let requiredDependencies = packageInfo.requiredDependencies()
				if (requiredDependencies.length > 0) {
					const injectionPackageMap = new Map()
					const unsupportedDependencies = []
					requiredDependencies.forEach((dependencyArray) => {
						if (dependencyArray.dependencies) {
							dependencyArray.dependencies.map((dependency) => {
								if (!supportedDependencyMap.has(dependency.name))
									unsupportedDependencies.push(dependency.name)
								else
									injectionPackageMap.set(
										dependency.name,
										supportedDependencyMap.get(dependency.name)
									)
							})
						}
						if (unsupportedDependencies.length > 0)
							throw `Package ${packageName} requires unsupported dependencies: [${unsupportedDependencies}]`
						const packageEnvironmentVariables = {}
						Object.keys(requiredEnvs).map((envVariable) => {
							packageEnvironmentVariables[envVariable] = process.env[envVariable]
						})
						dependencyManager(injectionPackageMap, packageEnvironmentVariables)
					})
				}
			}
		})
	} catch (error) {
		console.log('Dependency Manager Error: ', error)
		throw error
	}
}

module.exports = dependencyManager
