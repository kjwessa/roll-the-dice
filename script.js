"use strict";

// * Player Variables
const playerZeroName = document.getElementById("name-0");
const playerOneName = document.getElementById("name-1");
const playerZero = document.querySelector(".player__0");
const playerOne = document.querySelector(".player__1");

const playerScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

// * Dice/Button Variables
const gameDice = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn__type_roll");
const btnHoldDice = document.querySelector(".btn__type_hold");
const btnGameNew = document.querySelector(".btn__type_new");

// * On Load
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
gameDice.classList.add("hidden");

// * Dice/Button Functions
function switchPlayer() {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Switch between players
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle("player__active");
  playerOne.classList.toggle("player__active");
}

function playerWinsGame() {
  playing = false;
  document.querySelector(`.player__${activePlayer}`).classList.add("player__winner");
  document.querySelector(`.player__${activePlayer}`).classList.remove("player__active");
  gameDice.classList.add("hidden");
}

function handleRollDice() {
  if (playing) {
    const currentRoll = Math.trunc(Math.random() * 6 + 1);
    gameDice.classList.remove("hidden");
    gameDice.src = `/images/dice-${currentRoll}.png`;

    if (currentRoll !== 1) {
      currentScore += currentRoll;
      document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
}

function handleHoldDice() {
  if (playing) {
    playerScores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = playerScores[activePlayer];

    if (playerScores[activePlayer] >= 10) {
      playerWinsGame();
    } else {
      switchPlayer();
    }
  }
}

// * Button Event Listeners
btnRollDice.addEventListener("click", handleRollDice);
btnHoldDice.addEventListener("click", handleHoldDice);
