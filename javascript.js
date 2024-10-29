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
//TODO evaluate the string the user entered against "rock", "paper", or "scissors"
    // while(humanChoice.toLowerCase() !== "rock"){
        // humanChoice = prompt("Try again. Choose: rock, paper, or scissors");
    // }
    return humanChoice;
}

let humanChoice = getHumanChoice();
console.log(humanChoice);