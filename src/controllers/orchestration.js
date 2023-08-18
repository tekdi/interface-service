const orchestrationHandler = async (packages, req, res) => {
	try {
		const { targetRoutes, inSequence } = req;
		let result;
		console.log('INSEQUENCE: ', inSequence);
		const responses = {};
		if (inSequence) {
			for (const route of targetRoutes) {
				const package = packages.find((obj) => obj.packageMeta.basePackageName === route.basePackageName);
				responses[route.route] = package.controllers[route.controllerName][route.functionName].bind(
					null,
					responses
				)(req.body);
			}
			result = responses;
		} else {
			result = await Promise.all(
				targetRoutes.map((route) => {
					const package = packages.find((obj) => obj.packageMeta.basePackageName === route.basePackageName);
					return package.controllers[route.controllerName][route.functionName].bind(
						null,
						responses
					)(req.body);
				})
			);
		}
		res.status(200).send({ data: 'Happy from Orchestration', result });
	} catch (err) {
		console.log(err);
	}
};

exports.orchestrationController = {
	orchestrationHandler,
};
