//So, what redeuce does is it goes through every element apply the callback and return a 'single Total' value.

// acc = to accumulate the sum or any op.
// curr = the current value in array.

// we use two arguments here, the second argument 0, is the initial value of acc.

const arry = [5, 1, 3, 2, 6];

// const final = arry.reduce(function(acc, curr) {
//     return acc = acc + curr;
// }, 0);


// to find max inside this array.
const final = arry.reduce((max, curr) => {
    if(curr > max){
        max = curr;
    }
    return max;
}, 0);
console.log(final); //6.