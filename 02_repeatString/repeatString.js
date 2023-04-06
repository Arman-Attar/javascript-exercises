const repeatString = function(word, number) {
    let newWord = ''
    if (number < 0) {
        newWord = 'ERROR'
    } else if (number == 0 || word == '') {
        newWord = ''
    } else {
        for (let i = 0; i < number; i++) {
            newWord = newWord + word
        }
    }
    return newWord
};

// Do not edit below this line
module.exports = repeatString;
