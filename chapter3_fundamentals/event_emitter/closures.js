var asyncFunction = function(callback) {
	setTimeout(callback, 200);
};

var color = 'blue';

// using an anonymous function to preserve a global variable's value

// var closeThisBish = function(color) {
// 	asyncFunction(function(){
// 		console.log('The color is ' + color);
// 	});
// };

// closeThisBish(color);

// color = 'green';

// closeThisBish(color);
// this one outputs 'blue'

(function(color){
	asyncFunction(function(){
		console.log('The color is ' + color);
	});
})(color);

color = 'green';