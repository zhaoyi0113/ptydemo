var pty = require('pty.js');

var term = pty.spawn('bash', [], {
  name: 'xterm-color',
  cols: 80,
  rows: 30,
  cwd: process.env.HOME,
  env: process.env
});

term.on('data', function(data) {
  console.log(data);
});

// term.write('echo hello\n');
// term.resize(100, 40);
// term.write('ls /\r');

// console.log('process:',term.process);


const partern = '\S+';
const m = 'dfas:kdlsf@lkdjsa:99\ndkljsl'.match(/(\S+):(\S+)@(\S+)(:(\d+))?/);
console.log(m)
