// 1. Choice Variables
let choice1 = "rock";
let choice2 = "paper";
let choice3 = "scissors";

// 2. Score Variables
let playerScore = 0;
let computerScore = 0;

// 3. Grab HTML elements using their IDs
let playerScoreDisplay = document.getElementById("PlayerScore");
let computerScoreDisplay = document.getElementById("ComputerScore");
let choicesDisplay = document.getElementById("ChoicesDisplay");
let resultMsg = document.getElementById("ResultMsg");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorBtn = document.getElementById("scissorBtn");
let playAgainBtn = document.getElementById("PlayAgainBtn");


// 4. Main Game Function (Runs every time a player clicks a button)
function playGame(playerChoice) {
  
  // Computer chooses a random move
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice = "";

  if (randomNumber === 1) { computerChoice = choice1; }
  if (randomNumber === 2) { computerChoice = choice2; }
  if (randomNumber === 3) { computerChoice = choice3; }

  // Display chosen moves on screen
  choicesDisplay.textContent = "You: " + playerChoice + " | Computer: " + computerChoice;

  // --- GAME LOGIC ---

  // TIE
  if (playerChoice === computerChoice) {
    resultMsg.textContent = "It's a tie! 🤝";
  }

  // PLAYER CHOSE ROCK
  if (playerChoice === choice1) {
    if (computerChoice === choice2) {
      resultMsg.textContent = "Computer wins! Paper beats Rock.";
      computerScore = computerScore + 1;
    }
    if (computerChoice === choice3) {
      resultMsg.textContent = "You win! Rock beats Scissors.";
      playerScore = playerScore + 1;
    }
  }

  // PLAYER CHOSE PAPER
  if (playerChoice === choice2) {
    if (computerChoice === choice1) {
      resultMsg.textContent = "You win! Paper beats Rock.";
      playerScore = playerScore + 1;
    }
    if (computerChoice === choice3) {
      resultMsg.textContent = "Computer wins! Scissors beats Paper.";
      computerScore = computerScore + 1;
    }
  }

  // PLAYER CHOSE SCISSORS
  if (playerChoice === choice3) {
    if (computerChoice === choice1) {
      resultMsg.textContent = "Computer wins! Rock beats Scissors.";
      computerScore = computerScore + 1;
    }
    if (computerChoice === choice2) {
      resultMsg.textContent = "You win! Scissors beats Paper.";
      playerScore = playerScore + 1;
    }
  }

  // Update scores on screen
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}


// 5. Button Click Listeners

rockBtn.onclick = function() {
  playGame(choice1);
};

paperBtn.onclick = function() {
  playGame(choice2);
};

scissorBtn.onclick = function() {
  playGame(choice3);
};

// Reset Game / Play Again
playAgainBtn.onclick = function() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = 0;
  computerScoreDisplay.textContent = 0;
  choicesDisplay.textContent = "Make your Choice!";
  resultMsg.textContent = "First to 3 wins!";
};