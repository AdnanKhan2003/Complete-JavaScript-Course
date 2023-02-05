///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1.
// const [players1, player2] = game.players;
// console.log(players1, player2);

// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3.
// // const [...allPlayers] = game.players;
// const allPlayers = [...players1, ...player2];
// console.log(allPlayers);

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...players) {
//   let numOfGoals = 0,
//     str = 0;
//   for (let i = 0; i < players.length; i++) {
//     game.scored.includes(players[i]) ? numOfGoals++ : (numOfGoals = 0);
//     str += `${players[i]}: ${numOfGoals} \n`;
//   }
//   console.log(str);
// };
// // const printGoals = function () {
// //   const scorers = {};
// //   for (const player of game.scored) {
// //     scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// //   }
// //   console.log(scorers);
// // };
// // const printGoals = function (...playerNames) {
// //   for (let i = 0; i < playerNames.length; i++) {
// //     if (allPlayers[i] === game.scored[0]) {
// //       console.log(`${allPlayers[i]}: 1 \n`);
// //     } else if (allPlayers[i] === game.scored[1]) {
// //       console.log(`${allPlayers[i]}: 1 \n`);
// //     } else if (allPlayers[i] === game.scored[2]) {
// //       console.log(`${allPlayers[i]}: 1 \n`);
// //     } else if (allPlayers[i] === game.scored[3]) {
// //       console.log(`${allPlayers[i]}: 1 \n`);
// //     } else {
// //       console.log(`${allPlayers[i]}: 0 \n`);
// //     }
// //   }
// // };

// printGoals('Davies', 'Muller', 'Lewandowski');
// printGoals(...allPlayers);

// // 7.
// team1 > team2 && console.log(`Team1 is more likely to win`);
// team1 < team2 && console.log(`Team1 is more likely to win`);

// 2nd SOLUTION
/* 
// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(players1, players2);

// 4.
const players1Final = [...players1, `Thiago`, `Coutinho`, `Perisic`];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  let numOfGoals = 0,
    results = 0;
  for (let i = 0; i < players.length; i++) {
    game.scored.includes(players[i]) ? numOfGoals++ : (numOfGoals = 0);
    results += `${players[i]}: ${numOfGoals} \n`;
  }
  console.log(results);
};
printGoals(`Davies`, `Muller`, `Lewandowski`);
printGoals(...allPlayers);

// 7.
team1 > team2 && console.log(`Team1 is more likely to win!`);
team1 < team2 && console.log(`Team2 is more likely to win!`);
 */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// ///
// for (const [i, players] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${players}`);
// }

// // 2.
// const teamOdds = Object.values(game.odds);

// let avg = 0;
// for (const odds of teamOdds) {
//   avg += odds;
// }
// avg /= teamOdds.length;
// console.log(avg);

// // 3.
// const gameOdds = Object.entries(game.odds);
// console.log(gameOdds);

// for (const [team, odds] of gameOdds) {
//   let str = team === 'x' ? `draw` : `Victory ${game[team]}`;
//   console.log(`Odd of ${str} : ${odds}`);
//   // console.log(team);
// }

// // 4.
///
// BONUS
// const scorers = {};
// const [team1, team2] = game.players;
// const allPlayers = [...team1, ...team2];
// let numOfGoals = 0;
// let finalScoresStr = '';
// console.log(allPlayers);

// for (let i = 0; i < allPlayers.length; i++) {
//   if (game.scored.includes(allPlayers[i])) {
//     numOfGoals++;
//     finalScoresStr += `${allPlayers[i]} : ${numOfGoals}`;

//     scorers[`${allPlayers[i]}`] = numOfGoals;
//   } else {
//     numOfGoals = 0;
//   }
// }
// console.log(finalScoresStr);
// console.log(scorers);

// // 4.
// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
//_________________________________________________________________________

//_________________________________________________________________________
///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/* 
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents)];
const events2 = [...new Set(gameEvents.values())];
console.log(events);
console.log(events2);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
const time = [...gameEvents.keys()].pop();
// console.log(time);

for (let i = 1; i <= 92; i++) {
  if (i % 9 === 0) {
    console.log(
      `An event happened, on average, every ${time / gameEvents.size} minutes`
    );
  }
}

