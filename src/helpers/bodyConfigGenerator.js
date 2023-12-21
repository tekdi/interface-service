'use strict'
const { addToNestedObject } = require('./addToNestedObject')

exports.bodyConfigGenerator = (targetBody /* ,processors */) => {
	try {
		let bodyConfig = {}
		//const objectTypeSymbol = Symbol.for('objectTypeSymbol')
		for (const target of targetBody)
			addToNestedObject(bodyConfig, target.targetField.split('.'), target.sourceField /* , objectTypeSymbol */)
		/* for (const processor of processors)
			bodyConfig[`${processor.targetField}`] = {
				inputFields: processor.inputFields,
				processor,
				[objectTypeSymbol]: 'processor',
			} */
		return bodyConfig
	} catch (err) {
		console.log(err)
	}
}

/* bodyConfigGenerator(
	[
		{ sourceField: 'profile', targetField: 'profile' },
		{ sourceField: 'profile.name', targetField: 'name' },
		{ sourceField: 'profile.designation', targetField: 'designation' },
		{ sourceField: 'profile.name', targetField: 'additional.name' },
		{ sourceField: 'profile.designation', targetField: 'additional.designation' },
		{ sourceField: 'profile.name', targetField: 'temp.name' },
		{ sourceField: 'profile.designation', targetField: 'temp.designation' },
		{ sourceField: 'profile.name', targetField: 'temp.temp2.name' },
		{ sourceField: 'profile.designation', targetField: 'temp.temp2.designation' },
	],
	[
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
	]
); */

/* 
    bodyConfig: {
        profile: 'profile',
        name: 'profile.name',
        designation: 'profile.designation',
        additional: {
            [_type]: 'object',
            name: 'profile.name',
            designation: 'profile.designation',
        },
        nameDesignation: {
            [_type]: 'processor',
            input1: 'profile.name',
            input2: 'profile.designation',
            processor: (name, designation) => {
                return `${name} - ${designation}`;
            },
        },
        'profile.nameDesignation2': {
            input1: 'profile.name',
            input2: 'profile.designation',
            processor: (name, designation) => {
                return `${name} - ${designation}`;
            },
        },
    }, 
*/
