const sumAll = function(arg1, arg2) {
    let sum = 0
    if (!Number.isInteger(arg1) || !Number.isInteger(arg2) || arg1 < 0 || arg2 < 0) {
        return "ERROR"
    } else {
    let first, second = 0;
    if (arg1 > arg2) { 
        first = arg2
        second = arg1
    } else {
        first = arg1
        second = arg2
    }
    for (let index = first; index <= second; index++){
        sum += index
    }
    return sum
}
};

// Do not edit below this line
module.exports = sumAll;
