const child_process = require('child_process')

async function installPackages(packageString) {
	const userPackages = packageString.split(' ')
	for (const userPackage of userPackages) {
		const [packageName, version] = userPackage.split('@')
		if (!packageName) {
			console.error(`Invalid package format: ${userPackage}`)
			continue
		}

		const installCommand = version ? `${packageName}@${version}` : packageName

		try {
			const { stdout, stderr } = child_process.execSync(`npm install ${installCommand}`)
			console.log(`${installCommand} installed successfully`)
		} catch (error) {
			console.error(`Error installing ${installCommand}: ${error}`)
			throw new Error(`Error installing ${installCommand}: ${error}`)
		}
	}
}
module.exports = installPackages
