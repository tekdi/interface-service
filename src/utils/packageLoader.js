const packageLoader = () => {
	//console.log('PACKAGE LOADER____________________________________________________________________________');
	const packageNames = process.env.INSTALLED_PACKAGES.split(' ');
	//console.log('PACKAGE NAMES:', packageNames);
	const packages = [];
	for (let package of packageNames) {
		//console.log('INITIALIZE:', package);
		packages.push(require(package));
	}
	//console.log('LOADED PACKAGES:', packages);
	//console.log('PACKAGE LOADER END________________________________________________________________________');
	return packages;
};

module.exports = { packageLoader };
