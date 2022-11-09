'use strict';

// _________________________________________
// 1. STRICT MODE


// Strict mode is a special mode that we can activate in JavaScript, which make it easier for us to write a secure JavaScript code
// Secure code make it easier for us to avoid accidental errors

// 1. Strict mode forbids us to do certain things.

// 2. It creates visible errors in the developer console where in the other situation JavaScript will fail silently



// The purpose is to show the following code without using 'strict mode'
// HERE I'VE DONE MISTAKE KNOWINGLY IN THE 'LINE 7' THE 'S' IS MISSING AND IT WRITTEN "hasDriverLicense" instead of "hasDriversLicense"
// let hasDriversLicense = false;
// const hasPassTest = true;

// if (hasPassTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log(`I can Drive!!`);

/*
let hasDriversLicense = false;
const hasPassTest = true;

if (hasPassTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can Drive!!`);
*/

// THE BELOW ARE THE RESERVE WORDS THAT MAY BE IMPLEMENT IN THE UPCOMING  FEARURE OF JAVASCRIPT OR IT ALREADY EXISTS
// const private = 234;
// const interface = 234;
// _________________________________________





// _________________________________________
// 2. FUNCTIONS

// Function cannot only reuse a piece of code but it can also receive data and return data back.
// With functions we can create reusable chunks of code instead of having to manually write the same code over and over again
// PRINCIPLE USED IN PROGRAMMING
// D - DON'T
// R - REPEAT
// Y - YOURSELF
// WE SHOULD KEEP OUR CODE DRY WHICH MEANS WE SHOULD NOT REPEAR OURSELF AND SO FUNCTIONS ARE PERFECT FOR IMPLEMENTING DRY CODE BECAUSE THEY ARE REUSABLE CODE BLOCKS THAT TOGETHER MAKE UP ALL APPLICATIONS


// FUNCTION DESCLARATION
/*
function logger() {
    console.log(`My Name is Adnan`);
}

// CALLING / INVOKING / RUNNING FUNCTION
logger();
logger();
logger();
logger();


// PARAMETERS RESPRESENT INPUT DATA OF THIS FUNCTION. THE TWO VARIABLES IN THE BRACKET OF THE FUNCTION ARE 'PARAMETERS'
// THE PAREMETERS ARE KIND OF PLACEHOLDER IN THE FUNCTION
function fruitProcessor(appleJuice, orangeJuice) {
    console.log(appleJuice, orangeJuice);
    const juice = `Juice with ${appleJuice} apple and ${orangeJuice} orange`;
    return juice;
}

// THE TWO VALUE WRITTEN INSIDE THE BRACKET WHEN CALLING FUNCTION ARE 'ARGUMENTS'
// ARGUMENT IS THE ACTUAL VALUE THAT WE USE TO FILL IN THAT PLACEHOLDER THAT IS THE PARAMETER
const appleOrangeJuice = fruitProcessor(5, 0);
console.log(appleOrangeJuice);
const orangeAppleJuice = fruitProcessor(2, 6);
console.log(orangeAppleJuice);

*/

// _________________________________________




// _________________________________________
// 3. FUNCTION DECLARATIONS VS FUNCTION EXPRESSION

/*
// GENERIC FUNCTIONS
// FUNCTION DECLARATION
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const myAge1 = calcAge1(2003);
console.log(myAge1);

// In 'Function Declaration' we can access the function even if the function is written below the call or invoking of function

// FUNCTION EXPRESSION
// ANONYMOUS FUNCTION
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const myAge2 = calcAge2(2003);
console.log(myAge2);
*/

// _________________________________________




// _________________________________________
// 4. ARROW FUNCTIONS

// 1 Line Arrow Function
/*
const calcAge1 = birthYear => 2022 - birthYear;
const myAge1 = calcAge1(2003);
console.log(myAge1);


// Multi-line Arrow Function
const calcRetirementYearsLeft = (birthYear, yourName) => {
    const yourAge = 2022 - birthYear;
    const retirement = 65 - yourAge;
    return `${yourName} has left ${retirement} years left for retirement!`;
}

const myRetirement = calcRetirementYearsLeft(2003, "Adnan");
console.log(myRetirement);
*/

// _________________________________________





// _________________________________________
// 5. FUNCTIONS CALLING OTHER FUNCTIONS

/*
function fruitCutter(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);

    const str = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`
    return str;
}

console.log(fruitProcessor(2, 4));
*/

// _________________________________________





// _________________________________________
/*
6. REVIEWING FUNCTIONS
'Parameters': Placeholders to receive input values. Like local variables of a function
'Function body':Block of code that we wanna reuse. Processes the function's input data
'return' statement immediately exits or immediately returns the function
'return' statement to output a value from the function and terminate execution
Replacing the parameters - Actual values of function parameters
Variable to save returned value
*/

/*
3 Different ways of writing functions, but they all work in a similar way:
receive input data, transform data and output data.

1. Function Declaration
Function that can be used before it's declared

2. Function Expression
Esseentially a function value stored in a variable

3. Arrow Function
Great for a quick one-line functions. Has no 'this' keyword

*/


