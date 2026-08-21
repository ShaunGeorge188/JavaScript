const names = ["ShaunGeorge", "Ankit", "UttkarshSingh", "HarsKumr"];

const Gryffindor = [];
const Hufflepuff = [];
const Ravenclaw = [];
const Slytherin = [];

names.forEach(name => {
    if (name.length < 6) {
        Gryffindor.push(name);
    } else if (name.length < 8) {
        Hufflepuff.push(name);
    } else if (name.length < 12) {
        Ravenclaw.push(name);
    } else {
        Slytherin.push(name);
    }
})

console.log(Gryffindor);
console.log(Hufflepuff);
console.log(Ravenclaw);
console.log(Slytherin);