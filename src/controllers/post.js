const postRequestHandler = (req, res) => {
	try {
		//console.log(req);
		res.status(200).send({ data: 'Happy from post' });
	} catch (err) {
		console.log(err);
	}
};

exports.postRequestController = {
	postRequestHandler,
};
