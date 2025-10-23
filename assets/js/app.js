// -------------------------------
// Variables declaration
// -------------------------------
// Win Score
const WIN_SCORE = 5;
// Game state
let isGameOver = false;

// AI Pokemon sprites
const aiPokemon = document.querySelector("#ai-pokemon img");
// AI Score
const aiScore = document.querySelector("#ai-score span");
// AI Score Value
let aiScoreValue = 0;

// AI Pokemon Array
const aiPokemonArray = [
  { name: "Grass", path: "../assets/images/1.gif" },
  { name: "Fire", path: "../assets/images/4.gif" },
  { name: "Water", path: "../assets/images/7.gif" },
];

// Player Pokemon sprites
const playerPokemon = document.querySelector("#player-pokemon img");
// Player Score
const playerScore = document.querySelector("#player-score span");
// Player Score Value
let playerScoreValue = 0;

// Player Pokemon Array
const playerPokemonArray = [
  { name: "Grass", path: "../assets/images/back/1.gif" },
  { name: "Fire", path: "../assets/images/back/4.gif" },
  { name: "Water", path: "../assets/images/back/7.gif" },
];

// Player Choices container
const playerChoices = document.querySelector("#pokemon-box");

// Message Overlay
const message = document.querySelector("#game-screen-overlay span");

// -------------------------------
// Game Start
// -------------------------------
// The Game start when player pick a choice
playerChoices.addEventListener("click", gameLogic);

// -------------------------------
// Functions
// -------------------------------

// Game Logic
function gameLogic(e) {
  let target = e.target;
  // Roll a random opponent pick before reacting to the user's click
  const aiChoice = getAIChoice(aiPokemonArray);

  if (target.id === "grass" || target.id === "btnGrass") {
    playerPokemon.setAttribute("src", playerPokemonArray[0].path);
    // Compare Grass against the AI's selection and update scores/messages accordingly
    switch (aiChoice) {
      case "Grass":
        message.textContent = "It's a TIE!";
        break;
      case "Fire":
        aiScoreValue++;
        aiScore.textContent = `AI: ${aiScoreValue}`;
        message.textContent = "It's NOT very EFFECTIVE!";
        break;
      case "Water":
        playerScoreValue++;
        playerScore.textContent = `PLAYER: ${playerScoreValue}`;
        message.textContent = "It's SUPER EFFECTIVE!";
        break;
    }
  } else if (target.id === "fire" || target.id === "btnFire") {
    playerPokemon.setAttribute("src", playerPokemonArray[1].path);
    // Resolve the battle outcomes for a Fire pick
    switch (aiChoice) {
      case "Grass":
        playerScoreValue++;
        playerScore.textContent = `PLAYER: ${playerScoreValue}`;
        message.textContent = "It's SUPER EFFECTIVE!";
        break;
      case "Fire":
        message.textContent = "It's a TIE!";
        break;
      case "Water":
        aiScoreValue++;
        aiScore.textContent = `AI: ${aiScoreValue}`;
        message.textContent = "It's NOT very EFFECTIVE!";
        break;
    }
  } else {
    playerPokemon.setAttribute("src", playerPokemonArray[2].path);
    // Handle the remaining case where the player chose Water
    switch (aiChoice) {
      case "Grass":
        aiScoreValue++;
        aiScore.textContent = `AI: ${aiScoreValue}`;
        message.textContent = "It's NOT very EFFECTIVE!";
        break;
      case "Fire":
        playerScoreValue++;
        playerScore.textContent = `PLAYER: ${playerScoreValue}`;
        message.textContent = "It's SUPER EFFECTIVE!";
        break;
      case "Water":
        message.textContent = "It's a TIE!";
    }
  }

  if (playerScoreValue === WIN_SCORE) {
    isGameOver = true;
    message.textContent = "PLAYER WINS!";
  }
  if (aiScoreValue === WIN_SCORE) {
    isGameOver = true;
    message.textContent = "AI WINS!";
  }

  // Game State
  if (isGameOver) {
    // Stop listening for further clicks once someone reaches the win score
    playerChoices.removeEventListener("click", gameLogic);
  }
}

// Get Random AI Choice
function getAIChoice(arr) {
  let index = Math.floor(Math.random() * arr.length);
  // Swap the AI sprite to visualize the random choice and return its label
  aiPokemon.setAttribute("src", arr[index].path);
  return arr[index].name;
}
