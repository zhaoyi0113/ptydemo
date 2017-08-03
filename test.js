
const spawn = require('node-pty').spawn;
const spawnOptions = {
      name: 'xterm-color',
      cols: 10000,
      rows: 10000,
      cwd: '.',
      env: process.env
    };

try{
    spawn('c:\tools\3.4\bin\mongo', ['mongodb://192.168.1.5'], spawnOptions)
}catch(_){
    console.log('error')
}
