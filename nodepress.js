const {
  spawn
} = require('child_process');

process.stdin.setEncoding('utf8');

let shell = spawn('bash', ['-i','-c','-l','mongo']);
// let shell = spawn('stdbuf', ['-i0', '-o0', '-e0', 'mongo']);
// let shell = spawn('unbuffer', ['mongo'])
//
// let shell = spawn('mongo')

// shell.stdin.pipe(process.stdin);
// shell.stdout.pipe(process.stdout);

// process.stdin.setRawMode(true);

// process.stdout.write('show dbs');

shell.stdout.on('data', (d)=>{
  console.log(`mongo read  ${d}`);
})
shell.stderr.on('data', (err)=>{
  console.log(`error: ${err}`)
})
shell.stdin.write('show dbs');
shell.stdin.write('(\r')
