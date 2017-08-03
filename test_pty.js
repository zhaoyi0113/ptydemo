var os = require('os');
var pty = require('node-pty');
var stripAnsi = require('strip-ansi');
pty.spawn('c:\tools\3.4\bin\mongo.exe')
// path to mongo shell on os
var shellCommand =  os.platform() === 'win32' ? 'powershell.exe' : 'bash';
var ptyProcess = pty.spawn(shellCommand, ['-c', 'mongo', 'mongodb://ec2-13-54-17-227.ap-southeast-2.compute.amazonaws.com/admin','--username','dbenvy', '--password', 'DBEnvy2016'], {
    name: 'xterm-color',
    cols: 100,
    rows: 10000,
    cwd: process.env.HOME,
    env: process.env
});

var LineStream = require('byline').LineStream;
var lineStream = new LineStream();
ptyProcess.pipe(lineStream);
lineStream.on('readable', function() {
    var line;
    while (null !== (line = lineStream.read())) {
        console.log('byline:', stripAnsi(line));
    }
    lineStream._flush(() => {});
});
lineStream.on('endOfOutput', function() {
    console.log('---------END--------');
});

ptyProcess.on('data', (d) => {

    // console.log('data:', d);
})

ptyProcess.on('exit', function(e) {
    console.log('exit:', e);
});

// ptyProcess.destroy();

//  lineStream.on('readable', function() {
//    var line;
//    while (null !== (line = lineStream.read())) {
//      console.log(line.toString());
//    }
//  });

// ptyProcess.on('data', (data)=>{
//   console.log(data);
// });
// ptyProcess.write('var prompt="dbenvy> "\n')
ptyProcess.write('show dbs\n');
ptyProcess.write('show dbs\n');
ptyProcess.write('show dbs\n');
ptyProcess.write('show dbs\n');
ptyProcess.write('show dbs\n');
// ptyProcess.write('\x03');
// ptyProcess.write('\b\b\b');
// ptyProcess.write('show collections \n');
// ptyProcess.write('}\r');
// ptyProcess.write('db.\t\t')