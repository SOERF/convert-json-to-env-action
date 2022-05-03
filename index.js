const core = require('@actions/core')
const jsonfile = require('jsonfile')
const constantCase = require('constant-case')
const _get = require('lodash.get');

try {
    const file = core.getInput('json-file')
    const attribute = core.getInput('json-attribute')
    let jsonObject = jsonfile.readFileSync(file)

    if(attribute) {
        jsonObject = _get(jsonObject, attribute)
    }

    let envContent = ""
    for (let key in jsonObject) {
        let constantKey = constantCase.constantCase(key)
        core.exportVariable(constantKey, jsonObject[key])
    }
} catch (error) {
    core.setFailed(error.message);
}