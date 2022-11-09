// _________________________________________
// CODING CHALLENGE #1:
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height).
(mass in kg and height in meter).

1. Store Marks's and John's mass and height in variables.
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1:
Marks weights 78 kg and is 1.69m tall.
John weights 92 kg and is 1.95 m tall.
TEST DATA 2:
Marks weights 95 kg and is 1.88 m tall.
John weights 85 kg and is 1.76 m tall.
*/

/*
// 1ST TEST DATA VARIABLES
const markHeight = 1.69,
    markMass = 78,
    jhonHeight = 1.95,
    jhonMass = 92;

// BMI OF MARK IN 1ST TEST DATA
const BMIOfMarkFor1stTestData = markMass / (markHeight ** 2);

// BMI OF JOHN IN 1ST TEST DATA
const BMIOfJohnFor1stTestData = jhonMass / (jhonHeight ** 2);
console.log(BMIOfMarkFor1stTestData, BMIOfJohnFor1stTestData);

// COMPARISON OF BMI BETWEEN MARKS & JOHN IN 1ST TEST DATA
const markHigherBMI = BMIOfMarkFor1stTestData > BMIOfJohnFor1stTestData;
console.log(markHigherBMI);

// 2ND TEST DATA VARIABLES
const markHeight2 = 1.88,
    markMass2 = 95,
    jhonHeight2 = 1.76,
    jhonMass2 = 85;

// BMI OF MARK IN 2ND TEST DATA
const BMIOfMarkFor2ndTestData = markMass2 / (markHeight2 ** 2);

// BMI OF JOHN IN 2ND TEST DATA
const BMIOfJohnFor2ndTestData = jhonMass2 / (jhonHeight2 ** 2);
console.log(BMIOfMarkFor2ndTestData, BMIOfJohnFor2ndTestData);

// COMPARISON OF BMI BETWEEN MARKS & JOHN IN 2ND TEST DATA
const markHigherBMI2 = BMIOfMarkFor2ndTestData > BMIOfJohnFor2ndTestData;
console.log(markHigherBMI2);
*/
// _________________________________________




// _________________________________________
// Coding Challenge #2
/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
*/

/*
// 1ST TEST DATA VARIABLES
const markHeight = 1.69,
    markMass = 78,
    jhonHeight = 1.95,
    jhonMass = 92;
// 2ND TEST DATA VARIABLES
const markHeight2 = 1.88,
    markMass2 = 95,
    jhonHeight2 = 1.76,
    jhonMass2 = 85;

// 1ST TEST DATA
// BMI OF MARK IN 1ST TEST DATA
const BMIOfMarkFor1stTestData = markMass / (markHeight ** 2);
// BMI OF JOHN IN 1ST TEST DATA
const BMIOfJohnFor1stTestData = jhonMass / (jhonHeight ** 2);
// COMPARISON OF BMI BETWEEN MARKS & JOHN IN 1ST TEST DATA
const markHigherBMI = BMIOfMarkFor1stTestData > BMIOfJohnFor1stTestData;

// 2ND TEST DATA
// BMI OF MARK IN 2ND TEST DATA
const BMIOfMarkFor2ndTestData = markMass2 / (markHeight2 ** 2);
// BMI OF JOHN IN 2ND TEST DATA
const BMIOfJohnFor2ndTestData = jhonMass2 / (jhonHeight2 ** 2);
// COMPARISON OF BMI BETWEEN MARKS & JOHN IN 2ND TEST DATA
const markHigherBMI2 = BMIOfMarkFor2ndTestData > BMIOfJohnFor2ndTestData;


// BMI RESULTS OF 1ST TEST DATA
if (BMIOfMarkFor1stTestData > BMIOfJohnFor1stTestData) {
    console.log(`Mark's BMI (${BMIOfMarkFor1stTestData}) is higher than John's (${BMIOfJohnFor1stTestData})!`);
} else {
    console.log(`John's BMI (${BMIOfJohnFor1stTestData}) is higher than Mark's(${BMIOfMarkFor1stTestData})!`);
}

// BMI RESULTS OF 2ND TEST DATA
if (BMIOfMarkFor2ndTestData > BMIOfJohnFor2ndTestData) {
    console.log(`Mark's BMI (${BMIOfMarkFor2ndTestData}) is higher than John's (${BMIOfJohnFor2ndTestData})!`);
} else {
    console.log(`John's BMI (${BMIOfJohnFor2ndTestData}) is higher than Mark's(${BMIOfMarkFor2ndTestData})!`);
}
*/

