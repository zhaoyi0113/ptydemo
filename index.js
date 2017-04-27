var pty = require('pty.js');

var term = pty.spawn('mongo', ['mongodb://localhost/admin']);
let skip=false

term.on('exit', (data)=>{
  console.log('exit ', data);
});
term.on('error', (error)=>{
  console.log('error:', error);
})

term.write('show dbs\r', 'utf8');
term.write('\t\t\n', 'utf8');
// console.log(term);
term.on('data', function(data) {
  console.log('xxx:',data);
});
