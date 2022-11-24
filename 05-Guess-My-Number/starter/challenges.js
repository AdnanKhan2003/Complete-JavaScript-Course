'use strict';

// ______________________________________________________________________
/*
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input fields
4. Also restore the original background color (#222) and number width (15rem)
*/

/* 
// DEFINING VARIABLES
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// EVENTS TO HAPPEN WHEN THE 'CHECK!' BUTTON IS HITED!
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THE 'GUESS FIELD' IS 'EMPTY'
  if (!guess) {
    document.querySelector('.message').textContent = `Enter Valid Number!!`;
  }
  // WHEN THE 'GUESS' IS EQUAL TO 'SECRETNUM'
  else if (guess === secretNum) {
    document.querySelector('.message').textContent = `You won the game!`;

    document.querySelector('body').style.background = `#60b347`;
    document.querySelector('.number').style.width = `30rem`;

    document.querySelector('.number').textContent = secretNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // WHEN THE 'GUESS' IS GREATER THAN 'SECRETNUM'
  else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📉 Enter Lower Number!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `❗ You Lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  }
  // WHEN THE 'GUESS' IS SMALLER THAN 'SECRETNUM'
  else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector(
        '.message'
      ).textContent = `📈 Enter Higher Number!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `❗ You Lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

// 'AGAIN' BUTTON FUNCTIONALITY
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = `?`;

  document.querySelector('.guess').value = ``;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.background = `#222`;
  document.querySelector('.number').style.width = `15rem`;
});
*/

// ______________________________________________________________________

// ______________________________________________________________________
/* 
// #2


const secretNum = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

// Defining Variables:
let secretNumber = secretNum();
let score = 20;
let highScore = 0;

// HTML Elements
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
let body = document.querySelector('body');
let number = document.querySelector('.number');
let againBtn = document.querySelector('.again');
const scoreElement = document.querySelector('.score');
let highScoreElement = document.querySelector('.highscore');
let guessElement = document.querySelector('.guess');

// Event to happen after clicking '.check' (btn class)
checkBtn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When the 'guess field' (.guess) is left empty
  if (!guess) {
    message.textContent = `Invalid Number`;
  }
  // When the 'guess' is equal to 'secretNumber'
  else if (guess === secretNumber) {
    message.textContent = `🏆 You won the game!`;
    number.textContent = secretNumber;

    // Change 'background' to 'green'
    body.style.background = `#60b347`;
    number.style.width = `30rem`;

    // Code to show highscore
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  }
  // When the 'guess' is different than 'secretNumber'
  else if (guess !== secretNumber) {
    if (score > 1) {
      // Checking either 'guess' is greater/smaller or 'secretNumber'
      message.textContent =
        guess > secretNumber ? `Enter Lower Number!` : `Enter Higher Number!`;
      score--;
      scoreElement.textContent = score;
    }
    // If 'score' is equal to 0
    else {
      message.textContent = `You lost the game`;
      scoreElement.textContent = 0;
    }
  }
});

// Event to execute when the '.click' button is hitted
againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber;

  // Setting back all the variables to their initail values
  message.textContent = `Start guessing...`;
  guessElement.value = ``;
  body.style.backgroundColor = `#222`;
  number.style.width = `15rem`;
  number.textContent = `?`;
  scoreElement.textContent = score;
});
*/

// ______________________________________________________________________
