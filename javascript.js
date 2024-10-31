/*
PSEUDOCODE

Generate computer choice of: Rock, Paper, or Scissors

Receive user input choice of : Rock, Paper, or Scissors

Determine who won (Rock beats scissors, loses to paper; Paper beats rock, loses to scissors; Scissors beats paper, loses to rock)

If user wins print a message telling them so and why and increase user score
If user loses print a message telling them so and why and increase computer score
If it results in a tie, display a message saying so and prompt the user for a new choice

Loop for 5 games total player

*/



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

function getHumanChoice(){
    let humanChoice = prompt("Choose: rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    while(humanChoice !== "rock" && humanChoice !== "scissors" && humanChoice !== "paper"){
        humanChoice = prompt(`You entered ${humanChoice}. Please choose: rock, paper, or scissors`);
    }
    return humanChoice;
}



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice === computerChoice){
            console.log(`It's a draw. You both chose ${humanChoice}. Try again.`);
            return;
        }
        if(humanChoice === "rock"){
            if(computerChoice === "paper"){
                console.log("You lose! Paper beats rock");
                computerScore++;
            }
            else if(computerChoice === "scissors"){
                console.log("You win! rock beats scissors!");
                humanScore++;
            }
        }
    
        if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                console.log("You win! Paper beats rock");
                humanScore++;
            }
            else if(computerChoice === "scissors"){
                console.log("You lose! scissors beats paper!");
                computerScore++;
            }
        }
    
        if(humanChoice === "scissors"){
            if(computerChoice === "paper"){
                console.log("You win! scissors beats paper");
                humanScore++;
            }
            else if(computerChoice === "rock"){
                console.log("You lose! rock beats scissors!");
                computerScore++;
            }
        }
    }
    
    for(i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    if(humanScore > computerScore){
        console.log(`Congratulations! You won by beating the computer ${humanScore} times`);
    }
    else{
        console.log(`Sorry. You lose. The computer beat you ${computerScore} times.`);
    }
}

playGame();