let pty = require('node-pty');
var os = require('os');
console.log(os.platform());
console.log('dirname=', __dirname);
const fs = require('fs');

fs.readdir('/tmfsfp', (err, files) => {
    console.log('xxxx:', files, err);
})
const dirname = __dirname;
let ptyProcess = pty.spawn('bash', ['-c', 'mongo --host localhost --shell ' + dirname + '/load.1js'], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
});

ptyProcess.write('show dbs\r');
ptyProcess.on('data', function(data) {
    //console.log('got data:' + data + '.');
});
ptyProcess.on('exit', function(data) {
    console.log('exit', data);
});
//ptyProcess.write('load("/Users/joey/dev/dbenvy-controller/src/mongoScripts/dbe_functions.js");');
// ptyProcess.write('db.inspections.find(\r');
// ptyProcess.write(')\r');