// 4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half}HALF] ${min}: ${event}`);
} */
//_________________________________________________________________________

//_________________________________________________________________________
///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// CREATING button
/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

// Button ELEMENTS
const textareaEl = document.querySelector('textarea');
const buttonEl = document.querySelector('button');
 */
// EVENTS when BTN is CLICKED
// buttonEl.addEventListener('click', function () {
//   const text = textareaEl.value;
//   const textArea = text.split('\n');

//   for (const [i, v] of textArea.entries()) {
//     const formatText =
//       v.toLowerCase().trim().replace('_', ' ') + '✅'.repeat(i + 1);

//     const splitWords = formatText.split(' ');
//     const firstPartStr = splitWords[0];
//     const secondPartStr = splitWords[1].replace(
//       splitWords[1].slice(0, 1),
//       splitWords[1].slice(0, 1).toUpperCase()
//     );
//     const correctStr = firstPartStr + secondPartStr;
//     console.log(correctStr);
//   }
//   console.log(formatText);
// });

// buttonEl.addEventListener('click', function () {
//   const text = textareaEl.value;
//   const varName = text.split('\n');

//   for (const [i, v] of varName.entries()) {
//     const formatString =
//       v.toLowerCase().trim().replace('_', ' ') + '✅'.repeat(i + 1);
//     let [a, b] = formatString.split(' ');
//     b = b[0].toUpperCase() + b.slice(1);
//     const camelCaseString = a + b;
//     console.log(camelCaseString);
//   }
// });
/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/
/* 
buttonEl.addEventListener('click', function () {
  const text = textareaEl.value;
  const rows = text.split('\n');

  for (const [i, w] of rows.entries()) {
    const [a, b] = w.toLowerCase().trim().split('_');

    const output = `${a}${b.replace(b[0], b[0].toUpperCase())}`;
    const result = `${output.padEnd(20)}${'✅'.repeat(i + 1)}`;
    console.log(result);
  }
});
 */
//_________________________________________________________________________

//_________________________________________________________________________
///////////////////////////////////////
// String Methods Practice
/* 
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const rows = flights.split('+');

const capitalize = str => str.slice(0, 3).toUpperCase();

for (const r of rows) {
  const [status, place1, place2, time] = r.split(';');
  const output = `${status.startsWith('_Delayed') ? '🔴' : ''} ${status
    .replaceAll('_', ' ')
    .trim()} from ${capitalize(place1)} to ${capitalize(
    place2
  )} (${time.replace(':', 'h')}.)`.padStart(45);
  console.log(output);
} */
//_________________________________________________________________________

//_________________________________________________________________________
/* Data used in exercises */
// const books = [
//   {
//     title: 'The Lord of the Rings',
//     publicationDate: '1954-07-29',
//     author: 'J. R. R. Tolkien',
//     genres: ['fantasy', 'high-fantasy', 'adventure'],
//     filmAdaptation: true,
//     otherLanguagesTitle: {
//       spanish: 'El señor de los anillos',
//       chinese: '魔戒',
//       french: 'Le Seigneur des anneaux',
//     },
//   },
//   {
//     title: 'The Cyberiad',
//     publicationDate: 1965,
//     author: 'Stanislaw Lem',
//     genres: ['science fiction'],
//     otherLanguagesTitle: {
//       polish: 'Cyberiada',
//       spanish: 'Ciberiada',
//       french: 'Cybériade',
//     },
//   },
//   {
//     title: 'Dune',
//     publicationDate: 1965,
//     author: 'Frank Herbert',
//     genres: ['science fiction', 'novel', 'adventure'],
//     filmAdaptation: true,
//     otherLanguagesTitle: {},
//   },
//   {
//     title: "Harry Potter and the Philosopher's Stone",
//     publicationDate: '1997-06-26',
//     author: 'J. K. Rowling',
//     genres: ['fantasy', 'adventure'],
//     filmAdaptation: true,
//     otherLanguagesTitle: {
//       spanish: 'Harry Potter y la piedra filosofal',
//       korean: '해리 포터와 마법사의 돌',
//       bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
//       portuguese: 'Harry Potter e a Pedra Filosofal',
//     },
//   },
//   {
//     title: 'A Game of Thrones',
//     publicationDate: '1996-08-01',
//     author: 'George R. R. Martin',
//     genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
//     filmAdaptation: true,
//     otherLanguagesTitle: {
//       korean: '왕좌의 게임',
//       polish: 'Gra o tron',
//       portuguese: 'A Guerra dos Tronos',
//       spanish: 'Juego de tronos',
//     },
//   },
// ];

