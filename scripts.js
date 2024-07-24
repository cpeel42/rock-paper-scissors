// Returns randomly either rock, paper or scissors.
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomNumber(3)]
}

// Returns a random number from zero to the input max.
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Prompt user for text and return value in lower case
function getHumanChoice() {
    let choice;
    while(choice != "rock" && choice != "scissors" && choice != "paper") {
        choice = prompt('Choose "rock", "paper" or "scissors".').toLowerCase();
    }
    return choice;
}

// Game logic to determine winner and increment scores
function playRound() {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    if (humanChoice == computerChoice) {
        console.log("Tie! Both you and the computer chose " + computerChoice + ". " + getScores());
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock') {
        humanScore++;
        console.log("You win! You chose " + humanChoice + " which beats " + computerChoice + ". " + getScores());
    } else {
        computerScore++;
        console.log("You lose. The computer chose " + computerChoice + " which beats " + humanChoice + ". " + getScores());
    }
}

function getScores() {
    let message = "Score " + humanScore + ":" + computerScore;
    return message;
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

// Play 5 rounds
while (round < 5) {
    playRound();
    ++round;
}

// Display the winner
if (humanScore > computerScore) {
    console.log("Congrats, you won!");
} else if (computerScore > humanScore) {
    console.log("Sorry, try again.");
} else {
    console.log("Tie game!");
}