// _________________________________________




// _________________________________________
/*
7. ARRAYS
Array is 'data structure'. It is like a big container into which we can throw variables and then reference them later.The two most important 'data structures' at least in JavaScript are Arrays & Objects.

Programming is most of the time all about data.
- We get data from somewhere we store and process data and then we give some data back
And that data it has to go/store somewhere. And for that we use 'Data Structures' just like Arrays.
*/

/*
// Syntax
const friends = ["Aquib", "Sahil", "Altaf"];
console.log(friends);

// Another way to write "Arrays"
const years = new Array(2018, 2019, 2020, 2021);
// 'new' => Keyword
// Array => Function

// Changing some elements of array
friends[1] = "Amir";
friends[2] = "Zahnul";
console.log(friends);

console.log(friends.length);
console.log(friends[friends.length - 1]);

const myIntro = ["Adnan", "Khan", 2022 - 2003, "CS Student", friends];
console.log(myIntro);


// WE CAN PLACE FUNCTION CALLS INTO AN 'ARRAY'
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const years2 = [2002, 1992, 2009, 1999, 2001];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

const ageAll = [calcAge(years2[0]), calcAge(years2[1]), calcAge(years2[years2.length - 1])];
console.log(ageAll);
*/

// NOTE: ONLY 'PRIMITIVE VALUES' ARE IMMUTABLE (CAN REASSIGNED) BUT AN ARRAY IS NOT A 'PRIMITIVE VALUE'!

// _________________________________________




// _________________________________________
/*
8. BASIC ARRAY METHODS
JavaScript has some built in functions that we can basically apply directly on arrays and these are called "Methods"
We can think of 'methods' as 'array operations'
*/

/*
const dae = [`Mohammad Hijab`, `Hamza Tzortis`, `Subbur Ahmad`, `Hamza`, `Hashim`, `Zeeshan`];

// 1. ADD ELEMENTS
// dae.push(`Mansur`); // To add last element
// dae.unshift(`Shamsi`); // To add first element

// WHAT PUSH() RETURNS?
const daeAdded = dae.push(`Mansur`);
// when saved to variable it "returns the lenght of the string"
console.log(daeAdded);
// WHAT UNSHIFT() RETURNS?
const daeAdded2 = dae.unshift(`Shamsi`);
const daeAdded3 = dae.unshift(`Sam Stallone`);
const daeAdded4 = dae.unshift(`Amir Haq`);
const daeAdded5 = dae.unshift(`Mufti Yasir`);
const daeAdded6 = dae.unshift(`Zaid Patel`);
const daeAdded7 = dae.unshift(`XYZ`);
console.log(daeAdded2);
console.log(daeAdded3);
console.log(daeAdded4);
console.log(daeAdded5);
console.log(daeAdded6);
console.log(daeAdded7);
console.log(dae);


// 2. REMOVE ELEMENTS
// dae.pop(); // To remove last element
// dae.shift(); // To remove first element

// WHAT PUSH() RETURNS?
const daeRemoved = dae.pop();
// when saved to variable it "returns the element that are removed from the string"
console.log(daeRemoved);
// WHAT UNSHIFT() RETURNS?
const daeRemoved2 = dae.shift();
console.log(daeRemoved2);
console.log(dae);


// 3. indexOf()
console.log(dae.indexOf(`Hamza Tzortis`));
console.log(dae.indexOf(`ABC`)); // returns -1 when the element is absent


// 4. includes()
dae.push(23);
console.log(dae.includes(`Zaid Patel`));
console.log(dae.includes(`Pro`));
console.log(dae.includes(`23`)); // Will not work
console.log(dae.includes(23)); // Will work
// includes() => 'Strict Equality Operator'

if (dae.includes(`Zaid Patel`)) {
    console.log(`Amazing! We have some knowledgeable daes!`);
}
*/

// _________________________________________




// _________________________________________
// 9. OBJECTS

/*
const mySelff = [
    `Adnan`,
    `Khan`,
    2022 - 2003,
    `CS student`,
    [`Aquib`, `Sahil`, `Amir`]
];

// 'OBJECT LITERAL SYNTAX'
const mySelf = {
    firstName: `Adnan`,
    lastName: `Khan`,
    age: 2022 - 2003,
    profession: `CS student`,
    freinds: [`Aquib`, `Sahil`, `Amir`]
};
// 'firstName' => Property or Key
console.log(mySelf);
*/

// _________________________________________





// _________________________________________
// 10. DOT VS BRACKET NOTATION

