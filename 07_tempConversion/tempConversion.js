const convertToCelsius = function(arg) {
  let celcius = (arg - 32) * (5/9)
  return Math.round(celcius * 10) / 10
};

const convertToFahrenheit = function(arg) {
  let fahrenheit = (arg * 1.8) + 32
  return Math.round(fahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
