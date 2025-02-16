const findTheOldest = function(people) {
return people.reduce((ac, person) => {
    if (getAge(ac.yearOfDeath, ac.yearOfBirth) < getAge(person.yearOfDeath, person.yearOfBirth)) {
        ac = person
    }
    return ac
})

};


function getAge(death, birth) {
    if (isNaN(death)){
        return (new Date().getFullYear()) - birth
    } 
    return death - birth
}
// Do not edit below this line
module.exports = findTheOldest;
