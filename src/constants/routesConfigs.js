exports.routesConfigs = {
	services: ['user', 'mentoring'],
	routes: [
		{
			sourceRoute: '/v1/get-sessions',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetRoutes: [
				{
					type: 'GET',
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
					route: '/v1/forgotPassword',
					controllerName: 'mentoringController',
					functionName: 'forgotPassword',
				},
			],
		},
		{
			sourceRoute: '/v1/user-signup',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: true,
			orchestrated: true,
			targetRoutes: [
				{
					type: 'POST',
					basePackageName: 'user',
					packageName: 'elevate-user',
					route: '/v1/create-user',
					controllerName: 'userController',
					functionName: 'createUser',
				},
				{
					type: 'POST',
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
					route: '/v1/create-profile',
					controllerName: 'mentoringController',
					functionName: 'createProfile',
				},
			],
		},
	],
};
