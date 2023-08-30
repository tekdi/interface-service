'use strict'
exports.routesConfigs = {
	services: ['user', 'mentoring'],
	routes: [
		{
			sourceRoute: '/user/v1/account/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/account/login',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/account/acceptTermsAndCondition',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/account/resetPassword',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/account/generateToken',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/account/generateOtp',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/account/logout',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/account/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/account/registrationOtp',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/user/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/user/read/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/user/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/user/share',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/user/share/:id',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/userRole/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/form/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/form/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/form/read/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/form/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/form/update/:id',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/cloud-services/file/getSignedUrl',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/admin/deleteUser',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/admin/deleteUser/:id',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/admin/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/admin/login',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/organization/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/organization/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/organization/update/:id',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/organization/list',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity-type/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity-type/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity-type/update/:id',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity-type/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity-type/delete',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity-type/delete/:id',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity/update',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity/update/:id',
			type: 'PATCH',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity/delete',
			type: 'DELETE',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity/read',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},
		{
			sourceRoute: '/user/v1/entity/read/:id',
			type: 'GET',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'elevate-user',
				},
			],
		},

		{
			sourceRoute: '/mentoring/v1/entity/create',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/entity/read',
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
			sourceRoute: '/mentoring/v1/entity/read/:id',
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
			sourceRoute: '/mentoring/v1/entity/update',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/entity/update/:id',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/entity/delete',
			type: 'DELETE',
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
			sourceRoute: '/mentoring/v1/entity/delete/:id',
			type: 'DELETE',
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
			sourceRoute: '/mentoring/v1/form/create',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/form/read',
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
			sourceRoute: '/mentoring/v1/form/read/:id',
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
			sourceRoute: '/mentoring/v1/form/update',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/form/update/:id',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/entity-type/create',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/entity-type/read',
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
			sourceRoute: '/mentoring/v1/entity-type/update',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/entity-type/update/:id',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/entity-type/delete',
			type: 'DELETE',
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
			sourceRoute: '/mentoring/v1/entity-type/delete/:id',
			type: 'DELETE',
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
			sourceRoute: '/mentoring/v1/sessions/list',
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
			sourceRoute: '/mentoring/v1/sessions/details',
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
			sourceRoute: '/mentoring/v1/sessions/details/:id',
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
			sourceRoute: '/mentoring/v1/sessions/share',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/share/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/enroll',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/enroll/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/unEnroll',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/unEnroll/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/start',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/start/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/update',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/update/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/feedback',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/feedback/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/updateRecordingUrl',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/updateRecordingUrl/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/completed',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/completed/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/getRecording',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/sessions/getRecording/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/mentees/sessions',
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
			sourceRoute: '/mentoring/v1/mentees/joinSession',
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
			sourceRoute: '/mentoring/v1/mentees/joinSession/:id',
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
			sourceRoute: '/mentoring/v1/mentees/homeFeed',
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
			sourceRoute: '/mentoring/v1/mentees/reports',
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
			sourceRoute: '/mentoring/v1/mentees/profile',
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
			sourceRoute: '/mentoring/v1/mentees/create',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/mentees/update',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/mentees/getMenteeExtension/',
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
			sourceRoute: '/mentoring/v1/mentees/deleteMenteeExtension',
			type: 'DELETE',
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
			sourceRoute: '/mentoring/v1/mentors/reports',
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
			sourceRoute: '/mentoring/v1/mentors/profile',
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
			sourceRoute: '/mentoring/v1/mentors/profile/:id',
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
			sourceRoute: '/mentoring/v1/mentors/upcomingSessions',
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
			sourceRoute: '/mentoring/v1/mentors/upcomingSessions/:id',
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
			sourceRoute: '/mentoring/v1/mentors/share',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/mentors/share/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/mentors/create',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/mentors/update',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/mentors/getMentorExtension',
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
			sourceRoute: '/mentoring/v1/mentors/deleteMentorExtension',
			type: 'DELETE',
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
			sourceRoute: '/mentoring/v1/feedback/submit',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/feedback/submit/:id',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/feedback/forms',
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
			sourceRoute: '/mentoring/v1/questions/create',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/questions/update',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/questions/update/:id',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/questions/read',
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
			sourceRoute: '/mentoring/v1/questions/read/:id',
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
			sourceRoute: '/mentoring/v1/questionsSet/create',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/questionsSet/update',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/questionsSet/update/:id',
			type: 'PUT',
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
			sourceRoute: '/mentoring/v1/questionsSet/read',
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
			sourceRoute: '/mentoring/v1/questionsSet/read/:id',
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
			sourceRoute: '/mentoring/v1/users/pendingFeedbacks',
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
			sourceRoute: '/mentoring/v1/users/list',
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
			sourceRoute: '/mentoring/v1/issues/create',
			type: 'POST',
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
			sourceRoute: '/mentoring/v1/platform/config',
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
			sourceRoute: '/mentoring/v1/admin/userDelete',
			type: 'DELETE',
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
	],
}
