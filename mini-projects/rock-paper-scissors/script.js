function getRandInt(max){
    return Math.floor(Math.random() * max);
}//Math.random() = 0.0 - 0.99
//Math.random()*max = 0.00 - 2.99
//Math.floor = 0 - 2

function compMove(){
    let rand_num = getRandInt(3);
    let move;

    if(rand_num === 0){
        move = 'rock';
    }else if(rand_num === 1){
        move = 'paper';
    }else{
        move = 'scissors'
    }

    return move;
}


// function getplayerMove(){
//     let validMoves = ['rock', 'paper', 'scissors'];
//     let move = prompt("Enter rock, paper, or scissors:").toLowerCase();
//     while(!validMoves.includes(move)){
//         move = prompt("Invalid input !!, Please renter your move:").toLowerCase();
//     }
//     return move;
// }


function playRound(event){
    let compval = compMove();
    let myval = event.target.className;

    //console.log(myval);

    if(compval === 'rock'){
        console.log(`Computer: ${compval}`);
        if(myval === 'rock'){
            return "draw";
        }
        else if(myval === 'paper'){
            return "win";
        }
        else{
            return "lose";
        }
    }
    else if(compval === 'paper'){
        console.log(`Computer: ${compval}`);
        if(myval === 'paper'){
            return "draw";
        }
        else if(myval === 'scissors'){
            return "win";
        }
        else{
            return "lose";
        }
    }
    else{
        console.log(`Computer: scissors`);
        if(myval === 'scissors'){
            return "draw";
        }
        else if(myval === 'rock'){
            return "win";
        }
        else{
            return "lose";
        }
    }

}

const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    round = 0;
    resultDisplay.textContent = '';
});

let playerScore = 0;
let compScore = 0;
let round = 0

const btn = document.querySelectorAll('#container button');
const resultDisplay = document.querySelector('#result');

btn.forEach((button) => {
    button.addEventListener("click", (event) => {
        if(round >= 5) return;

        let result = playRound(event);
        round++;

        if(result === 'win') playerScore++;
        else if(result === 'lose') compScore++;


        if(round < 5){
            let displayResult;
            if(result === 'win'){
                displayResult = 'Win';
            }
            else if(result === 'lose'){
                displayResult = 'Lose';
            }
            else{
                displayResult = 'Draw';
            }
            resultDisplay.textContent = `Round ${round} : ${displayResult}`;
        }else{ 
            if(playerScore > compScore) resultDisplay.textContent = "Yay I wonn....!!!"
            else if(compScore > playerScore) resultDisplay.textContent = "Fuck..!! );"
            else resultDisplay.textContent = "I'll get you NEXT TIME....!!"
        }
    });
});

