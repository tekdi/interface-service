const deleteRequestHandler = (req, res) => {
	try {
		//console.log(req);
		res.status(200).send({ data: 'Happy from delete' });
	} catch (err) {
		console.log(err);
	}
};

exports.deleteRequestController = {
	deleteRequestHandler,
};
