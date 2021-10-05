let computerScore;
let playerScore;

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

function findWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 2;
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return 1;
        } else {
            return 0;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return 1;
        } else {
            return 0;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            return 1;
        } else {
            return 0;
        }
    }
}

function playRound(playerSelection, computerSelection = computerPlay()) {
    // let playerSelection;
    // while (
    //     playerSelection != "rock" &&
    //     playerSelection != "paper" &&
    //     playerSelection != "scissors"
    // ) {
    //     playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    // }
    console.log(`Computer chose: ${computerSelection}`);
    console.log(`You chose: ${playerSelection}`);
    switch (findWinner(playerSelection, computerSelection)) {
        case 2:
            console.log("It's a tie!");
            break;
        case 1:
            console.log("You win this round!");
            playerScore++;
            break;
        case 0:
            console.log("You lose this round!");
            computerScore++;
            break;
    }
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

// function game() {
//     computerScore = 0;
//     playerScore = 0;
//     while (computerScore < 3 && playerScore < 3) {
//         playRound(computerPlay());
//     }
//     if (playerScore == 3) {
//         console.log("You are the winner!");
//     } else {
//         console.log("You lose!");
//     }
// }

// game();

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", playRock);
paperButton.addEventListener("click", playPaper);
scissorsButton.addEventListener("click", playScissors);