/* ⚠️ YOU WILL CALL THE FUNCTIONS BELOW IN EXERCISES.
     DON'T WORRY IF THEY DON'T MAKE SENSE FOR NOW.
     YOU WILL LEARN EVERYTHING A BIT LATER IN THE COURSE.
     FOR NOW TREAT THEM AS BLACK BOXES (focus on the values they return).
     YOU CAN CALL THEM AND LOG THE RETURNED VALUE TO THE CONSOLE TO SEE WHAT EXACTLY THEY RETURN. */

const getBooksByGenre = genre =>
  books.filter(book => book.genres.includes(genre));
const getBooksAsArrays = () => books.map(book => Object.entries(book));
const getBookAuthors = () => books.map(book => book.author);

/*
 *  ********************************************
 *  1) DESTRUCTURING ARRAYS                    *
 *  ********************************************
 */

/* A) Destructure the 'books' array into four variables called 'a', 'b', 'c' and 'd'.
  Leave the rest of the books unused. */

/* B) The second and third books are science fiction.
      Assign these books to the variables called 'second' and 'third' using destructuring. */

/* D) Are you ready for some hard-core destructuring? 😄
      The getBooksAsArrays() function returns the books array, but all book objects and their properties were converted to arrays.
      Now, you have an array of arrays of arrays.
      Destructure the title of the second book (The Cyberiad) into a variable called 'title'. */

/* ⚠️ COMMENT OUT YOUR SOLUTIONS AFTER YOU FINISH SO THAT IT DOESN'T COLLIDE WITH NEXT EXERCISES 🠕 */
/* 
// A.
const [a, b, c, d] = [...books];
console.log(a, b, c, d);

// B.
const [, second, third] = [...books];
console.log(second, third);

// C.
const [, [[, title]]] = getBooksAsArrays();
console.log(title);
console.log(getBooksAsArrays());
 */

/*
 *  ********************************************
 *  2) DESTRUCTURING OBJECTS                   *
 *  ********************************************
 */

/* A) Take the first object from the 'books' array, and assign the author to the 'author' variable using destructuring.
      Use the 'let' statement because the 'author' variable may change later. */

/* B) Take the second object from the 'books' array, and destructure the title into a variable called 'bookTitle'. */

/* C) The book objects aren't consistent in their form.
      For example, the second book doesn't have the 'filmAdaptation' property.
      Destructure it into a variable called 'hasFilmAdaptation' with a default value of false. */

/* D) Remember the 'author' variable from exercise A? It's time to reassign it.
      Destructure the author of the third book into existing variable called 'author'. */
/* 
// A.
let { author } = books[0];
console.log(author);

// B.
const { title: bookTitle } = books[1];
console.log(bookTitle);

// C.
// books[1]['hasFilmAdaptation'] = false;
books[1].hasFilmAdaptation = false;
console.log(books[1]);

// D.
({ author } = books[2]);
console.log(author); */

/*
 *  ********************************************
 *  3) THE SPREAD SYNTAX                       *
 *  ********************************************
 */

/* A) The getBookAuthors() function returns an array of authors from the 'books' array.
      Reassign the 'authors' variable below so that it contains both — already existing authors,
      and authors returned from the getBookAuthors() function. Use the spread syntax. */
let authors = ['George Orwell', 'Aldous Huxley'];

/* B) The console.log() method can take multiple arguments and log them to the console.
            First, log the 'authors' array as it is (as one argument).
            Second, log the elements of the 'authors' array, but this time use the spread syntax.
            Compare the outputs. */

/* C) The spread syntax can be used with other iterables, for example, strings.
            Create a new variable called 'firstNameArray', and spread the 'firstName' string
            so that each letter becomes an element of the 'firstNameArray' like ['J', 'o', 'h', 'n']. */
const firstName = 'John';

