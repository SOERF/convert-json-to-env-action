const core = require('@actions/core')
const jsonfile = require('jsonfile')
const constantCase = require('constant-case')

try {
    const file = core.getInput('json-file')
    const jsonContent = jsonfile.readFileSync(file)

    let envContent = ""
    for (let key in jsonContent) {
        let constantKey = constantCase.constantCase(key)
        envContent += `${constantKey}="${jsonContent[key]}"\n`
    }
    core.setOutput("env", envContent);
} catch (error) {
    core.setFailed(error.message);
}