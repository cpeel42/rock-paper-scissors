let humanScore = 0;
let computerScore = 0;
let round = 0;

let buttonContainer = document.querySelector('.buttonContainer');
let roundText = document.querySelector('.roundNumber');
let resultText = document.querySelector('.result');
let body = document.querySelector('body');
let gameButtons = buttonContainer.querySelectorAll('.gameButton');
let resetButton = buttonContainer.querySelector('.resetButton');

resetGame();

buttonContainer.addEventListener('click', (event) => {
    round++;
    switch(event.target.id) {
        case 'rockButton':
            playRound('rock');
            break;
        case 'paperButton':
            playRound('paper');
            break;
        case 'scissorsButton':
            playRound('scissors');
            break;
        case 'resetButton':
            resetGame();
            break;
    }
    if (round == 5) {
        endGame()
    } 
}); 

//Functions

// Game logic to determine winner and increment scores
function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    let result = ""
    if (humanChoice == computerChoice) {
        result = "Tie"
    } else if (humanChoice == 'rock' && computerChoice == 'scissors' || humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'paper' && computerChoice == 'rock') {
        result = "Win"
        humanScore++;
    } else {
        result = "Lose"
        computerScore++;
    }
    addResult(result, humanChoice, computerChoice);
    if (round >= 5) {
        return
    }
    updateRoundScore();
}

function addResult(result, humanChoice, computerChoice) {
    let roundInfo = document.querySelector(`#round${round}`);
    roundInfo.textContent = `Round ${round} (${result}): You chose ${humanChoice}. Your opponent chose ${computerChoice}.`
}

function updateRoundScore() {
    roundText.textContent = `Round ${round + 1} - Score ${humanScore}:${computerScore}`;
}


function displayWinner() {
    if (humanScore > computerScore) {
        resultText.textContent = "Congrats, you won!";
    } else if (computerScore > humanScore) {
        resultText.textContent = "Sorry, try again.";
    } else {
        resultText.textContent = "Tie game!";
    }
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomNumber(3)]
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function endGame() {
    roundText.textContent = `Game over - Score ${humanScore}:${computerScore}`
    gameButtons.forEach(button => buttonContainer.removeChild(button));
    buttonContainer.append(resetButton);
    displayWinner();
};

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    round = 0;
    updateRoundScore();
    document.querySelectorAll('.roundInfo').forEach(round => round.textContent = "");
    gameButtons.forEach(button => buttonContainer.append(button));
    resetButton.remove()
    resultText.textContent = "Good Luck!";
}