'use strict';
// console.log(document.querySelector('.message').textContent);
// console.log(
//   (document.querySelector('.message').textContent = 'Correct Number')
// );
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 12;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = document.querySelector('.highscore').textContent;
function checkScore(score) {
  if (score > 0) {
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
  }
}
document.querySelector('.check').addEventListener('click', function () {
  const value = Number(document.querySelector('.guess').value);
  if (!value) {
    document.querySelector('.message').textContent = 'No number';
  } else if (value === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highScore = document.querySelector('.highscore').textContent;
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
    }
  } else if (value !== secretNumber) {
    document.querySelector('.message').textContent = 'Too High';
    score--;
    checkScore(score);
  } else {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    checkScore(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
