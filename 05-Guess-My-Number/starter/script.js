'use strict';

// ______________________________________________________________________

// 1. 'querySelector()'
// 'querySelector()' is a basically a method that's available on the document object.
/*
console.log(document.querySelector('.message'));

// textContent
console.log(document.querySelector('.message').textContent);
*/

/*
2. DOM (Document Object Model)
DOCUMENT OBJECT MODEL: 
-> STRUCTURED REPRESENTATION OF HTML DOUCMENTS ALLOWS JAVASCRIPT TO ACCESS HTML ELEMENTS AND STYLE TO MANIPULATE THEM

- The interaction of JavaScript with webpage and the technical term for which is 'DOM Manipulation'
- DOM is a connection point between HTML documents and JavaScript code
- DOM is automatically created by the browser as soon as page loads and stored in a tree structure.



---- TREE STRUCTURE -----
1. DOCUMENT:
'querySelector()' is a method available in document object
That's why document is entry point to the DOM

___________________________________________________________________________
| 
| >> CODE <<                                       
| ________________________________________________
| <!DOCTYPE html>
| <html>
| 
|  <head>
|    <title>A Simple Page</title>
|  </head>
| 
|  <body>
| 
|    <section>
|        <p>A paragraph with a <a>linke</a></p>
|        <p>A second paragraph</p>
|    </section>
| 
|    <section>
|        <img src="dom.png" alt="The DOM">
|    </section>
| 
|  </body>
| </html>
|__________________________________________________________________________
|
|
|                         ------------
|                        ︱ DOCUMENT ︱
|                         ------------
|                             ↓
|                        ------------
|                        | Element |
|                        | <html>  |
|                        -----------
|         ___________________↓_______________________      
|        ︱                                          ︱
|    -----------                                 -----------
|   ︱ Element︱                                 ︱ Element︱
|   ︱ <head> ︱                                 ︱ <body>︱
|   -----------                                  ----------
|        ↓                       ___________________↓____
|                               |                       ↓  
|    -----------                |                -----------
|   ︱ Element︱                |                ︱ Element︱
|   ︱<title> ︱                |                ︱ <section>︱
|   -----------                |                  ----------
|        ↓                     |                      ↓
|    ------------------        |                 ------------
|   ︱    TEXT        ︱       |                 ︱ Element |
|   ︱"A Simple Page" ︱       |                 ︱ <img>  ︱
|   -------------------       |                  -----------
|                             |
|                             ↓
|                        -------------
|                        | Element  ︱
|                        | <section>︱
|                        -------------
|         _____________________↓_______________________      
|        ︱                                          ︱
|    -----------                                 -----------
|   ︱ Element︱                                 ︱ Element︱
|   ︱ <p> ︱                                    ︱ <p>   ︱
|   -----------                                  ----------  
|                         ___________________________↓_____    
|                        |                               ↓           
|                        |                        -------------------
|                        |                       ︱     Text        ︱
|                        |                       ︱ "A second para" ︱
|                        |                       -------------------- 
|                        |
|        ________________↓__________________________      
|      ︱                                          ︱
|    -----------                                 -------------------
|   ︱ Element︱                                 ︱     Text       ︱
|   ︱  <a>   ︱                                 ︱  "A paragraph" ︱
|   -----------                                  -------------------    
|       ↓
|    -----------                             
|   ︱  Text  ︱                               
|   ︱ "link" ︱                               
|   -----------   
|
|
|_________________________________________________________________________

DOM IS NOT PART OF JAVASCRIPT
DOM != JAVASCRIPT

  - DOM and DOM methods are part of Web APIs. 
  - Web APIs are like libraries that browser implement that we can access from JavaScript code.
  - API stands for Application Programming Interface
  - Web APIs are basically libraries that are also written in JavaScript that are automcatically available for us to use


*/
// ______________________________________________________________________

// ______________________________________________________________________
/*
// 2. SELECTING AND MANIPULATING ELEMENTS

// MANIPULATING TEXT CONTECT OF THE HTML ELEMENTS
document.querySelector('.message').textContent = `You're a human!!`;
document.querySelector('.number').textContent = 7;
document.querySelector('.label-score').textContent = `Score: 777`;

// READING VALUES
// console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 9;
console.log(document.querySelector('.guess').value);
// ______________________________________________________________________

*/

// ______________________________________________________________________

// ______________________________________________________________________
/*
3. HANDLING CLICK EVENTS:
- An event is something that happens on the page. For example: mouse click, mouse move, keypress , etc
*/

/* 
// A. MANIPULATING INPUT FIELD
// document.querySelector('.guess').value = 7;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.guess').value = 7;
// const message = document.querySelector('.guess').value;
// console.log(message);

//
// B. MANIPULATING TEXT
// document.querySelector('.message').textContent = `Start Now! now! ok`;

// C. EVENT LISTENER
// - A function is just a value so it can be passed in another function as an argument

// - 1st argument in 'addEventListener()' should be the
// 1. 'Name of the event'
// 2. Pass a 'function' to event. 
// The function is called when the defined event happens!!


document.querySelector('.check').addEventListener('click', function () {
  // const guessNo = document.querySelector('.guess').value;
  const guessNo = Number(document.querySelector('.guess').value);
  console.log(guessNo, typeof guessNo);

  document.querySelector('.message').textContent = `You're a human!`;

  if (!guessNo) {
    console.log(`You forgot to enter the number!! Please enter the number`);
  }
});
*/

// ______________________________________________________________________

