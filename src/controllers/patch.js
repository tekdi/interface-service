const patchRequestHandler = (req, res) => {
	try {
		//console.log(req);
		res.status(200).send({ data: 'Happy from patch', req });
	} catch (err) {
		console.log(err);
	}
};

exports.patchRequestController = {
	patchRequestHandler,
};
