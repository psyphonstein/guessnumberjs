"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const updateScore = function (score) {
  document.querySelector(".score").textContent = score;
};

updateScore(score);

document.querySelector(".check").addEventListener("click", () => {
  //   console.log(secretNumber);
  const guessVal = Number(document.querySelector(".guess").value);
  console.log(guessVal, typeof guessVal);
  if (!guessVal) {
    displayMessage("🚫 No Number Entered!!!");

    //when correct answer
  } else if (secretNumber === guessVal) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("CORRECT ANSWER!!!! 🎉");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;

    //When the guess is wrong
  } else if (secretNumber !== guessVal) {
    if (score > 1) {
      displayMessage(guessVal < secretNumber ? "Too Low !📉" : "Too High !📈");
      score = score - 1;
      updateScore(score);
    } else {
      displayMessage("You've lost this game!");
      updateScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  displayMessage("Start guessing...");
  updateScore(score);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
});
