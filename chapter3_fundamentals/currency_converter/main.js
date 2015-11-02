// var currency = require('./currency');

// console.log('50 Canadian dollars equals this amount of US dollars: ');
// console.log(currency.canadianToUS(50));

// console.log('30 US dollars equals this amount of Canadian dolalrs: ');
// console.log(currency.USToCanadian(30));

var Currency = require('./currency');

var canadianDollar = 0.91;

var currency = new Currency(canadianDollar);
console.log(currency.canadianToUS(50));