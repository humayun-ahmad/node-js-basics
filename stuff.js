// all are right and same result given
/*
var counter = function (arr) {
  return "There are " + arr.length + " element in this array";
}

var adder = function (a,b) {
  return `The sum of the 2 numbers is ${a+b}`;
}

var pi = 3.1416;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/

/*
module.exports.counter = function (arr) {
  return "There are " + arr.length + " element in this array";
}

module.exports.adder = function (a,b) {
  return `The sum of the 2 numbers is ${a+b}`;
}

module.exports.pi = 3.1416;
*/

var counter = function (arr) {
  return "There are " + arr.length + " element in this array";
}

var adder = function (a,b) {
  return `The sum of the 2 numbers is ${a+b}`;
}

var pi = 3.1416;

module.exports = {
  counter : counter,
  adder: adder,
  pi : pi
};
