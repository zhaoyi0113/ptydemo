let pty = require('node-pty');
const stripAnsi = require('strip-ansi');
const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');
let ptyProcess = pty.spawn('mongo', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

ptyProcess.on('data', function(data) {
  const o = decoder.write(data);
  process.stdout.write(o);
});
ptyProcess.on('exit', function(data) {
  console.log('exit', data);
});
setTimeout(() => {
  ptyProcess.write('show dbs');
}, 1000);
setTimeout(() => {
  ptyProcess.write('\r');
}, 2000);


// ptyProcess.write('db.getSiblingDB("admin").runCommand( { getParameter : "*" })');