// _________________________________________




// _________________________________________
/*
Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks �
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

/*
//  TASK 1 & 2
// DOLPHINS & KOALAS SCORE IN 1ST GAME
const game1DolphinsScore = (96 + 108 + 89) / 3;
const game1KoalasScore = (88 + 91 + 110) / 3;

// CHECKING WHO WON IN 1ST GAME
if ((game1DolphinsScore > game1KoalasScore)) {
    console.log(`Dolphin scored ${game1DolphinsScore} and win the trophy!`);
} else if ((game1KoalasScore > game1DolphinsScore)) {
    console.log(`Koalas scored ${game1KoalasScore} and win the trophy!`);
} else if ((game1DolphinsScore === game1KoalasScore)) {
    console.log(`Dolphins and Koalas both scored ${game1DolphinsScore, game1KoalasScore} and they both win the trophy!`)
} else {
    console.log(`No one won the trophy!`);
}

//  BONUS 1
// DOLPHINS & KOALAS SCORE IN 2ND GAME
const game2DolphinsScore = (97 + 112 + 101) / 3;
const game2KoalasScore = (109 + 95 + 123) / 3;

// CHECKING WHO WON IN 2ND GAME
if ((game2DolphinsScore > game2KoalasScore) && (game2DolphinsScore >= 100)) {
    console.log(`Dolphin scored ${game2DolphinsScore} and win the trophy!`);
} else if ((game2KoalasScore > game2DolphinsScore) && (game2KoalasScore >= 100)) {
    console.log(`Koalas scored ${game2KoalasScore} and win the trophy!`);
} else if ((game2DolphinsScore === game2KoalasScore)) {
    console.log(`Dolphins and Koalas both scored ${game2DolphinsScore, game2KoalasScore} and they both win the trophy!`)
} else {
    console.log(`No one won the trophy!`);
}

//  BONUS 2
// DOLPHINS & KOALAS SCORE IN 3RD GAME
const game3DolphinsScore = (97 + 112 + 101) / 3;
const game3KoalasScore = (109 + 95 + 106) / 3;

// CHECKING WHO WON IN 3RD GAME
if ((game3DolphinsScore > game3KoalasScore) && (game3DolphinsScore >= 100)) {
    console.log(`Dolphin scored ${game3DolphinsScore} and win the trophy!`);
} else if ((game3KoalasScore > game3DolphinsScore) && (game3KoalasScore >= 100)) {
    console.log(`Koalas scored ${game3KoalasScore} and win the trophy!`);
} else if ((game3DolphinsScore === game3KoalasScore) && (game3DolphinsScore >= 100) && (game3KoalasScore >= 100)) {
    console.log(`Dolphins and Koalas both scored ${game3DolphinsScore}, ${game3KoalasScore} and they both win the trophy!`)
} else {
    console.log(`No one won the trophy!`);
}
*/


// _________________________________________




// _________________________________________
/*
Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement � (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

// LOGIC (ROUGH WORK)
// let Bill Value
// let billValue;
// if (billValue >= 50) && (billValue <= 300) = 15%
// else = 20%


/*
// FOR TEST BILL VALUE 275
const billValue = 275;
let tip = (billValue >= 50) && (billValue <= 300) ? 15 / 100 * billValue : 20 / 100 * billValue;
const totalValue = billValue + tip;
console.log(`The bill was ${billValue}, the tip was ${tip}. and the total value ${totalValue}`);

// FOR TEST BILL VALUE 46
const billValue2 = 40;
let tip2 = (billValue2 >= 50) && (billValue2 <= 300) ? 15 / 100 * billValue2 : 20 / 100 * billValue2;
const totalValue2 = billValue2 + tip2;
console.log(`The bill was ${billValue2}, the tip was ${tip2}. and the total value ${totalValue2}`);

// FOR TEST BILL VALUE 430
const billValue3 = 430;
let tip3 = (billValue3 >= 50) && (billValue3 <= 300) ? 15 / 100 * billValue3 : 20 / 100 * billValue3;
const totalValue3 = billValue3 + tip3;
console.log(`The bill was ${billValue3}, the tip was ${tip3}. and the total value ${totalValue3}`);
*/


// _________________________________________
