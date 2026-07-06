const container = document.querySelector('#container');

const display = container.firstElementChild;
console.log(display);

const controls = document.querySelector('.controls');

const display2 = controls.previousElementSibling;
console.log(display2);

//Element creation.
//document.createElement("tagName", [options]);

//document.createElement("div");  //it does not put div in the dom page but creates in it's memory, to put it in the page use these methods.

//Append elements.
//parentNode.appendChild(childNode) --> appends in last.
//parentNode.insertBefore(newNode, referenceNode)  --> appends before

//Remove elements.
//parentNode.removeChild(child);
//------------*-----------------*---------------


//Altering elements.
//div.style.color = "blue";
//or
//div.style["background-color"] = "Blue";
//div.style.backgroundColor;

//Editing attributes.
//div.setAttribute("id", "theDiv");  //create and id with value 'theDiv'

//div.getAttribute("id");

//Adding text content.
//div.textContent = "Hello World!";

//adding html content;
//div.innerHTML = "<span>Hello World!</span>";


const content = document.createElement("div");

content.classList.add("content");
content.textContent = "This is a glorious text-content!";

container.appendChild(content);