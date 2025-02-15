const add = function(a, b) {
	return a + b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	return array.reduce((total, current) => total += current, 0)
};

const multiply = function(array) {
  return array.reduce((total, current) => total * current)
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(number) {
let sum = 1
for (let index = number; index > 0; index--) {
  sum *= index
}
return sum
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
