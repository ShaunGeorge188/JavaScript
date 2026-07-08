// Method-2

// const btn = document.querySelector('#btn');

// btn.onclick = () => alert("Hello World");

// Method-3

const btn = document.querySelector('#btn');
// btn.addEventListener("click", () => {
//     alert("Hello World");
// });

// with function

function alertFunction(){
    alert("Hello, World!!!");
}

btn.addEventListener("click", alertFunction);

btn.addEventListener("click", function(e) {
    console.log(e.target);
});


const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
