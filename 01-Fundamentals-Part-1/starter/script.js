// ________________________________________
/*
// JAVASCRIPT FUNDAMENTALS

// 1. WAYS TO PRINT IN JAVASCRIPT
// I) 1ST WAY ↓
alert("Hello World");
// The upper line is commented because of pop-up
// II) 2ND WAY ↓
console.log("Hello World");


// 3) 3RD WAY ↓
// The below line is commented because it was not looking good when opening html file
document.write("Hello World");
*/
// _________________________________________




// _________________________________________
/*
// 2. VALUES & VARIABLES
// I) VARIABLE NAME CONVENTIONS
let playerIsOnline = false;
let player_is_online = true;
let $player = false;

let JavaScript = "Amazing";

// if (JavaScript === "Amazing") alert("JavaScript is Amazing!!");
// ↑ This line is comment to prevent alert window to pop-up

//Show Output in console
console.log(2 + 8 + 40 + 50);

console.log("Note: \n I've 'commented' code for \"alert window\" you can 'uncomment' it by going in \"1] JavaScript Fundamentals - 1\" Folder inside that go in \"js\" folder and then \"script.js\"");
*/
// _________________________________________





// _________________________________________
/*
// 3. DATATYPES & VARIABLES
// DYNAMIC TYPING
// Dynamic typing means that we can easily change type of the value that is hold by a variable

// I. THEORY
A) Number:
Floating point numbers. Used for decimals and integers
let myRollNo = 525;

B) String:
Sequence of characters. Used for text
let myName = "Adnan";

C) Boolean:
Logical type that can only be true of false. Used for taking decisions
let iAmHuman = true;

D) Undefined:
Value taken by a variable that is not yet defined ('empty value')
let phoneModelName;

E) Null:
Also means 'empty value'

F) Symbol (ES2015):
Value that is unique and cannot be changed [Not useful for now]

G) BigInt (ES2020):
Larger integers than the Number type can hold
*/

/* II. LET'S DO SOME PRACTICAL

let nameOfStudent = "Adnan Bhai";
let rollNoOfStudent = 525;
let smartStudent = true;
let whichDataType = "Datatype is -> ";

// A) String:
console.log(nameOfStudent);
console.log(typeof nameOfStudent);
// B) Number:
console.log(rollNoOfStudent);
console.log(typeof rollNoOfStudent);
// C) Boolean:
console.log(smartStudent);
console.log(typeof smartStudent);
// D) UNDEFINED
let x;
console.log(x);
console.log(typeof x);

// WHAT IS DYNAMIC TYPING?
// Dynamic typing means that we can easily change type of the value that is hold by a variable
// Example below ↓
x = 24;
console.log(x);
console.log(typeof x);
// E) NULL
console.log(null);
console.log(typeof null);
// HERE 'CONSOLE' SHOWING 'OBJECT' IS A BUG↑
 */
// _________________________________________





// _________________________________________
/*
// 4. LET, VAR & CONST
// Mutated:
// To reassign value to a variable.

// I) LET
let nameOfStudent1 = "Hamza Tzortis";
nameOfStudent1 = "Mohammad Hijab"
// II) CONST
const rollNoOfStudent = 525;
// rollNoOfStudent = 524;

// III) VAR
var stateName = "Maharashtra";
stateName = "Kerala";

// IV) USING NO LET, VAR & CONST
computer = "low-end";
console.log(computer);
 */
// _________________________________________




// _________________________________________
/*
// 5. Operators:
const currentYear = 2050;
const ageOfAdnan = currentYear - 2003;
const ageOfAdnanComputer = currentYear - 2021;

console.log(ageOfAdnan, ageOfAdnanComputer);
// I] ARITHMETIC/ MATH OPERATORS:
console.log(ageOfAdnan * 2, ageOfAdnanComputer / 2, 2 ** 4);

// II] CONCATENATE STRINGS:
const myFirstName = "Adnan";
const mySecondName = "Khan";
console.log(myFirstName + " " + mySecondName);

// III] ASSIGNMENT OPERATORS:
let x = 10 + 10; // 20
x += 40; // x = x + 40 = 60
x -= 10; // x = x - 10 = 50
x *= 2; // x = x * 2 = 100
x++; // Increment (Increase by 1)
x--; // Decrement (Decrease by 1)
console.log(x);

// IV] COMPARISON OPERATORS:
console.log(ageOfAdnan > ageOfAdnanComputer);
console.log(ageOfAdnan >= 18);

console.log(2050 - 2003 > 2050 - 2021);
*/
// _________________________________________





// _________________________________________

// 6. OPERATOR PRECEDENCE
// REFERNCE LINK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

