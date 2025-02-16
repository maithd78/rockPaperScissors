// queryselectors
const buttons           = document.querySelectorAll("button");
const computerPlay      = document.querySelector("showComputer");
const roundEndResults   = document.querySelector("roundEnd");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let playerChoice = button.id;
        console.log(playerChoice);
    })
})
