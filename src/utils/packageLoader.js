const packageLoader = () => {
	const packageNames = process.env.INSTALLED_PACKAGES.split(' ');
	const packages = [];
	for (let package of packageNames) {
		packages.push(require(package));
	}
	console.log(packages);
	return packages;
};

module.exports = { packageLoader };
