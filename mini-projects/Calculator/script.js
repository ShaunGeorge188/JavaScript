let firstNumber = '';
let operator = '';
let secondNumber = '';
let operatorName = '';

const display = document.querySelector('#display');
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    operatorName = '';
});

const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if(operator === ''){
            firstNumber += button.textContent;
        }
        else{
            secondNumber += button.textContent;
        }
        display.textContent = operator === '' ? firstNumber : secondNumber;
    });
});

const operatorButtons = document.querySelectorAll('.operator');

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operator = button.textContent;
        if(operator === '+') operatorName = 'add';
        else if(operator === '-') operatorName = 'substract';
        else if(operator === '*') operatorName = 'multiply';
        else operatorName = 'divide';
    });
});


const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {
    let result = calculator(Number(firstNumber), operatorName, Number(secondNumber));
    display.textContent = result;

    firstNumber = '';
    secondNumber = '';
    operator = '';
    operatorName = '';
})


function calculator(a, op, b){
    if(op === "add"){
        return a + b;
    }
    else if(op === "substract"){
        return a - b;
    }
    else if(op === "multiply"){
        return a * b;
    }
    else if(op === "divide"){
        if(b === 0) return "Can't divide by zero";
        return a / b;
    }
    else{
        alert("Invalid operation");
    }
} 

