"use strict";

// * Player Variables
const playerZero = document.querySelector(".player__zero");
const playerOne = document.querySelector(".player__one");
const playerZeroScoreTotal = document.getElementById("score-0");
const playerOneScoreTotal = document.getElementById("score-1");
const playerZeroName = document.getElementById("name-0");
const playerOneName = document.getElementById("name-1");

const playerScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// * Dice/Button Variables
const gameDice = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn__type_roll");
const btnHoldDice = document.querySelector(".btn__type_hold");
const btnGameNew = document.querySelector(".btn__type_new");

// * On Load
playerZeroScoreTotal.textContent = 0;
playerOneScoreTotal.textContent = 0;
gameDice.classList.add("hidden");

// * Dice/Button Functions
function handleRollDice() {
  const currentRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(currentRoll);
  gameDice.classList.remove("hidden");
  gameDice.src = `/images/dice-${currentRoll}.png`;

  if (currentRoll !== 1) {
    currentScore += currentRoll;
    document.getElementById(`current-${activePlayer}`).textContent = currentScore;
  } else {
    document.getElementById(`current-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerZero.classList.toggle("player__active");
    playerOne.classList.toggle("player__active");
  }
}

// * Button Event Listeners
btnRollDice.addEventListener("click", handleRollDice);

// * Display Dice Roll
