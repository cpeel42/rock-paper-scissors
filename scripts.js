// Returns randomly either rock, paper or scissors.
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomNumber(3)]
}

// Returns a random number from zero to the input max.
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Logs the random choice to console
console.log(getComputerChoice());