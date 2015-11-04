var asyncfunction = function(callback){
	setTimeout(callback, 200);
	//callback();
};

var color = 'blue';

asyncfunction(function(){
	console.log('The color is ' + color);
});

color = 'green';

// this one outputs 'green'