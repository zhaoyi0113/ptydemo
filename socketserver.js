const net = require('net');

net.createServer((socket)=>{
  socket.pipe(socket);
  socket.on('data', (data)=>{
    console.log('receive data ', data.toString());
    socket.write('this is server')

  });
}).listen(3000);

console.log("Chat server running at port 5000\n");

let client = net.Socket.call(this);
client.setEncoding('utf8');
client.connect(3000, '127.0.0.1', function() {
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});

client.on('data', function(data) {
	console.log('Received: ' + data);
});
