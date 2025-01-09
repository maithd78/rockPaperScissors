console.log("Hello World")
const playGame = () => {
    for (let i = 0; i < 5; i++) {
        let ComputerScore = 0;
        let HumanScore = 0;
    
        console.log("Computer Wins "+ComputerScore);
        console.log("Human Wins "+HumanScore);
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        function getHumanChoice() {
            var promptHuman = prompt("Rock,Paper,Scissors");
            if (promptHuman.toLowerCase() === "rock") {
                console.log(promptHuman);
                return "Rock";
            } else if (promptHuman.toLowerCase() === "paper") {
                console.log(promptHuman);
                return "Paper";
            } else if (promptHuman.toLowerCase() === "scissors","scissor") {
                console.log(promptHuman);
                return "Scissors";
            }
                
        }
        function getComputerChoice() {
            var CompChoice = Math.floor(Math.random() * 3);
                console.log(CompChoice);
            if (CompChoice === 0) {
                return "Rock";
            } else if (CompChoice === 1) {
                return "Paper";
            } else {
                return "Scissors";
            }
        }
        
    function playRound(humanChoice, computerChoice) {
        // Tie
        if (computerChoice === humanChoice) {
            return console.log("Tie");
        // Computer  Wins
        } else if (computerChoice === "Rock" & humanChoice === "Scissors") {
            console.log("You Lose! Rock beats Scissors");
            return ComputerScore = +1;
        } else if (computerChoice === "Scissors" & humanChoice === "Paper") {
            console.log("You Lose! Scissors beats Paper");
            return ComputerScore = +1;
        } else if (computerChoice === "Paper" & humanChoice === "Rock") {
            console.log("You Lose! Paper beats Rock");
            return ComputerScore = +1;
        // Human Wins
        } else if (humanChoice === "Rock" & computerChoice === "Scissors") {
            console.log("You Win! Rock beats Scissors");
            return HumanScore = +1;
        } else if (humanChoice === "Scissors" & computerChoice === "Paper") {
            console.log("You Win! Scissors beats Paper");
            return HumanScore = +1;
        } else if (humanChoice === "Paper" & computerChoice === "Rock") {
            console.log("You Win! Paper beats Rock");
            return HumanScore = +1;
        }
        
    }
    console.log("Computer Wins "+ComputerScore);
    console.log("Human Wins "+HumanScore)
 

    playRound(humanSelection, computerSelection);
    }
}

playGame();

