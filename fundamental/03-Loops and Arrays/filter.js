const array = [5, 1, 3, 2, 6];


// const res = array.filter((x) => {
//     return x > 4;
// });

function isOdd(x){
    return x % 2 !== 0;
}
const res = array.filter(isOdd);
console.log(res);