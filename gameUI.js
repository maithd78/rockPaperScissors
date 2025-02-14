// queryselectors
const buttons           = document.querySelectorAll("button");
const computerPlay      = document.querySelector("showComputer");
const roundEndResults   = document.querySelector("roundEnd");

// computer choice logic
const selection = ["rock" , "paper", "Scissors"]

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let computerChoice = selection[n];
    console.log(computerChoice)
}

// Game round logic
function playRound(humanChoice, getComputerChoice) {
    console.log(computerChoice);
    console.log(humanChoice)
    // Tie
    if (computerChoice === humanChoice) {
        console.log("tie");
    // Computer Wins 
    } else if (computerChoice === "Rock" & humanChoice === "Scissors") {
        
    } else if (computerChoice === "Scissors" & humanChoice === "Paper") {

    } else if (computerChoice === "Paper" & humanChoice === "Rock") {
        console.log("lose");
    // Player Wins
    } else if (humanChoice === "Rock" & computerChoice === "Scissors") {
        console.log("Win");
    } else if (humanChoice === "Scissors" & computerChoice === "Paper") {

    } else if (humanChoice === "Paper" & computerChoice === "Rock") {

    }
    
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let humanChoice = button.id;
        playRound();
    })
})
