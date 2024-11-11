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

//Prompts the user for a choice and returns the value once validated
function getHumanChoice(){
    let humanChoice = prompt("Choose: rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    while(
        humanChoice !== "rock" && humanChoice !== "scissors"
        && humanChoice !== "paper"
    ){
        humanChoice = prompt(`You entered ${humanChoice}. Please choose: `
            + `rock, paper, or scissors`);
    }
    return humanChoice;
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
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
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

//Plays the game in a format of 5 rounds
function playGame(){
    function playRound(){

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        compareChoice(humanChoice, computerChoice);
        
    }
    playRound();
    whoWon(humanScore, computerScore);
}

playGame();