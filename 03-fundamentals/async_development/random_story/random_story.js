var fs = require('fs');
var request = require('request');
var htmlparser = require('htmlparser');
var configFileName = './rss_feed.txt';

var checkForRSSFile = function() {
	fs.exists(configFileName, function(exists){
		if (!exists) {
			return next(new Error('Missing RSS file: ' + configFileName));
		}

		next(null, configFileName);
	});
};

var readRSSFile = function() {
	fs.readFile(configFileName, function(err, feedList){
		if (err) {
			return next(err);
		}

		feedList = feedList
								.toString()
								.replace(/^\s+|\s+$/g, '')
								.split('\n');

		var random = Math.floor(Math.random() * feedList.length);
		next(null, feedList[random]);
	});
};

var downloadRSSFeed = function(feedUrl){
	request({uri: feedUrl}, function(err, res, body){
		if (err) {
			return next(err);
		}

		if (res.statusCode !== 200) {
			return next(new Error('Abnormal response status code'));
		}

		next(null, body);
	});
};

var parseRSSFeed = function(rss){
	var handler = new htmlparser.RssHandler();
	var parser = new htmlparser.Parser(handler);
	parser.parseComplete(rss);

	if (!handler.dom.items.length) {
		return next(new Error('No RSS items found'));
	}

	var item = handler.dom.items.shift();
	console.log(item.title);
	console.log(item.link);
};

var tasks = [checkForRSSFile, readRSSFile, downloadRSSFeed, parseRSSFeed];

var next = function(err, result) {
	if (err) {
		throw err;
	}

	var currentTask = tasks.shift();

	if(currentTask) {
		currentTask(result);
	}
};

next();