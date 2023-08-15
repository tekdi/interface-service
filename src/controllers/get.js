const getRequestHandler = (req, res) => {
	try {
		//console.log(req);
		res.status(200).send({ data: 'Happy from get' });
	} catch (err) {
		console.log(err);
	}
};

exports.getRequestController = {
	getRequestHandler,
};