/* D) Now it's time to spread some objects. Create a new variable called 'cyberiad',
            and assign an object to it. This object should have all the properties of the second book from the 'books' array,
            plus the missing 'filmAdaptation' property set to false. */
/* 
// A.
authors = [...authors, ...getBookAuthors()];
console.log(authors);

// B.
console.log(authors, ...authors);

// C.
const firstNameArray = [...firstName];
console.log(firstNameArray);

// D.
const cyberiad = { ...books[1], filmAdaptation: false };
// const cyberiad = { ...books[1] };
console.log(cyberiad); 
*/

/*
 *  ********************************************
 *  4) REST PATTERN AND PARAMETERS             *
 *  ********************************************
 */

/* A) The getBooksByGenre() function returns an array of books based on the genre you pass as the argument.
      Use it to get all 'fantasy' books. Destructure the returned array into two variables — the first one called 'theLordOfTheRings',
      and the second one called 'otherFantasyBooks' (an array containing all other values from the returned array). */

/* B) This time you'll write a function utilizing the power of rest parameters.
      This function named as list() should output a list with a title to the console.
      The first argument it takes is the "title" of the list (string),
      the rest of arguments are list "items" (as many as you want) that will be displayed under the title.
      Example:
      list('My favorite books', 'Brave New World', 'The Great Gatsby', 'Pride and Prejudice');
      Output:
      My favorite books:          <-- title
      1) Brave New World          <-- list item
      2) The Great Gatsby         <-- list item
      3) Pride and Prejudice      <-- list item
      ...
     */
/* 
// A.
const [theLordOfTheRings, ...otherFantasyBooks] = getBooksByGenre('fantasy');
console.log(theLordOfTheRings, otherFantasyBooks);

// B.
const list = function (listTitle, ...items) {
  console.log(`${listTitle}:`);
  for (let i = 0; i < items.length; i++) {
    console.log(`${i + 1}) ${items[i]}`);
  }
};

list('My favourite books', 'Quran', 'Islamic History', 'Muslim Civilization'); */

/*
 *  ********************************************
 *  5) SHORT CIRCUITING (&& and ||)            *
 *  ********************************************
 */

/* A) Each book has the 'otherLanguagesTitle' property, which stores an object containing the language as a key,
      and the title of the book in that language as a value.
      Example 'otherLanguagesTitle' property:
      otherLanguagesTitle: {
        spanish: 'El señor de los anillos',
        chinese: '魔戒',
        french: 'Le Seigneur des anneaux'
      }
      Write a function called 'getTitleInSpanish' that takes a 'book' object as an argument,
      and returns a title in Spanish or a string "No data available" if there is no title in Spanish.
      Using the 'if' statement or the ternary operator is not allowed. */
/* 
const getTitleInSpanish = function (obj) {
  return obj.otherLanguagesTitle.spanish || 'No data available';
};
console.log(getTitleInSpanish(books[0])); */

/* B) Loop over the 'books' array, and for each book check if it has the title in Spanish and Korean.
      If it's true, log a string "<title> by <author> has title in Spanish and Korean" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */

/* for (const book of books) {
  const result =
    book.otherLanguagesTitle.spanish &&
    book.otherLanguagesTitle.korean &&
    console.log(
      `A ${book.title} by ${book.author} has translations in ${book.spanish} and ${book.korean}`
    );
} */

/* C) Loop over the 'books' array, and for each book check if it has the title in Portuguese or Spanish, but not in both.
      If it's true, log a string "<title> by <author> has title in Portuguese or Spanish, but not in both" to the console,
      where <title> is the book title (in English), and <author> is the author of the book.
      Using the 'if' statement or the ternary operator is not allowed.
      Example output:
      "A Game of Thrones by George R. R. Martin has translations in Spanish and Korean."
      */
/* 
for (let i = 0; i < books.length; i++) {
  const aw =
    (books[i].otherLanguagesTitle.portuguese &&
      !books[i].otherLanguagesTitle.spanish) ||
    (books[i].otherLanguagesTitle.spanish &&
      !books[i].otherLanguagesTitle.portuguese &&
      console.log(
        `${books[i].title} by ${books[i].author} has title in Portuguese or Spanish, but not in both`
      ));
}
 */
//_________________________________________________________________________
