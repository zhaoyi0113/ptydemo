var child_pty = require('child_pty');
var child = child_pty.spawn('mongo', []);
 var LineStream = require('byline').LineStream;
 var lineStream = new LineStream();
child.stdout.on('resize', function() {
  console.log('New columns: ' + this.columns);
	console.log('New rows:    ' + this.rows);
}).pipe(lineStream);
child.stdout.resize({ columns: 80, rows: 48 });
child.stdout.on('data', (data)=>{
  console.log(data.toString());
})

child.stdin.write('show dbs\r');
child.stdin.write('\t\t');
// child.stdin.write('show dbs\n');
