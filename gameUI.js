// queryselectors


// computer choice logic


function playRound() {
}

function getComputerChoice() {
    let n = Math.floor(Math.random() * 3);
    let computerChoice = selection[n];
    return computerChoice
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playerChoice = button.id;
        playRound();
    })
})

javascript