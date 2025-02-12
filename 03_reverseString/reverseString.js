const reverseString = function(input) {
const charSet = input.split('');
let reverseString = ""
for (let index = charSet.length-1; index >= 0; index--){
    reverseString += charSet[index]
}
return reverseString
};
// Do not edit below this line
module.exports = reverseString;
