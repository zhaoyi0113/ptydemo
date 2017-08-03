let pty = require('node-pty');

let ptyProcess = pty.spawn('cmd',{
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
});

ptyProcess.write('echo ("hello world")\r');
ptyProcess.on('data', function(data) {
    console.log('got data:' + data + '.');
});