//how to initialize an array.
const  a = [["A", "B"], [1, 2]];

//console.log(a[0][1]);
a[1][2] = 67;

console.log(a[1]);

//length  of an array.
console.log(a.length); //2.

//push  elements.
a.push("E");
a.push(3);
console.log(a)

//remove items from end.
a.pop();
console.log(a);

//remove specific element.
delete a[2];

//splice  syntax - arr.splice(start, deleteCount, [elements  to  insert]
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

console.log( arr ) // now ["Let's", "dance", "right", "now"]

//slice ===  copy a range.
let arr = ["t", "e", "s", "t"];

console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)

console.log( arr.slice(-2) ); // s,t (copy from -2 till the end)

//concat. 
let arr = [1, 2];

// create an array from: arr and [3,4]
console.log( arr.concat([3, 4]) ); // 1,2,3,4

// create an array from: arr and [3,4] and [5,6]
console.log( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// create an array from: arr and [3,4], then add values 5 and 6
console.log( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6
