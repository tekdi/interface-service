'use strict';
const router = require('express').Router();
//const createPackage = require('elevate-mentoring');
const { dependencies, routes, createPackage } = require('elevate-user');

/* const kafkaClient = () => {
	const send = (message) => {
		console.log('Kafka Send: ', message);
	};
	return { send };
};

const redisClient = () => {
	const cacheIt = (key, value) => {
		console.log(`Redis Cache:: Key: ${key}, value: ${value}`);
	};
	return { cacheIt };
};

const user = createPackage({ kafkaClient: kafkaClient(), redisClient: redisClient() }); */

//router.use('/pack1', package1.router);
//router.use('/pack2', user.router);

module.exports = router;
