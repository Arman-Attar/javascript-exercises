const fibonacci = function(number) {
let convertedNumber = parseInt(number)
if (convertedNumber == 0) return 0
if (convertedNumber < 0) {
    return "OOPS"
}
let first = 1
let second = 0

for (let i = 2; i <= convertedNumber; i++){
    let current = first + second
    second = first
    first = current
}
return first
};

// Do not edit below this line
module.exports = fibonacci;



