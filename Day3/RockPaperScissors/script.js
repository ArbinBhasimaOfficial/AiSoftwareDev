let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors";

let playerScore = 0;
let computerScore = 0;

// 1. Set the player's choice (Change this to choice1, choice2, or choice3 to test)
let playerChoice = choice1;

// 2. Pick a random choice for the computer (1 = rock, 2 = paper, 3 = scissors)
let randomNumber = Math.floor(Math.random() * 3) + 1;
let computerChoice = "";

if (randomNumber === 1) {
  computerChoice = choice1;
}
if (randomNumber === 2) {
  computerChoice = choice2;
}
if (randomNumber === 3) {
  computerChoice = choice3;
}

// 3. IF Statements to check who wins

// IF IT'S A TIE
if (playerChoice === computerChoice) {
  console.log("It's a tie!");
}

// IF PLAYER CHOSE ROCK
if (playerChoice === choice1) {
  if (computerChoice === choice2) {
    console.log("Computer wins! Paper beats Rock.");
    computerScore = computerScore + 1;
  }
  if (computerChoice === choice3) {
    console.log("You win! Rock beats Scissors.");
    playerScore = playerScore + 1;
  }
}

// IF PLAYER CHOSE PAPER
if (playerChoice === choice2) {
  if (computerChoice === choice1) {
    console.log("You win! Paper beats Rock.");
    playerScore = playerScore + 1;
  }
  if (computerChoice === choice3) {
    console.log("Computer wins! Scissors beats Paper.");
    computerScore = computerScore + 1;
  }
}

// IF PLAYER CHOSE SCISSORS
if (playerChoice === choice3) {
  if (computerChoice === choice1) {
    console.log("Computer wins! Rock beats Scissors.");
    computerScore = computerScore + 1;
  }
  if (computerChoice === choice2) {
    console.log("You win! Scissors beats Paper.");
    playerScore = playerScore + 1;
  }
}

// Print updated scores
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + computerScore);