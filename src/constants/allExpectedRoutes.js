const allExpectedRoutes = {
	mentoring: [
		{
			route: '/v1/get-user-photo',
			config: [{ type: 'GET', priority: 'MUST_HAVE' }],
		},
		{
			route: '/v1/get-user-profile',
			config: [{ type: 'POST', priority: 'OPTIONAL' }],
		},
		{
			route: '/v1/get-sharelink',
			config: [
				{ type: 'PUT', priority: 'MUST_HAVE' },
				{ type: 'PATCH', priority: 'OPTIONAL' },
			],
		},
		{
			route: '/v1/get-user-details',
			config: [{ type: 'DELETE', priority: 'MUST_HAVE' }],
		},
	],
	user: [
		{
			route: '/v1/get-user-photo',
			config: [{ type: 'GET', priority: 'MUST_HAVE' }],
		},
		{
			route: '/v1/get-user-profile',
			config: [{ type: 'POST', priority: 'OPTIONAL' }],
		},
		{
			route: '/v1/get-sharelink',
			config: [
				{ type: 'PUT', priority: 'MUST_HAVE' },
				{ type: 'PATCH', priority: 'OPTIONAL' },
			],
		},
		{
			route: '/v1/get-user-details',
			config: [{ type: 'DELETE', priority: 'MUST_HAVE' }],
		},
	],
};

module.exports = { allExpectedRoutes };
