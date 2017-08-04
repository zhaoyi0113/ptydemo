let pty = require('node-pty');
var os = require('os');
const { StringDecoder } = require('string_decoder');
console.log(os.platform(), os.release());
console.log('dirname=', __dirname);
const path = require('path');
const fs = require('fs');
const stripAnsi = require('strip-ansi');
var shellCommand = os.platform() === 'win32' ? 'cmd' : 'bash';
console.log('path = ', path.join(__dirname, '\\'));
const dirname = __dirname;
const decoder = new StringDecoder('utf8');
const baseEnv = Object.assign({}, process.env, {
  LANG: 'en_US.UTF-8',
  TERM: 'xterm-256color',
});
let ptyProcess = pty.spawn('cmd.exe', ['/c', 'mongo '], {

  cols: 10000,
  rows: 24,
  cwd: process.env.HOME,
  env: baseEnv
});

ptyProcess.on('data', function(data) {
  const o = decoder.write(data);
  console.log(o);
});
ptyProcess.on('exit', function(data) {
  console.log('exit', data);
});
ptyProcess.write('db.getSiblingDB("admin").runCommand( { getParameter : "*" })');
// ptyProcess.write('dir\r')
// ptyProcess.write('use SampleCollections\r');
// ptyProcess.write('show collections\r');
// ptyProcess.write('db.explains.find().limit(20).toArray()\r');
// ptyProcess.write('show dbs\r');
// ptyProcess.write('show dbs');
// ptyProcess.write('\r');
// ptyProcess.write('show dbs\r');
// ptyProcess.write('show dbs\r');
// ptyProcess.write('show dbs\r');
//ptyProcess.write('load("/Users/joey/dev/dbenvy-controller/src/mongoScripts/dbe_functions.js");');
// ptyProcess.write('db.inspections.find(\r');
// ptyProcess.write(')\r');
//ptyProcess.destroy();