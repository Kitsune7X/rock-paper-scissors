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

// Get Random AI Choice
function getAIChoice(arr) {
  let index = Math.floor(Math.random() * arr.length);
  aiPokemon.setAttribute("src", arr[index].path);
  return arr[index].name;
}

// Game State

// Get Player Choice
playerChoices.addEventListener(
  "click",
  (e) => {
    let target = e.target;
    const aiChoice = getAIChoice(aiPokemonArray);

    if (target.id === "grass" || target.id === "btnGrass") {
      playerPokemon.setAttribute("src", playerPokemonArray[0].path);
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
      return isGameOver;
    }
    if (aiScoreValue === WIN_SCORE) {
      isGameOver = true;
      message.textContent = "AI WINS!";
      return isGameOver;
    }
  },
  { capture: true }
);
