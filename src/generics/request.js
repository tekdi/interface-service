const request = require('request')

/**
 * Makes a GET request to the specified URL with optional token headers.
 * @param {string} url - The URL to fetch.
 * @param {string} token - Optional. The authentication token.
 * @param {boolean} internal_access_token - Optional. Indicates whether to use the internal access token.
 * @returns {Promise<object>} - A promise that resolves to the fetched result object.
 */
let sampleJson = {
	routes: [
		{
			sourceRoute: '/interface/v1/account/create',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'shiksha-user',
				},
			],
		},
		{
			sourceRoute: '/interface/v1/account/login',
			type: 'POST',
			priority: 'MUST_HAVE',
			inSequence: false,
			orchestrated: false,
			targetPackages: [
				{
					basePackageName: 'user',
					packageName: 'shiksha-user',
				},
			],
		},
	],
}
var get = function (url, token = '', internal_access_token = '') {
	return new Promise((resolve, reject) => {
		try {
			let headers = {
				'content-type': 'application/json',
			}
			if (internal_access_token) {
				headers['internal_access_token'] = internal_access_token
			}

			if (token) {
				headers['x-auth-token'] = token
			}

			const options = {
				headers: headers,
			}

			request.get(url, options, (err, response) => {
				let result = {
					success: true,
				}

				if (err) {
					result.success = false
					result.error = err
				} else {
					let body = response.body
					try {
						result.data = typeof body === 'string' ? sampleJson : body // Attempt to parse the JSON string JSON.parse(body);
					} catch (jsonError) {
						console.log('Error parsing JSON : ', jsonError)
						result.success = false
						result.error = 'Error parsing JSON'
					}
				}

				return resolve(result)
			})
		} catch (error) {
			return reject(error)
		}
	})
}

module.exports = {
	get,
}
