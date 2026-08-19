console.log("This is a Promise");

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you")
    }else{
        setTimeout(() => {
            console.log("Yes I'm done")
            resolve("Shaun")
        }, 3000);
    }
})

prom1.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err);
})