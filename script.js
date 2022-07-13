"use strict";
//gives random number in the beginning
let randomNumber = Math.trunc(Math.random() * 100 + 1);

//Again button function, give a new random number
document.querySelector(".again").addEventListener("click", againButton);

function againButton() {
  randomNumber = Math.trunc(Math.random() * 100 + 1);

  document.querySelector(".number").style.width = "12rem";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing again...";
  document.querySelector(".score").textContent = "10";
  document.querySelector(".number").textContent = "?";
  score = 10;
}

// Checking the number with the random number
document.querySelector(".check").addEventListener("click", checkNumber);
let score = 10;
let highScore = 0;
function checkNumber() {
  let guessedNumber = Number(document.querySelector(".guess").value);

  if (!guessedNumber || guessedNumber > 100) {
    document.querySelector(".message").textContent = "Between 1 - 100! 🤦‍♂️";
  } else if (guessedNumber === randomNumber) {
    document.querySelector(".message").textContent = "You Win!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "24rem";
    document.querySelector(".number").textContent = randomNumber;
    //implementing highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guessedNumber > randomNumber) {
    document.querySelector(".message").textContent = "Too High!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score <= 0) {
      document.querySelector(".message").textContent = "You lost 😜!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (guessedNumber < randomNumber) {
    document.querySelector(".message").textContent = "Too Low!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score <= 0) {
      document.querySelector(".message").textContent = "You lost 😜!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
}
