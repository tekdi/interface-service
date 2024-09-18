exports.passThroughRouteSchema = {
    "type": "object",
    "properties": {
        "sourceRoute": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "priority": {
            "type": "string"
        },
        "inSequence": {
            "type": "boolean"
        },
        "orchestrated": {
            "type": "boolean"
        },
        "targetPackages": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "basePackageName": {
                            "type": "string"
                        },
                        "packageName": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "basePackageName",
                        "packageName"
                    ]
                }
            ]
        }
    },
    "required": [
        "sourceRoute",
        "type",
        "priority",
        "inSequence",
        "orchestrated",
        "targetPackages"
    ]
}
exports.orchestratedRouteSchema = {
    "type": "object",
    "properties": {
        "sourceRoute": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "priority": {
            "type": "string"
        },
        "inSequence": {
            "type": "boolean"
        },
        "orchestrated": {
            "type": "boolean"
        },
        "targetPackages": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "basePackageName": {
                            "type": "string"
                        },
                        "packageName": {
                            "type": "string"
                        },
                        "targetBody": {
                            "type": "array",
                            "items": {}
                        },
                        "responseBody": {
                            "type": "array",
                            "items": {}
                        }
                    },
                    "required": [
                        "basePackageName",
                        "packageName",
                        "targetBody",
                        "responseBody"
                    ]
                }
            ]
        }
    },
    "required": [
        "sourceRoute",
        "type",
        "priority",
        "inSequence",
        "orchestrated",
        "targetPackages"
    ]
}