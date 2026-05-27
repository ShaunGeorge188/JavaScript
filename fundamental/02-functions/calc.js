
function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function divide(a, b){
    if(b === 0) return "Can't divide by zero"
    return a / b;
}

function multiply(a, b){
    return a * b;
}

function calculator(a, operator, b){
    let result;
    if(operator === 'add'){
        result = add(a, b);
    }
    else if(operator === 'substract' ){
        result = substract(a, b);
    }
    else if(operator === 'divide'){
        result = divide(a, b);
    }
    else if(operator === 'multiply'){
        result = multiply(a, b);
    }
    else{
        alert('Invalid operation');
    }
    alert(`Answer: ${result}`);
}