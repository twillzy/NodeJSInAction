var net = require('net');

var server = net.createServer(function(socket){
	// can use socket.once if only to write once
	socket.on('data', function(data) {
		socket.write(data);
	});
});

server.listen(8888);