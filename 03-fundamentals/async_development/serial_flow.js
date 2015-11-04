// setTimeout(function(){
// 	console.log('I execute first');
// 	setTimeout(function(){
// 		console.log('I execute second');
// 		setTimeout(function(){
// 			console.log('I execute last');
// 		}, 100);
// 	}, 500);
// },1000);

// Serial flow control with Nimble

var flow = require('nimble');

flow.series([
	function(callback) {
		setTimeout(function(){
			console.log('I execute first');
			callback();
		}, 1000);
	},
	function(callback) {
		setTimeout(function(){
			console.log('I execute second');
			callback();
		}, 500);
	},
	function(callback) {
		setTimeout(function(){
			console.log('I execute last');
			callback();
		}, 100);
	}
]);