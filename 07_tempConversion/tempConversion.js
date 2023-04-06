const convertToCelsius = function(temp) {
  let converted = (temp - 32) * .5556
  return Math.round(converted * 10) / 10
};

const convertToFahrenheit = function(temp) {
  let converted = (temp * 1.8) + 32
  return Math.round(converted * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
