// queryselectors
const buttons = document.querySelectorAll(".weapon");
const restartGame = document.querySelector("#restart")
const currentRound = document.querySelector("#roundTally");
const computerScore = document.querySelector("#computerTally");
const playerScore = document.querySelector("#playerTally");
const showComputerChoice = document.querySelector(".showComputer")
const roundEndScreen = document.querySelector(".roundEnd");
const roundEndCard = document.querySelector(".roundEndCard");

const computerPlayed = document.createElement("p");
computerPlayed.setAttribute("id","theRoll");
const roundEndMessage = document.createElement("p");
roundEndMessage.setAttribute("id", "roundLog")

roundEndCard.setAttribute("style" , "height: 68.8px; margin-top: 16px")

// set default values
const selection = ["Rock", "Paper", "Scissors"]
let roundNo = 1;
let computerScoreNo = 0
let playerScoreNo = 0

// logic to get computer choice
function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let x = selection[n];
    return x
}

function playRound() {

    // calls computer choice logic
    const computerChoice = getComputerChoice();
    computerPlayed.textContent = "Enemy played "+computerChoice;

    // results of the current round
    // Tie
    if (computerChoice === playerChoice) {
        roundEndMessage.textContent = " Tie";
    // Computer  Wins
    } else if (computerChoice === "Rock" & playerChoice === "Scissors") {
        roundEndMessage.textContent = " You Lose! Rock beats Scissors";
        computerScore.textContent = computerScoreNo += 1;
    } else if (computerChoice === "Scissors" & playerChoice === "Paper") {
        roundEndMessage.textContent = " You Lose! Scissors beats Paper";
        computerScore.textContent = computerScoreNo += 1;
    } else if (computerChoice === "Paper" & playerChoice === "Rock") {
        roundEndMessage.textContent = " You Lose! Paper beats Rock";
        computerScore.textContent = computerScoreNo += 1;
    // Human Wins
    } else if (playerChoice === "Rock" & computerChoice === "Scissors") {
        roundEndMessage.textContent = " You Win! Rock beats Scissors";
        playerScore.textContent = playerScoreNo += 1;
    } else if (playerChoice === "Scissors" & computerChoice === "Paper") {
        roundEndMessage.textContent = " You Win! Scissors beats Paper";
        playerScore.textContent = playerScoreNo += 1;
    } else if (playerChoice === "Paper" & computerChoice === "Rock") {
        roundEndMessage.textContent = "You Win! Paper beats Rock";
        playerScore.textContent = playerScoreNo += 1;
    }

    showComputerChoice.appendChild(computerPlayed);
    roundEndScreen.appendChild(roundEndMessage);
    currentRound.textContent = roundNo += 1;
}

// assign the chosen buttons id to the player choice variable and run playRound function
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id;
        if (computerScoreNo== 5) {
            alert("You Lost - Click restart to play again")
        } else if(playerScoreNo== 5) {
            alert("You Win - Click restart to play again")
        } else playRound();
    })
})

// reset logic
function reset() {
    currentRound.textContent = roundNo = 1;
    playerScore.textContent = playerScoreNo = 0;
    computerScore.textContent = computerScoreNo = 0;
    computerPlayed.remove();
    roundEndMessage.remove();
}

restartGame.onclick = reset;