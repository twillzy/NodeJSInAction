// var canadianDollar = 0.91;

// var roundTwoDecimals = function(amount) {
// 	return Math.round(amount * 100) / 100;
// };

// exports.canadianToUS = function(canadian) {
// 	return roundTwoDecimals(canadian * canadianDollar);
// };

// exports.USToCanadian = function(us) {
// 	return roundTwoDecimals(us / canadianDollar);
// };

var Currency = function(canadianDollar) {
	this.canadianDollar = canadianDollar;
};

Currency.prototype.roundTwoDecimals = function(amount) {
	return Math.round(amount * 100) / 100;
};

Currency.prototype.canadianToUS = function(canadian) {
	return this.roundTwoDecimals(canadian * this.canadianDollar);
};

Currency.prototype.USToCanadian = function(us) {
	return this.roundTwoDecimals(us / this.canadianDollar);
};

module.exports = Currency;