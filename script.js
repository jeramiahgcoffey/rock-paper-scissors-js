const messageBoard = document.querySelector(".message-box");

const playerScoreCard = document.querySelector(".player-score span");
const computerScoreCard = document.querySelector(".computer-score span");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

let playerScore = 0;
let computerScore = 0;

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

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

function playRound(playerSelection, computerSelection = computerPlay()) {
    if (playerSelection == computerSelection) {
        messageBoard.textContent = "It's a tie!";
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            playerPoint(playerSelection, computerSelection);
        } else {
            computerPoint(playerSelection, computerSelection);
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerPoint(playerSelection, computerSelection);
        } else {
            computerPoint(playerSelection, computerSelection);
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerPoint(playerSelection, computerSelection);
        } else {
            computerPoint(playerSelection, computerSelection);
        }
    }
}

function playerPoint(playerSelection, computerSelection) {
    messageBoard.textContent = `You win! ${playerSelection.toProperCase()} beats ${computerSelection.toProperCase()}`;
    playerScore++;
    playerScoreCard.textContent = playerScore;
    checkForGameOver();
}

function computerPoint(playerSelection, computerSelection) {
    messageBoard.textContent = `${computerSelection.toProperCase()} beats ${playerSelection.toProperCase()}, you lose!`;
    computerScore++;
    computerScoreCard.textContent = computerScore;
    checkForGameOver();
}

function checkForGameOver() {
    if (playerScore == 5) {
        messageBoard.textContent = "You Win! Make a choice to play again";
        setTimeout(resetScoreBoard, 2000);
    } else if (computerScore == 5) {
        messageBoard.textContent = "You Lose! Make a choice to play again";
        setTimeout(resetScoreBoard, 2000);
    }
}

function resetScoreBoard() {
    playerScore = 0;
    computerScore = 0;
    playerScoreCard.textContent = playerScore;
    computerScoreCard.textContent = computerScore;
}

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
