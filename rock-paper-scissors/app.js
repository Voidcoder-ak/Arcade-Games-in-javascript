const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice'); 
const resultDisplay = document.getElementById('result');
const possibleChoice = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoice.length); 
    console.log(randomNumber);

    if(randomNumber === 0){
        computerChoice = 'rock';
    }
    else if(randomNumber === 1){
        computerChoice = 'papper';
    }
    else if(randomNumber === 2){
        computerChoice = 'scissors';
    }
    
    computerChoiceDisplay.innerHTML = computerChoice;
}


function getResult(){
    if(computerChoice === userChoice){
        result = 'its a draw';
    }
    else if(computerChoice === 'rock' && userChoice === 'papper'){
        result = "You win";
    }
    else if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = "You lost";
    }
    else if(computerChoice === 'papper' && userChoice === 'rock'){
        result = "You lost";
    }
    else if(computerChoice === 'papper' && userChoice === 'scissors'){
        result = "You win";
    }
    else if(computerChoice === 'scissors' && userChoice === 'papper'){
        result = "You lost";
    }
    else if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = "You win";
    }

    resultDisplay.innerHTML = result;
}
