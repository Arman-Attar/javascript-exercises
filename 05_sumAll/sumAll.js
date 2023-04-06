const sumAll = function(number1, number2) {
    if ((!Number.isInteger(number1) || number1 < 0) || (!Number.isInteger(number2) || number2 < 0)) {
        return 'ERROR'
    } else {
        let first = number1 > number2 ? number2 : number1
        let last = number1 == first ? number2 : number1
        let sum = first;
        for (let i = first+1; i <= last; i++) {
            sum += i
        }
        return sum
    }
};

// Do not edit below this line
module.exports = sumAll;
