let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b> Let's goo you clicked and added event listener !! </b> Enjoy your click !!"
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key)
})