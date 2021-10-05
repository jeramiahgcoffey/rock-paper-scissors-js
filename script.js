const playerScoreCard = document.querySelector(".player-score span");
const computerScoreCard = document.querySelector(".computer-score span");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection = computerPlay()) {
    console.log(`Computer chose: ${computerSelection}`);
    console.log(`You chose: ${playerSelection}`);
    findRoundWinner(playerSelection, computerSelection);
}

function computerPlay() {
    let computerSelection = Math.floor(Math.random() * 3);
    switch (computerSelection) {
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

function findRoundWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            playerPoint();
        } else {
            computerPoint();
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerPoint();
        } else {
            computerPoint();
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerPoint();
        } else {
            computerPoint();
        }
    }
}

function playerPoint() {
    console.log("You win this round!");
    playerScore++;
    playerScoreCard.textContent = playerScore;
    checkForGameOver();
}

function computerPoint() {
    console.log("You lose this round!");
    computerScore++;
    computerScoreCard.textContent = computerScore;
    checkForGameOver();
}

function checkForGameOver() {
    if (playerScore == 5 || computerScore == 5) {
        gameOver();
    }
}

function gameOver() {}

function playRock() {
    playRound("rock");
}

function playPaper() {
    playRound("paper");
}

function playScissors() {
    playRound("scissors");
}

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);
