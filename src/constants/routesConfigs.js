exports.routesConfigs = {
	services: ['user', 'mentoring'],
	routes: [
		{
			sourceRoute: '/elevate-user-temp/v1/some-route ',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
		{
			sourceRoute: '/v1/user-signup',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: true,
			orchestrated: true,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
				{
					basePackageName: 'mentoring',
					packageName: 'elevate-mentoring',
				},
			],
		},
	],
};