/*
const currentYear = 2050;
const ageOfAdnan = currentYear - 2003;
const ageOfAdnanComputer = currentYear - 2021;

// MATH/ARITHMETIC & COMPARISON OPERATOR ASSOCIATIVITY: LEFT TO RIGHT
console.log(2050 - 2003 > 2050 - 2021);
// (-) HAS PRECEDENCE OF 11
// (>) HAS PRECEDENCE OF 9
// THAT'S WHY 1ST MATH/ARITHMETIC AND THEN COMPARISON OPERATOR WILL BE EXECUTED

// ASSIGNMENT OPERATOR ASSOCIATIVITY: RIGHT TO LEFT
let x = y = 100 - 90 + 15;
console.log(x);
// (-), (+) HAS A PRECEDENCE OF 11
// (=) HAS A PRECEDENCE OF 1
// THAT'S WHY 1ST MATH/ARITHMETIC AND THEN ASSIGNMENT OPERATOR WILL BE EXECUTED

// HERE DIVISION HAS HIGHER PRECEDENCE SO 'ageOfAdnanComputer / 2' WILL BE EXECUTED 1ST AND THEN REMAINING ONE
// const averageAge = ageOfAdnan + ageOfAdnanComputer / 2;

// HERE PARENTHESIS/GROUPING HAS HIGHER PRECEDENCE SO 1ST (ageOfAdnan + ageOfAdnanComputer) WILL BE EXECUTED AND THEN '/2'
const averageAge2 = (ageOfAdnan + ageOfAdnanComputer) / 2;
console.log(averageAge);
console.log(averageAge2);
*/

// _________________________________________





// _________________________________________
// 7. STRINGS AND TEMPLATE LITERALS

/*
const myName = "Adnan";
const myProfession = "Student";
const currentYear = 2022;
const myBirthYear = 2003;

const adnan = "I'm " + myName + " a " + (currentYear - myBirthYear) + " years old " + myProfession + "!";
console.log(adnan);

// USE OF TEMPLATE LITERALS
const adnan2 = `I'm ${myName} a ${currentYear - myBirthYear} years old ${myProfession}!`;
console.log(adnan2);

// TEMPLATE LITERALS CAN BE USED INSTEAD OF ("") OR ('')
console.log(`Yes we can use backticks instead of ("") or ('')`);


// HOW TO GO TO NEW LINE
// BEFORE ES6
console.log("My name \n\is Adnan \n\and I'm 18 years old");

// NOW IT CAN BE DONE WITHOUT "\n\"
console.log(`My name
is Adnan
and I'm 18 years old`);
*/

// _________________________________________





// _________________________________________
// 8. IF-ELSE CONTROL STRUCTURE

/*
let age = 1;
if (age >= 18) {
    console.log("You can drive now 🚓!!");
} else {
    let yearsLeft = 18 - age;
    console.log(`You can't drive now! You've to wait ${yearsLeft} years!`);
}


let currentYear = 2003;
let century;
if (currentYear <= 2000) {
    // let century = 20;  ← THIS CODE WILL GIVE ERORR
    century = 20;
} else {
    // let century = 21; ← THIS CODE WILL GIVE ERORR
    century = 21;
}
console.log(century);
*/

// _________________________________________





// _________________________________________
// 9. TYPE CONVERSION AND TYPE COERCION
// - TYPE CONVERSION:
// Type Conversion is when we manually convert from one type to another.
// - TYPE COERCION
// Type Coercion is when JavaScript automatically converts types behind the scenes for us.

/*
// TYPE CONVERSION
let year = '1999';
console.log(Number(year), year);
console.log(Number(year) + 1);

let normalName = "Mai Nahi Bataunga";
console.log(Number(normalName));

console.log(String(23), 23);

// TYPE COERCION
console.log("I'm " + 18 + " years old!");
console.log('50' + '53' - 3);
console.log('250' - '50');

let n = '1' + 1;
n -= 1;
console.log(n);

console.log(2 + 3 + 4 + '5');
console.log('10' - '4' - '3' - 2 + '5');
*/

// _________________________________________





// _________________________________________
// 10. TRUTHY AND FALSY VALUES

// 1. TRUTHY VALUES:
// -> Values that will be converted to true,
// For Example: Any number that is not 0 or any string that is not an empty string will be converted to true.
// 2. FALSY VALUES: 0, '', null, undefined, NaN
// -> These values will be converted to false when we attempt to convert them to a boolean. They aren't exactly false intially but they will become when converted to boolean.

/*
console.log('');
console.log(null);
console.log(undefined);
console.log(0);

const money = 10000;
if (money) {
    console.log("Give Zakat and be a better Muslim!");
} else {
    console.log("You should get a job!");
}

let height = "abc";
if (height) {
    console.log("Your height is defined");
} else {
    console.log("Your height is UNDEFINED");
}
*/

// _________________________________________





// _________________________________________
// 11. EQUALITY OPERATORS:
// '===' --> Strict Equality Operator.
// ⬆ Doesn't performs Type Coercion
//  '==' --> Loose Equlaity Operator.
// ⬆ Performs Type Coercion

