'use strict';
// console.log(document.querySelector('.message').textContent); //selecting element

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
let score = 20;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  }

  //when player wins
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '✅ Correct Number!';
  }

  //when the guess is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 GAME OVER!!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when the guess is too low
  else {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎 GAME OVER!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
