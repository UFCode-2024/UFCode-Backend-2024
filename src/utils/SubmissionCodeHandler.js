const { spawn } = require('child_process');

async function invokeSubmission(filePath, inputString, err, success) {
    const python = spawn('python', [filePath]);
    const inputBuffer = Buffer.from(inputString, 'utf-8');

    let stdout = "";
    let stderr = "";
    let responseSent = false; // Flag to check if response has been sent

    var uint8arrayToString = function(data){
        return String.fromCharCode.apply(null, data);
    };

    python.stdin.write(inputBuffer);
    python.stdin.end();

    python.stdout.on('data', (data) => {
        stdout += uint8arrayToString(data);
    });

    python.stderr.on('data', (data) => {
        stderr += uint8arrayToString(data);
    });

    const timeout = setTimeout(() => {
        if (!responseSent) {
            python.kill('SIGKILL'); // Mata a execução se exceder o tempo limite for atingido
            responseSent = true;
            err("Execution time exceeded");
            console.log("Execution time exceeded");
        }
    }, 1000); // 1 seg

    python.on('close', (code) => {
        clearTimeout(timeout); // Clear the timeout if the process closes before timing out
        if (!responseSent) {
            responseSent = true;
            if (code === 0) {
                success(stdout);
            } else {
                err(stderr || 'Unknown error occurred');
            }
        }
    });
}

module.exports = invokeSubmission;
