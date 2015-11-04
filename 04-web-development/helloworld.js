var http = require('http');
var server = http.createServer(function(req, res) {
	res.end('Hello World');
}).listen(8000);