// ______________________________________________________________________
// 4. IMPLEMENTING LOGIC
/* 
/ DEFINING VARIABLES
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
      document.querySelector('.message').textContent = `You Lost the game!`;
      document.querySelector('.score').textContent = 0;
    }
  }
  // WHEN THE 'GUESS' IS SMALLER THAN 'SECRETNUM'
  else if (guess < secretNum) {
    if (score > 1) {
      document.querySelector('.message').textContent = `📈 Enter Higher Number!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `You Lost the game!`;
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
//  REFACTORING:
/*
5. REFACTORING OUR CODE
--> REFACTORING BASICALLY MEANS TO RESTRUCTURE THE CODE BUT WITHOUT CHANGING HOW IT WORKS
*/

/* 
// DEFINING VARIABLES
// let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const secretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const displayNumberStyleWidth = function (number) {
  document.querySelector('.number').style.width = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const displayStyleBody = function (body) {
  document.querySelector('body').style.background = body;
};

const secretNum = secretNumber();

// EVENTS TO HAPPEN WHEN THE 'CHECK!' BUTTON IS HITED!
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THE 'GUESS FIELD' IS 'EMPTY'
  if (!guess) {
    // document.querySelector('.message').textContent = `Enter Valid Number!!`;
    displayMessage(`Enter Valid Number!!`);
  }
  // WHEN THE 'GUESS' IS EQUAL TO 'SECRETNUM'
  else if (guess === secretNum) {
    // document.querySelector('.message').textContent = `You won the game!`;
    displayMessage(`You won the game!`);

    // document.querySelector('body').style.background = `#60b347`;
    displayStyleBody(`#60b347`);

    // document.querySelector('.number').style.width = `30rem`;
    displayNumberStyleWidth(`30rem`);

    // document.querySelector('.number').textContent = secretNum;
    displayNumber(secretNum);

    if (score > highscore) {
      highscore = score;
      // document.querySelector('.highscore').textContent = highscore;
      displayHighscore(highscore);
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNum
      //     ? `📉 Enter Lower Number!`
      //     : `📈 Enter Higher Number!`;
      displayMessage(
        guess > secretNum ? `📉 Enter Lower Number!` : `📈 Enter Higher Number!`
      );
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = `You lost the game!`;
      displayMessage(`You lost the game!`);

      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  // WHEN THE 'GUESS' IS GREATER THAN 'SECRETNUM'
  // else if (guess > secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `📉 Enter Lower Number!`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `You Lost the game!`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // // WHEN THE 'GUESS' IS SMALLER THAN 'SECRETNUM'
  // else if (guess < secretNum) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = `📈 Enter Higher Number!`;
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = `You Lost the game!`;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

// 'AGAIN' BUTTON FUNCTIONALITY
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // secretNum = Math.trunc(Math.random() * 20) + 1;
  secretNumber();
  // document.querySelector('.number').textContent = `?`;
  displayNumber(`?`);

  document.querySelector('.guess').value = ``;
  // document.querySelector('.message').textContent = `Start guessing...`;
  displayMessage(`Start guessing...`);

  // document.querySelector('.score').textContent = score;
  displayScore(score);

  // document.querySelector('body').style.background = `#222`;
  displayStyleBody(`#222`);

  // document.querySelector('.number').style.width = `15rem`;
  displayNumberStyleWidth(`15rem`);
});
*/

const guessEl = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const message = document.querySelector('.message');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreEl = document.querySelector('.score');
const highScoreEl = document.querySelector('.highscore');
const body = document.querySelector('body');
const number = document.querySelector('.number');

let score = 20;
let highScore = 0;
let playing = true;

// Events to happen when 'click' button is clicked
const clickHandler = function () {
  // Reading value from 'guess field'
  const guess = Number(document.querySelector('.guess').value);

  // When 'guess field' is empty
  if (!guess) {
    message.textContent = `Invalid Number!!`;
  }
  // When 'guess' is equal to 'secret number'
  else if (guess === secretNumber) {
    if (playing) {
      message.textContent = `You Won the Game!`;

      number.textContent = secretNumber;
      number.style.width = `30rem`;

      // 'Change Background' when 'guess' is equal to 'secret number'
      // body.style.background = `#60b347`;
      body.style.background = `#2ECC71`;

      // Show HighScore
      if (score > highScore) {
        highScore = score;
        highScoreEl.textContent = highScore;
      }

      playing = false;
    }
  }
  // When 'guess' is different from 'secret number'
  else if (guess !== secretNumber) {
    // Score shouldn't be 'less' than '0'
    if (playing) {
      if (score > 1) {
        if (guess > 20 || guess <= 0) {
          message.textContent = `Enter numbers between 1 to 20`;
        } else {
          message.textContent =
            guess > secretNumber
              ? `📉 Enter Lower Number!`
              : `📈 Enter Higher Number!`;
          score--;
          scoreEl.textContent = score;
        }
      }
      // You lost the game no 'score' left
      else {
        message.textContent = `You lost the Game!`;
        scoreEl.textContent = 0;
        body.style.background = `#E74C3C`;
      }
    }
  }
};

// Setting 'variables' to their 'initial values'
const initValues = function () {
  playing = true;
  if (playing) {
    // Setting 'variable' to their 'initial values'
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    number.style.width = `15rem`;
    number.textContent = `?`;
    body.style.background = `#222`;

    // Displaying 'initial values' as they were: (default)
    scoreEl.textContent = score;
    guessEl.value = ``;
  }
};

// Adding 'addEventListener'

// When the below 'elements' are 'clicked'
btnCheck.addEventListener('click', clickHandler);
btnAgain.addEventListener('click', initValues);

// When the any 'keyboard btn' is 'pressed'
guessEl.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    clickHandler();
  }
});
body.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    initValues();
  }
});

// ______________________________________________________________________