/*
const mySelf = {
    firstName: `Adnan`,
    lastName: `Khan`,
    age: 2022 - 2003,
    profession: `CS student`,
    freinds: [`Aquib`, `Sahil`, `Amir`]
};
console.log(mySelf.lastName);
console.log(mySelf['lastName']);

let same = `Name`;
console.log(mySelf[`first` + same]);
console.log(mySelf[`last` + same]);

const interestedIn = prompt(`Choose between firstName, lastName, age, profession and freinds?`);

if (mySelf[interestedIn]) {
    console.log(mySelf[interestedIn])
} else {
    console.log(`Wrong property! Please select between firstName, lastName, age, profession and freinds?`)
}

mySelf.location = `World`;
mySelf['twitter'] = `abc`;
// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

const jonas = {
    firstName: `Jonas`,
    friends: [`Michael`, `Peter`, `Steven`]
};
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
// console.log(jonas['friends'[0]]);

console.log(mySelf);
*/

// _________________________________________





// _________________________________________
/*
11. OBJECT METHODS
Any function that is attached to an object is called a 'method'

'this' variable is basically equal to the object on which the method is called!
In other words, it is equal to the object calling the method
For eg: console.log(jonas.calcAge(1991));
*/

/*
const mySelf = {
    firstName: `Adnan`,
    lastName: `Khan`,
    birthYear: 2003,
    profession: `CS student`,
    freinds: [`Aquib`, `Sahil`, `Amir`],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    //     // 'this' is equal to the object calling method!
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        // this[`age`] = 2022 - this.birthYear;
        return this.age;
    }
};

// Dot Notation
console.log(mySelf.calcAge());
// Bracket Notation
// console.log(mySelf[`calcAge`](2003));


console.log(mySelf.age); // Dot Notation
// console.log(mySelf[`age`]); // Bracket Notation
*/


// Challenge
// Use getSummary() method
// "Jonas is a 56-year old teacher, and he has a/no driver's license"

/*
const mySelf = {
    firstName: `Adnan`,
    lastName: `Khan`,
    birthYear: 2003,
    profession: `CS student`,
    freinds: [`Aquib`, `Sahil`, `Amir`],
    hasDriverLicense: false,

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        console.log(`${this.firstName} is a ${this.calcAge()}-year old ${this.profession}, and he has ${this.hasDriverLicense ? `a` : `no`} driver's license`);
    }
};

// console.log(mySelf.calcAge());
console.log(mySelf.getSummary());
*/

//  Arrays are also objects, they are special kind of objects and
// so they have functions or in other words they have methods that we can use to manipulate them

// _________________________________________




// _________________________________________
/*
12. LOOPS (CONTROL STRUCTURE LIKE IF-ELSE)

The Loops keep running until the condition become false
1. Declare and initialize a variable
2. Put the condition (to tell the computer that how many times you've to do the repeat the following block of code)
3. If condition is true it executes the code written inside the block
4. When one iteration completes it checks the 3rd thing in the bracket (either increment or decrement)
5. And continues to print till the condition is true and stop executing when condition become false.
*/

/*
// for loop
for (let i = 1; i <= 10; i++) {
    console.log(`Currently watching ${i} video of JavaScript Course`);
}
*/

// _________________________________________




// _________________________________________
// 13. LOOP: BREAK & CONTINUE

/*
// FILLING AN EMPTY ARRAY 1
const adnanArray = [
    `Adnan`,
    `Khan`,
    2022 - 2003,
    `CS Student`,
    [`Aquib`, `Amir`, `Sahil`]
];
const types = [];
const types2 = [];
const types3 = [];

for (let i = 0; i < adnanArray.length; i++) {
    // Reading from Array
    console.log(adnanArray[i]);

    // Filling other Array
    // types[i] = typeof adnanArray[i];
    types.push(typeof adnanArray[i]);
}
console.log(types);

// FILLING AN EMPTY ARRAY 1
const birthYear = [2012, 1928, 1989, 1991, 2001];
const age = [];

for (let i = 0; i < birthYear.length; i++) {
    // age.push(2022 - birthYear[i]);
    age[i] = 2022 - birthYear[i];
}
console.log(age);

// USE OF 'continue'
// 'continue' is used to exit current iteration of the loop
for (let i = 0; i < adnanArray.length; i++) {
    if (typeof adnanArray[i] !== 'string') {
        continue;
    }

    types2.push(typeof adnanArray[i]);
}
console.log(types2);

// USE OF 'break'
// 'break' is used to terminate the loop
for (let i = 0; i < adnanArray.length; i++) {
    if (typeof adnanArray[i] !== 'string') {
        break;
    }

    types3[i] = typeof adnanArray[i];
}
console.log(types3);
*/

// _________________________________________




// _________________________________________
// 14. LOOPING BACKWARDS AND LOOPS IN LOOPS

/*
const adnanArray = [
    `Adnan`,
    `Khan`,
    2022 - 2003,
    `CS Student`,
    [`Aquib`, `Amir`, `Sahil`]
];

// LOOPING BACKWARDS
for (let i = adnanArray.length; i >= 0; i--) {
    console.log(adnanArray[i]);
}

// LOOPS IN LOOPS
for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`------ Starting Exercise ${exercise} ------`);

    for (let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Weight Lifting repitition ${rep}`);
    }
}
*/

// _________________________________________





// _________________________________________
// 15. While Loop

/*
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 6) {
        console.log(`Loop last line! You rolled a ${dice}`);
    }

}
*/

// _________________________________________