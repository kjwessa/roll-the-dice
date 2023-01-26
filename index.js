"use strict";

// * Player Variables
const playerOneScoreTotal = document.getElementById("score-1");
const playerTwoScoreTotal = document.getElementById("score-2");
const playerOneScoreCurrent = document.getElementById("current-1");
const playerTwoScoreCurrent = document.getElementById("current-2");
const playerOneName = document.getElementById("name-1");
const playerTwoName = document.getElementById("name-2");
let currentPlayerOneScore = 0;
let totalPlayerOneScore = 0;
let currentPlayerTwoScore = 0;
let totalPlayerTwoScore = 0;

// * Dice/Button Variables
const gameDice = document.querySelector(".dice");
const btnRollDice = document.querySelector(".btn__type_roll");
const btnHoldDice = document.querySelector(".btn__type_hold");
const btnGameNew = document.querySelector(".btn__type_new");

// * On Load
playerOneScoreTotal.textContent = 0;
playerTwoScoreTotal.textContent = 0;
gameDice.classList.add("hidden");

// * Player Variables

// * Dice/Button Functions
function handleRollDice() {
  const currentRoll = Math.trunc(Math.random() * 6 + 1);
  console.log(currentRoll);
  gameDice.classList.remove("hidden");
  gameDice.src = `/images/dice-${currentRoll}.png`;

  if (currentRoll !== 1) {
    // add dice to current score
  } else {
    //switch to next player
  }
}

// * Button Event Listeners
btnRollDice.addEventListener("click", handleRollDice);

// * Display Dice Roll
