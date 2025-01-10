console.log("Hello World")
let ComputerScore = 0;
let HumanScore = 0;
const playGame = () => {
    for (let i = 0; i < 5; i++) {
        console.log("Round "+ (i+1));
        
        console.log("Computer Wins "+ComputerScore);
        console.log("Human Wins "+HumanScore);
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        function getHumanChoice() {
            var promptHuman = prompt("Rock,Paper,Scissors");
            if (promptHuman.toLowerCase() === "rock") {
                console.log("You played Rock");
                return "Rock";
            } else if (promptHuman.toLowerCase() === "paper") {
                console.log("You played Paper");
                return "Paper";
            } else if (promptHuman.toLowerCase() === "scissors","scissor") {
                console.log("You played Scissors");
                return "Scissors";
            }
                
        }
        function getComputerChoice() {
            var CompChoice = Math.floor(Math.random() * 3);
                // console.log(CompChoice);
            if (CompChoice === 0) {
                console.log("Computer plays Rock");
                return "Rock";
            } else if (CompChoice === 1) {
                console.log("Computer plays Paper");
                return "Paper";
            } else {
                console.log("Computer plays Scissors");
                return "Scissors";
            }
        }
        
    function playRound(humanChoice, computerChoice) {
        // Tie
        if (computerChoice === humanChoice) {
            console.log("Tie");
        // Computer  Wins
        } else if (computerChoice === "Rock" & humanChoice === "Scissors") {
            console.log("You Lose! Rock beats Scissors");
            ComputerScore += 1;
        } else if (computerChoice === "Scissors" & humanChoice === "Paper") {
            console.log("You Lose! Scissors beats Paper");
            ComputerScore += 1;
        } else if (computerChoice === "Paper" & humanChoice === "Rock") {
            console.log("You Lose! Paper beats Rock");
            ComputerScore += 1;
        // Human Wins
        } else if (humanChoice === "Rock" & computerChoice === "Scissors") {
            console.log("You Win! Rock beats Scissors");
            HumanScore += 1;
        } else if (humanChoice === "Scissors" & computerChoice === "Paper") {
            console.log("You Win! Scissors beats Paper");
            HumanScore += 1;
        } else if (humanChoice === "Paper" & computerChoice === "Rock") {
            console.log("You Win! Paper beats Rock");
            HumanScore += 1;
        }
        
    }
    // console.log("Computer Wins "+ComputerScore);
    // console.log("Human Wins "+HumanScore)
 

    playRound(humanSelection, computerSelection);
    }
}
playGame();

console.log("Computer Wins "+ComputerScore);
console.log("Human Wins "+HumanScore);

if (HumanScore === ComputerScore) {
    console.log("GAME TIE");
} else if (HumanScore < ComputerScore) {
        console.log("YOU LOST");
} else {
    console.log("YOU WIN");
}

