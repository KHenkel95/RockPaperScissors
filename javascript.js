//Generates the computers choice and returns the value
function getComputerChoice(){
    let computerNumber = Math.floor(Math.random() * 3);
    switch(computerNumber){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

/**Compares the users score and the computers score and determines who won the
game of 5 rounds **/


function capitalizeFirstLetter(string){
    return String(string).charAt(0).toUpperCase() + string.slice(1);
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function compareChoice(humanChoice, computerChoice){
        const choice = document.querySelector('#choice');
        while(humanChoice === computerChoice){
            choice.textContent = `It's a draw. You both chose ${capitalizeFirstLetter(humanChoice)}. Try again.`;
            break;
        }
        if(
            humanChoice === "rock" && computerChoice === "scissors" 
            || humanChoice === "paper" && computerChoice === "rock"
            || humanChoice === "scissors" && computerChoice === "paper"
        ){
            choice.textContent = `You win! ${capitalizeFirstLetter(humanChoice)} beats ${capitalizeFirstLetter(computerChoice)}!`;
            humanScore++;
        }
    
        if(
            computerChoice === "rock" && humanChoice === "scissors"
            || computerChoice === "paper" && humanChoice === "rock"
            || computerChoice === "scissors" && humanChoice === "paper"
        ){
            choice.textContent = `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(humanChoice)}!`;
            computerScore++;
        }
    }

    const menu = document.querySelector('.menu');

    function restartGame(){
        const restartButton = document.createElement("button");
        restartButton.textContent = "Play again?";
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            menu.removeChild(button);
        });
        menu.appendChild(restartButton);
        restartButton.addEventListener('click', () => {
            location.reload();
        });
    }

    function whoWon(humanScore, computerScore){
        const results = document.querySelector('#results');
        results.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        if(humanScore === 5){
            results.textContent = `Congratulations! You won by beating the computer ${humanScore} times to ${computerScore}. Refresh the page to play again.`;
            restartGame();
        }
        else if(computerScore === 5){
            results.textContent = `Sorry. You lose. The computer beat you ${computerScore} times to ${humanScore}. Refresh the page to play again.`;
            restartGame();
        }
    }

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
}

playGame();