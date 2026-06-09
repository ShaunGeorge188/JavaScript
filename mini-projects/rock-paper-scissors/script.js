function getRandInt(max){
    return Math.floor(Math.random() * max);
}

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

function getplayerMove(){
    let validMoves = ['rock', 'paper', 'scissors'];
    let move = prompt("Enter rock, paper, or scissors:").toLowerCase();
    while(!validMoves.includes(move)){
        move = prompt("Invalid input !!, Please renter your move:").toLowerCase();
    }
    return move;
}


function playRound(myval){
    let compval = compMove();

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

function playGame(){
    let playerScore = 0;
    let compScore = 0;

    for(let i = 0; i < 5; i++){
        let result = playRound(getplayerMove());
        if(result === 'win') playerScore++;
        else if(result === 'lose') compScore++;
        console.log(`Score -> You: ${playerScore} | Computer: ${compScore}`);
    }

    if(playerScore > compScore) console.log("You won the game!");
    else if(compScore > playerScore) console.log("Computer wins the game!");
    else console.log("It's a draw");
}