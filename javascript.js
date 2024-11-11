let humanScore = 0;
let computerScore = 0;

//Generates the computers choice and returns the value
function getComputerChoice(){
    let computerNumber = Math.floor(Math.random() * 3);
    switch(computerNumber){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}

/**Compares the users score and the computers score and determines who won the
game of 5 rounds **/
function whoWon(humanScore, computerScore){
    if(humanScore > computerScore){
        console.log(`Congratulations! You won by beating the computer`
            + ` ${humanScore} times`);
    }
    else{
        console.log(`Sorry. You lose. The computer beat you ${computerScore}`
            + ` times.`);
    }
}

/**Compares the users choice to the computers and determines who won the round, 
or if a draw occurred**/
function compareChoice(humanChoice, computerChoice){
    while(humanChoice === computerChoice){
        console.log(`It's a draw. You both chose ${humanChoice}. Try again.`);
        break;
    }
    if(
        humanChoice === "rock" && computerChoice === "scissors" 
        || humanChoice === "paper" && computerChoice === "rock"
        || humanChoice === "scissors" && computerChoice === "paper"
    ){
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }

    if(
        computerChoice === "rock" && humanChoice === "scissors"
        || computerChoice === "paper" && humanChoice === "rock"
        || computerChoice === "scissors" && humanChoice === "paper"
    ){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }
}

let menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    let target = event.target;
    let computerChoice = getComputerChoice();
    let humanChoice = '';
    switch(target.id) {
        case 'rock':
            humanChoice = 'rock';
            break;
        case 'paper':
            humanChoice = 'paper';
            break;
        case 'scissors':
            humanChoice = 'scissors';
            break;
    }
    compareChoice(humanChoice, computerChoice);
    whoWon(humanScore, computerScore);
});