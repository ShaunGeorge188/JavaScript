const para = document.querySelector('p');
para.textContent = "Hey I'm  red!";

const newPara = document.createElement('p');

newPara.textContent = "Hey I'm blue!";

document.body.appendChild(newPara);

const container = document.createElement('div');

//container.setAttribute("class", "theBox");

//or

container.classList.add("theBox"); //It is the modern preffered way.

container.style.border = "5px solid black";
container.style.backgroundColor = "pink";
container.style.textAlign = "center";

const title = document.createElement('h1');
title.textContent = "I'm in a div";

const paragraph = document.createElement('p');
paragraph.textContent = "ME TOO!";

container.appendChild(title);
container.appendChild(paragraph);

document.body.appendChild(container);