var events = require('events').EventEmitter;
var net = require('net');

var channel = new events();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client){
	this.clients[id] = client;
	this.subscriptions[id] = function(senderId, message) {
		if (id !== senderId) {
			this.clients[id].write(message);
		}
	};
	this.on('broadcast', this.subscriptions[id]);

	this.on('leave', function(id) {
		this.removeListener('broadcast', this.subscriptions[id]);
		channel.emit('broadcast', id, id + "has left the chat.\n");
	});

	this.on('shutdown', function(){
		channel.emit('broadcast', '', "Chat has been shut down.\n");
		channel.removeAllListeners('broadcast');
	});
});

var server = net.createServer(function(client){
	var id = client.remoteAddress + ":" + client.remotePort;
	channel.emit('join', id, client);
	client.on('data', function(data){
		data = data.toString();
		if (data === 'shutdown\r\n') {
			channel.emit('shutdown');
		}
		channel.emit('broadcast', id, data);
	});
	client.on('close', function(){
		channel.emit('leave', id);
	});
});

server.listen(8888);