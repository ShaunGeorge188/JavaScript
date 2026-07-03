//map is used to apply a function to each of the elements of an array.

const arr = [5, 1, 3, 2, 6];

// function double(x){
//     return x * 3;
// }

// const output = arr.map(double);


//using arrow function.
const output = arr.map((num) => num + 1);
console.log(output);

const result = arr.map((num) => num.toString(2));
console.log(result);