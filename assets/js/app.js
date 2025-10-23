// Numbers of Rounds
const ROUNDS = 5;

// Rock, Paper, Scissors array
const hand = ["ROCK", "PAPER", "SCISSORS"];

// Human score
let humanScore = 0;
// Computer score
let computerScore = 0;

// Get Computer Choice Function
function getComputerChoice() {
  return hand[Math.floor(Math.random() * hand.length)];
}

// // Get Human Choice
// function getHumanChoice() {
//     return prompt("Your hand?");
// }

// Play round function
function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "ROCK":
      if (computerChoice === "ROCK") {
        console.log("TIE!");
      } else if (computerChoice === "PAPER") {
        computerScore++;
        console.log("You LOSE! Paper beats Rock.");
      } else {
        humanScore++;
        console.log("You WIN! Rock beats Scissors.");
      }
      break;
    case "PAPER":
      if (computerChoice === "ROCK") {
        humanScore++;
        console.log("You WIN! Paper beats Rock.");
      } else if (computerChoice === "PAPER") {
        console.log("TIE!");
      } else {
        computerScore++;
        console.log("You LOSE! Scissors beats Paper.");
      }
      break;
    case "SCISSORS":
      if (computerChoice === "ROCK") {
        computerScore++;
        console.log("You LOSE! Rock beats Scissors.");
      } else if (computerChoice === "PAPER") {
        humanScore++;
        console.log("You WIN! Scissors beat Paper.");
      } else {
        console.log("TIE!");
      }
      break;
  }
  console.log(`🙂 Human Score: ${humanScore}`);
  console.log(`💻 Computer Score: ${computerScore}`);
}

// Play Game function
function playGame() {
  for (let i = 0; i < ROUNDS; i++) {
    // Human Hand
    const humanHand = getHumanChoice().toUpperCase();

    // Computer Hand
    const computerHand = getComputerChoice();

    playRound(humanHand, computerHand);
  }

  if (humanScore > computerScore) {
    console.log("🙂 Human WINs!");
  } else if (humanScore < computerScore) {
    console.log("💻 Computer WINs!");
  } else {
    console.log("🙂 TIE! 💻");
  }
}

// Activate Game
playGame();
