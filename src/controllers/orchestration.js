const orchestrationHandler = (req, res) => {
	try {
		res.status(200).send({ data: 'Happy from Orchestration', type: req.method, config: req.orchestrationConfig });
	} catch (err) {
		console.log(err);
	}
};

exports.orchestrationController = {
	orchestrationHandler,
};
