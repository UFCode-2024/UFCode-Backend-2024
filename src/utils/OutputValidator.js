const fs = require('fs').promises

async function validateOutput(output, expectedOutput) {
    expectedOutput = expectedOutput + "\n"
    return output == expectedOutput 
}

module.exports = validateOutput
