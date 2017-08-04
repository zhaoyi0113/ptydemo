let pty = require('node-pty');
const stripAnsi = require('strip-ansi');
const LineStream = require('byline').LineStream;

let ptyProcess = pty.spawn('bash', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

ptyProcess.on('data', function(data) {
  const o = stripAnsi(data);

  console.log(o);
});
ptyProcess.on('exit', function(data) {
  console.log('exit', data);
});
setTimeout(() => {
  ptyProcess.write('db.getSiblingDB("admin").runCommand( { getParameter : "*" })\r');
}, 2000);