//this async means this functionwill run in the background.
// async function getData(){
//     // Simulate getting data from a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject
// resolve means promise has settled successfully
// reject means promise has not settled successfully

async function getData(){
    // Simulate getting data from a server
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
}

async function main(){
    console.log("Loading modules")
    console.log("Do something  else")
    console.log("Load data")
    
    let data = await getData() // it waits.
    //if not await then it just return promise, because data is not loaded yet.

    console.log(data)

    console.log("process data")

    console.log("task 2")
}

main();