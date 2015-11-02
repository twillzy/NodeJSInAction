var canadianDollar = 0.91;

var roundTwoDecimals = function(amount) {
	return Math.round(amount * 100) / 100;
};

exports.canadianToUS = function(canadian) {
	return roundTwoDecimals(canadian * canadianDollar);
};

exports.USToCanadian = function(us) {
	return roundTwoDecimals(us / canadianDollar);
};