/*
let age = 18;

if (age === 18) {
    console.log("You're an adult.");
} else if (age == 18) {
    console.log("You just became an adult.");
}


//  '==' --> Loose Equlaity Operator
// let favouriteNumber = prompt("What's your favourite number?");
// if (favouriteNumber == 7) {
//     console.log(`${favouriteNumber} is an amazing number!`);
// } else if (favouriteNumber == 8) {
//     console.log(`${favouriteNumber} is a also cool number!`);
// } else if (favouriteNumber == 6) {
//     console.log(`${favouriteNumber} is a also cool number!`);
// } else {
//     console.log(`Why not 7, 8 and 6`);
// }


// '===' --> Strict Equality Operator
let favouriteNumber2 = Number(prompt("What's your favourite number?"));
if (favouriteNumber2 === 7) {
    console.log(`${favouriteNumber2} is an amazing number!`);
} else if (favouriteNumber2 === 8) {
    console.log(`${favouriteNumber2} is a also cool number!`);
} else if (favouriteNumber2 === 6) {
    console.log(`${favouriteNumber2} is a also cool number!`);
} else if (favouriteNumber2 !== 7) {
    console.log(`7 is also a cool number why ignoring that!!`)
}
else {
    console.log(`Why not 7, 8 and 6`);
}
*/

// _________________________________________





// _________________________________________
// 12. BOOLEAN LOGIC
// - Boolean Logic is a branch of Computer Science which uses true of false values to solve complex logical problems.
// - In order to that it uses several logical operators to combine true and false values.
// - So much like we use arithmetic operators, to combine numeric values.

/*
1. && AND Operator : Both value must be true
2. || OR Operator : One value must be true
3. ! NOT Operator : Inverts the value
*/

// _________________________________________


// _________________________________________
// 13. LOGICAL OPERATORS
/*
const hasDrivingLicense = true;
const hasGoodVision = true;


// if (hasDrivingLicense && hasGoodVision) {
//     console.log(`You should drive`);
// } else {
//     console.log(`Someone else should drive!`);
// }

const isTired = false;

if (hasDrivingLicense && hasGoodVision && !isTired) {
    console.log(`You should drive`);
} else {
    console.log(`Someone else should drive!`);
}
*/

// _________________________________________





// _________________________________________
// 14. SWITCH STATEMENT

/*
const day = `Monday`;

switch (day) {
    case 'Monday': // day === 'Monday' Strict Equality operator is used here!!
        console.log(`Watch JavaScript course!`);
        console.log(`Practice it!`);
        console.log(`Do preparation for MCA-CET!`);
        break;
    case 'Tuesday':
        console.log(`Learn Deen`);
        console.log(`Watch JavaScript course!`);
        console.log(`Practice it!`);
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log(`Watch JavaScript course!`);
        console.log(`Practice it!`);
        console.log(`Do preparation for MCA-CET!`);
        console.log(`Watch Tech Videos!`);
        break;
    case 'Friday':
        console.log(`Read 1 Para of Qur'an !`);
        console.log(`Clean yourself, cut nails, apply itr, dress nice and clean clothes, give zakat(charity) and read 'Surah Kaif'!`);
        break;
    case 'Saturday':
    case 'Sunday':
        console.log(`Learn as much as you can!`);
        break;
    default:
        console.log(`Invalid day!`);
}

// THE ABOVE CODE IN IF-ELSE FORMAT OR SYNTAX
if (day === 'Monday') {
    console.log(`Watch JavaScript course!`);
    console.log(`Practice it!`);
    console.log(`Do preparation for MCA-CET!`);
} else if (day === 'Tuesday') {
    console.log(`Learn Deen`);
    console.log(`Watch JavaScript course!`);
    console.log(`Practice it!`);
} else if ((day === 'Wednesday') || (day === 'Thursday')) {
    console.log(`Watch JavaScript course!`);
    console.log(`Practice it!`);
    console.log(`Do preparation for MCA-CET!`);
    console.log(`Watch Tech Videos!`);
} else if (day === 'Friday') {
    console.log(`Read 1 Para of Qur'an !`);
    console.log(`Clean yourself, cut nails, apply itr, dress nice and clean clothes, give zakat(charity) and read 'Surah Kaif'!`);
} else if ((day === 'Saturday') || (day === 'Sunday')) {
    console.log(`Learn as much as you can!`);
} else {
    console.log(`Invalid day!`);
}
*/

// _________________________________________





// _________________________________________
// 15. EXPRESSIONS AND STATEMENTS
// Expression: Expression is a piece of code that produces a value.
// Statement: Statement is a bigger piece of code that is executed or performs action and which does not produce value on itself

// We write our whole program as sequence of actions. And these actions are statements
// Example:

/*
if (23 > 10) {
    // ⬇ Statement
    const str = "This is an Expression!!"; // ⬅ Here String is Expression

}
*/

// In simple words
// - Expression produces value
// - Statements are like full sentences that translate our actions.
// Actions that we want the program to perform

// Declaration: Declaration determines the name and data type of a variable or other element.




// Statements - an instruction or action.Like const, let, var, if, when, else, etc... are statements because you are giving instruction to perform an action, like what actions are going to be executed from the value / data that is being questioned or provided.Examples...conststatement -> able to create a variable to store information, or if statement -> able to create an action of what information is being provided or questioned.

// FYI When you give const, let, or var an identifier(variable name) then it becomes a declaration.


// _________________________________________





// _________________________________________
// 16. CONDITIONAL (TERNARY) OPERATOR
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is
// _________________________________________
