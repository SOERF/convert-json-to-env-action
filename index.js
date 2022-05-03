const core = require('@actions/core')
const jsonfile = require('jsonfile')
const constantCase = require('constant-case')

try {
    const file = core.getInput('json-file')
    const jsonContent = jsonfile.readFileSync(file)

    let envContent = ""
    for (let key in jsonContent) {
        let constantKey = constantCase.constantCase(key)
        core.exportVariable(constantKey, jsonContent[key])
    }
} catch (error) {
    core.setFailed(error.message);
}