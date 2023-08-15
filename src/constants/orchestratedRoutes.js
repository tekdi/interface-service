module.exports = [
	{
		sourceRoute: '/v1/user-signup',
		type: 'GET',
		sourceBody: {
			profile: {
				name: 'Jacob',
				designation: 'Fullstack Developer',
			},
			user: {
				username: 'jacob23',
				password: 'password',
			},
		},
		targetRoutes: [
			{
				basePackageName: 'mentoring',
				packageName: 'elevate-mentoring',
				route: '/v1/create-profile',
				targetBody: [
					{ sourceField: 'profile', targetFile: 'profile' },
					{ sourceField: 'profile.name', targetField: 'name' },
					{ sourceField: 'profile.designation', targetField: 'designation' },
				],
				processors: [
					{
						targetField: 'nameDesignation',
						inputFields: ['profile.name', 'profile.designation'],
						processor: (name, designation) => {
							return `${name} - ${designation}`;
						},
					},
				],
			},
			{
				basePackageName: 'user',
				packageName: 'elevate-user',
				route: '/v1/create-user',
				targetBody: [
					{ sourceField: 'user', targetFile: 'user' },
					{ sourceField: 'user.username', targetField: 'username' },
					{ sourceField: 'user.password', targetField: 'password' },
				],
				processors: [
					{
						targetField: 'userPassword',
						inputFields: ['user.username', 'user.password'],
						processor: (username, password) => {
							return `${username} - ${password}`;
						},
					},
				],
			},
		],
	},
];
