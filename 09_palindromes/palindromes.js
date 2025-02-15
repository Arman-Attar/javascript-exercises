const allowed = 'abcdefghijklmnopqrstuvwxyz0123456789'

const palindromes = function (string) {

const newString = string
.toLowerCase()
.split('')
.filter((char) => allowed.includes(char))
.join('')

reversedString = newString.split('').reverse().join('')

return newString == reversedString
};

// Do not edit below this line
module.exports = palindromes;
