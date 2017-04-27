let pty = require('node-pty');
var os = require('os');
console.log(os.platform());
let ptyProcess = pty.spawn('bash', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

ptyProcess.write('ls\r');
ptyProcess.on('data', function(data) {
  console.log('got data:'+data+'.');
});
// ptyProcess.write('use city\r');
// ptyProcess.write('db.inspections.find(\r');
// ptyProcess.write(')\r');
