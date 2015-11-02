// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res) {
// 	if(req.url === '/') {
// 		fs.readFile('./titles.json', function(err, data) {
// 			if(err) {
// 				console.err(err);
// 				res.end('Server Error');
// 			} else {
// 				var titles = JSON.parse(data.toString());

// 				fs.readFile('./template.html', function(err, data) {
// 					if(err) {
// 						console.err(err);
// 						res.end('Server Error');
// 					} else {
// 						var tmpl = data.toString();

// 						var html = tmpl.replace('%', titles.join('</li><li>'));
// 						res.writeHead(200, {'Content-Type': 'text/html'});
// 						res.end(html);
// 					}
// 				});
// 			}
// 		});
// 	}
// }).listen(8000);

// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res) {
// 	getTitles(res);
// }).listen(8000);

// var getTitles = function(res) {
// 	fs.readFile('./titles.json', function(err, data) {
// 		if (err) {
// 			console.err(err);
// 		} else {
// 			getTemplate(JSON.parse(data.toString()), res);
// 		}
// 	});
// };

// var getTemplate = function(titles, res) {
// 	fs.readFile('./template.html', function(err, data) {
// 		if (err) {
// 			hadError(err, res);
// 		} else {
// 			formatHtml(titles, data.toString(), res);
// 		}
// 	});
// };

// var formatHtml = function(titles, tmpl, res) {
// 	var html = tmpl.replace('%', titles.join('</li><li>'));
// 	res.writeHead(200, {'Content-Type': 'text/html'});
// 	res.end(html);
// };

// var hadError = function(err, res) {
// 	console.err(err);
// 	res.end('Server error');
// };

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	getTitles(res);
}).listen(8000);

var getTitles = function(res) {
	fs.readFile('./titles.json', function(err, data) {
		if (err) {
			return hadError(err, res);
		}

		getTemplate(JSON.parse(data.toString()), res);
	});
};

var getTemplate = function(titles, res) {
	fs.readFile('./template.html', function(err, data) {
		if (err) {
			return hadError(err, res);
		}

		formatHtml(titles, data.toString(), res);
	});
};

var formatHtml = function(titles, tmpl, res) {
	var html = tmpl.replace('%', titles.join('</li><li>'));
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
};

var hadError = function(err, res) {
	console.error(err);
	res.end('Server error');
};
























