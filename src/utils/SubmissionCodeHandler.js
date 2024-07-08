const { spawn } = require('child_process');
const fs = require('fs').promises

async function invokeSubmission(filePath, inputString, err, success) {
    const python = spawn('python', [filePath]);

    const inputBuffer = Buffer.from(inputString, 'utf-8')

    var uint8arrayToString = function(data){
        return String.fromCharCode.apply(null, data);
    };
    
    let stdout = ""
    let stderr = ""
    python.stdin.write(inputBuffer)
    python.stdin.end()

    python.stdout.on('data', (data) => {
        stdout = stdout + uint8arrayToString(data)
    });

    python.stderr.on('data', (data) => {
        stderr = stderr + uint8arrayToString(data)
    });

    python.on('close', (code) => {
        if (code == 0) {
            // 0 significa sucesso, então envie stdout
            success(stdout)
        } else {
            stderr = stderr.split(',')
            err(stderr[1] + stderr[2])
        }
    });
}

module.exports = invokeSubmission