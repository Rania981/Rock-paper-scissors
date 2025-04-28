const choice = ["rock","paper","scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerchoice){

const computerchoice = choice[Math.floor(Math.random() * 3)];
let result = " ";

if(playerchoice === computerchoice){
    result = "IT IS A TIE";
}
else{
    switch(playerchoice){
        case "rock":
          result = (computerchoice === "scissors") ? "you win" : "you lose";
        break;
        case "paper":
        result = (computerchoice === "rock") ? "you win" : "you lose";
        break;
        case "scissors":
            result = (computerchoice === "paper") ? "you win" : "you lose";
            break;
    }
}

playerdisplay.textContent = `player: ${playerchoice}`;
computerdisplay.textContent = `computer: ${computerchoice}`;
resultdisplay.textContent = result;
resultdisplay.classList.remove("greenText" , "redText");
switch(result){
    case "you win":
        resultdisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;

        break;
        case "you lose":
        resultdisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        break;
    }}
playGame("rock");

