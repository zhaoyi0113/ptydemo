let pty = require('node-pty');
const stripAnsi = require('strip-ansi');
let ptyProcess = pty.spawn('mongo', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

ptyProcess.on('data', function(data) {
  const o = stripAnsi(data);
  process.stdout.write(o);
});
ptyProcess.on('exit', function(data) {
  console.log('exit', data);
});
setTimeout(() => {
  ptyProcess.write('db');
}, 1000);
setTimeout(() => {
  ptyProcess.write('\r');
}, 1000);


// ptyProcess.write('db.getSiblingDB("admin").runCommand( { getParameter : "*" })');