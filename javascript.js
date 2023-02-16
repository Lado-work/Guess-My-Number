"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector("h4").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".number-input").value);

  if (!guess) {
    displayMessage("Need number");
  } else if (guess === secretNumber) {
    document.querySelector(".reload-button").style.boxShadow =
      "0px 10px 40px #edf73b";
    displayMessage("Correct !!!");
    document.querySelector(".for-image").style.backgroundColor = "#55d908";
    document.querySelector(".for-image").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".record").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!!!" : "Too Low!!!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".reload-button").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number-input").value = "";
  document.querySelector("body").style.backgroundColor = "#333";
  document.querySelector(".for-image").textContent = "?";
  document.querySelector(".for-image").style.backgroundColor = "#ffffff";
  document.querySelector(".reload-button").style.boxShadow =
    " 0 0 0 rgba(0, 0, 0, 0.2)";
});
