const fs = require('fs').promises

async function validateOutput(output, expectedOutput) {
    expectedOutput = expectedOutput + "\n"
    console.log(output)
    return output == expectedOutput 
}

module.exports = validateOutput
