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
				type: 'GET',
				basePackageName: 'mentoring',
				packageName: 'elevate-mentoring',
				route: '/v1/create-profile',
				targetBody: [
					{ sourceField: 'profile', targetField: 'profile' },
					{ sourceField: 'profile.name', targetField: 'name' },
					{ sourceField: 'profile.designation', targetField: 'designation' },
					{ sourceField: 'profile.name', targetField: 'additional.name' },
					{ sourceField: 'profile.designation', targetField: 'additional.designation' },
				],
				processors: [
					{
						targetField: 'nameDesignation',
						inputFields: ['profile.name', 'profile.designation'],
						processor: (name, designation) => {
							return `${name} - ${designation}`;
						},
					},
					{
						targetField: 'profile.nameDesignation2',
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
				type: 'POST',
				targetBody: [
					{ sourceField: 'user', targetField: 'user' },
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
