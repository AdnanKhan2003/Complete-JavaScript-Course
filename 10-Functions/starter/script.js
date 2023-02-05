'use strict';

//_________________________________________________________________________
// DEFAULT PARAMETERS
/* 
const bookings = [];

// The DEFAULT value of PARAMETERS can be EXPRESSIONS and the other PARAMETERS BEFORE the CURRENT one
const flight = function (
  flightName = 2,
  noOfPassengers = 2 + 1,
  ticketPrice = 199 * noOfPassengers
) {
  // When the ARGUMENT for the PARAMETER is not defined it is SET to UNDEFINDED

  // DEFAULT PARAMETERS before ES6
  //   noOfPassengers = noOfPassengers || 2;
  //   ticketPrice = ticketPrice || 200;

  const booking = {
    flightName,
    noOfPassengers,
    ticketPrice,
  };
  console.log(booking);
  bookings.push(booking);
};
flight('AD39');
flight();
console.log(bookings);

// SKIP ARGUMENT
flight('AD32', undefined, 300); 
*/
//_________________________________________________________________________

//_________________________________________________________________________
// VALUES VS. REFERENCE
/* 
const flight = 'DA23';
const adnan = {
  name: 'Adnan',
  passport: 2324839432,
};

const checkPassport = function (flightNum, passenger) {
  flightNum = 'DA33';
  passenger.name = 'Mr.'.concat(passenger.name);

  if (passenger.passport === 2324839432) {
    console.log('Check IN');
  } else {
    console.log('Check OUT');
  }
};
checkPassport(flight, adnan);

// Here, the PRIMITIVE DIDN'T change
// But the REFERENCE CHANGES
console.log(flight);
console.log(adnan); */

// Because the parameters have the copy of the variables that are passed in as an argument
// So for the primitives the value of the primitive var is copied to the parameter
// the reference also copy the value of the object so changing the value of the primitive doesn't effect the original variable
// But the object has reference (objects has reference to the objects in the heap) as its value so it affects the original object

// Changing the copy of the reference affects the original as it has the reference which points the same object as the original reference
/* const passportGenerator = function (passenger) {
  return (passenger.passport = Math.trunc(Math.random() * 1000000000));
};
passportGenerator(adnan);
checkPassport(flight, adnan);

// COPYING the VALUE
const flightNum = flight;
const adnanNew = adnan;
console.log(flightNum);
console.log(adnanNew); */

// JAVASCRIPT DOESN'T have "PASS BY REFERENCE"
// const adnanNew2 = adnan;
// This is just 'PASS BY VALUE' because the reference is basically VALUE of the primitive
// So its just passing the value and not the reference

//_________________________________________________________________________

//_________________________________________________________________________
// FIRST-CLASS FUNCTIONS VS. HIGHER-ORDER FUNCTION

/*
1. FIRST-CLASS functions
- JavaScript treates function as first-class citizens 
- Funtions are just SIMPLE VALUES
- Functions are just another type of objects

EXAMPLES:
A. Function expression stored in variable
const a = (a, b) => a + b;

B. Object Methods stored in properties
const adnan = {
  birthYear: 2003,

  calcAge(birthYear){
    return 2023 - this.birthYear;
  }
};

Functions are just another type of OBJECTS. So it also has methods
C. Function Methods
counter.inc.bind(someOtherObject);


2. HIGHER-ORDER functions
- Functions that take other function as an argument OR
  Functions that returns another function
- High-order function is possible because of first-class functions

EXAMPLES:
A. Functions that take other function as an argument 

const greet = () => console.log(`Assalamu alaikum brother`);
btn.addEvnetListener('click', greet);
// here 'ADDEVENTLISTENER" is HIGHER-ORDER function &
"GREET" a CALL-BACK function

B. Functions that returns another function 

// here "count" is HIGHER-ORDER function
function count(){
  let counter = 0;

  // the BELOW function is a returned function
  return function(){
    counter++;
  }
}


FIRST-CLASS functions VS. HIGHER-ORDER functions

1. First-class functions is a feature that some programming languages have and some don't. All it means that the functions are just simple values
2. There are no First-class functions in practice, it is just a concept

1. But there are Higher-order functions in practice which is possible because the language supports first-class functions
2. Higher-order functions are those functions that takes function as an argument or return function from functions
*/
//_________________________________________________________________________
//_________________________________________________________________________
/*
CALLBACK Functions makes it easy to split up code into more resusable and interconnected parts
All the functionalities are nicely split up into their own functions
Callback functions allow us to create abstraction
*/
// Abstract means the details of some code implementations are hidden because one don't care about all detail
// It allows us to think problem at higher more abstract level

/* 
// We created a level of abstraction
// Functions accepting CALLBACK functions
const oneWord = function (str) {
  return str.replace(' ', '');
};
const firstUpperWord = function (str) {
  const [firstWord, ...otherWords] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWords].join(' ');
};

const transformer = function (str, func) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${func(str)}`);

  console.log(`Transformed By: ${func.name}`);
};
// The TRANSFORMER function here is concerned with tranforming the input string rather than how the string is transformed
// So basically its delegating the transformation to the lower level functions (oneWord, firstUpperWord)

// the function operates at higher level of abstraction leaving low level of details to the low level functions

transformer('JavaScript is a Programming Language', firstUpperWord);
transformer('JavaScript is a Programming Language', oneWord);

const bestGreeting = function () {
  console.log(`Assalamu alaikum (Peace Be Upon You) Brother`);
};
['Adnan', 'Arman', 'Ayan', 'Aman'].forEach(bestGreeting);
//_________________________________________________________________________

//_________________________________________________________________________
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetName = greet('Assalamu alaikum');
greetName('Adnan');
greet('Assalamu alaikum')('Afnan');

const greet2 = greeting => name => console.log(`${greeting} ${name}`);
const greetName2 = greet2('Assalamu alaikum');
greetName2('Adnan2');
greet2('Assalamu alaikum')('Afnan2');
*/

//_________________________________________________________________________

//_________________________________________________________________________
// CALL() & APPLY() METHOD
// - To MANUALLY set 'this' keyword of ANY function call

/* 
const airIndia = {
  airline: 'Popular',
  iataCode: 'PP',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flightName: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};
airIndia.book(23, 'Adnan');

const airUk = {
  airline: 'Famous',
  iataCode: 'FF',
  bookings: [],
};

// PROBLEM: "Book" is now a REGULAR FUNCTION & NOT METHOD
const book = airIndia.book;
// 'book' is set to a function expression
// but 'book' is no longer a method it is now a REGULAR FUNCTION
// And the 'this' keyword of REGULAR FUNCTION is set to UNDEFINED
// book(33, 'Issac');

// SOLUTION:
// to SET 'this' keyword manually in any function
book.call(airUk, 33, 'Issac');

const info = [33, 'Ishaq'];

// SAME as .call() but it ONLY takes "ARRAYS" as the 2nd argument
book.apply(airUk, info);
book.apply(airUk, [44, 'Newton']);

// .call() is better & we can use SPREAD in it
book.call(airUk, ...info);
 */

//_________________________________________________________________________

//_________________________________________________________________________
// BIND() METHOD, PARTIAL APPLICATION

/* 
const airline1 = {
  airline: 'Potato',
  iataCode: 'FE',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} book a flight ${this.iataCode}${flightNum} at ${this.airline}`
    );
    this.bookings.push({
      passengerName,
      flightName: `${this.iataCode}${flightNum}`,
    });
  },
};
airline1.book(23, 'Adnan');

const book = airline1.book;

const airline2 = {
  airline: 'Tomato',
  iataCode: 'EF',
  bookings: [],
};

const booking2Per = book.bind(airline2);
booking2Per(23, 'Aman');

// Here we're specifying parts of arguments beforehand is a common pattern this is called as "PARTIAL APPLICATION"
// We can preset parameters
const booking3 = book.bind(airline1, 23);
booking3('Abuzar');
booking3('Hamza');

// 'this' keyword points to the element that is attached on callback function or handler function
// 'this' keyword is set 'DYNAMICALLY'
// It is as if we returned a new specific function

airline2.planes = 200;
airline2.book = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// >>>>>> PROBLEM <<<<<<<
// Here 'this' points to the element to which event handler or callback function is attached
// document.querySelector('.buy').addEventListener('click', airline2.book);

// >>>>>> SOLUTION <<<<<<<
document
  .querySelector('.buy')
  .addEventListener('click', airline2.book.bind(airline2));

// PARTIAL APPLICATION
const calcTax = (tax, value) => value + value * tax;
console.log(calcTax(23, 0.3));

// When we need to preset some placeholder
const calcVAT = calcTax.bind(null, 0.23);
console.log(calcVAT(2334));
console.log(calcVAT(2000));

// Do the above problem using FUNCTION RETURNING FUNCTION
// const calcTax2 = tax => value => value + value * tax;
const calcTax2 = function (tax) {
  return function (value) {
    return value + value * tax;
  };
};

const calcVAT2 = calcTax2(0.23);
console.log(calcVAT2(2334));
console.log(calcVAT2(2000));
*/

//_________________________________________________________________________

//_________________________________________________________________________
// IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// - If one wants to EXECUTE functions only "1 TIME" then the IIFE
// (Immediately Invoked Function Expression) can be used

/////
// DATA ENCAPSULATION
// 'Data encapsulated' & 'Data privacy' are extremely important topics in programming
// It is important to hide variables and for that scopes are a good tool

// IIFE
// This pattern is not used anymore because if one wants to create a new scope for data privacy. All need do that by simply creating BLOCKS

// ERROR
// function (){
//   console.log(`This will not run ever again`);
// }

/* 
// SYNTAX
// 1. Put the function into PARENTHESIS then JavaScript will the treat the function as EXPRESSION
// 2. Immediately CALL or INVOKE the function
// A. FUNCTION EXPRESSION
(function () {
  console.log(`This will not run ever again`);
})();

// B. ARROW FUNCTIONS
(() => console.log(`This will ALSO never run again`))();

// DATA ENCAPSULATION
// Data inside the scope is PRIVATE
// It is also said data is ENCAPSULATED in the function scope
// 'Data encapsulated' & 'Data privacy' are extremely important topics in programming
// It is important to hide variables and for that scopes are a good tool
{
  const isPrivate = 'This is private';
  var isntPrivate = "This isn't private";
}

// CONST & LET creates "BLOCK" SCOPE
console.log(isPrivate);
// VAR creates "FUNCTION" SCOPE
console.log(isntPrivate);

// REMEMBER:
// "A Scope has access to all the variables of the outer scope"
// This is how 'Scope Chain' works
// But it doesn't work the either way. "The outer scope doesn't have access of the variables of the inner scopes"
 */

//_________________________________________________________________________

//_________________________________________________________________________
// CLOSURES
// Closures are closed-over variable environment of the execution context in which functions was created even after the execution context is gone
// CLOSURES: Variable Environment attached to the function exactly same as it was when the function was created
// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).

// ANALOGY TO UNDERSTAND CLOSURES:
// A closure is like a backpack that function carries around wherever it goes. This backpack has variables that were present in the environment when the function was created
// Closures has 'priority' over 'scope chain'

/* 
const goneFunction = function () {
  let noOfPassengers = 0;
  return function () {
    noOfPassengers++;
    console.log(`${noOfPassengers} passengers`);
  };
};

const book = goneFunction();
book();
book();

console.dir(book);

const parentFunc = function () {
  const parentVar = 3;
  const childFunc = function () {
    const childVar = 4;
    console.log(`${parentVar} + ${childVar} = ${parentVar + childVar}`);
  };
  return childFunc;
};

const func = parentFunc();
console.log(func);
func();
console.dir(func);

var a = 'Hello world...';

function first() {
  var b = 'I am Rahul.';
  second();

  function second() {
    var c = ' Subscribe to my RAHULISM newsletter.';
    console.log(a + b + c);
  }

  function third() {
    var d = ' ⚡sdf';
    console.log(a + b + c + d);
    console.log(c);
  }
  third();
}
first();
*/

//_________________________________________________________________________

//_________________________________________________________________________
// CLOSURES: (EXAMPLES OF OTHER THAN FUNCTION RETURNING FUNCTIONS)
/* 

// A. CLOSURES: REASSIGNING VARIABLES
let globalVar;

const parentScope = function () {
  const parentVar = 3;

  globalVar = function () {
    const childVar = 4;
    globalVar = parentVar + childVar;
    console.log(globalVar);
  };
};
// Here the parent function has finished executing
parentScope();
// But the below variable still have access to the variable environment of the execution context in which it was created even after it is popped of call stack
globalVar();

// B. CLOSURES: setTimeOut

const startTrip = function (n, wait) {
  const noOfPassengers = n;

  // So here the 'arrow function' is a callback function
  // Even after the 'startTrip' function is executed it still has access to the variable environment of the execution context in which it was created even after the execution context is gone
  setTimeout(() => {
    const passengerGrp = noOfPassengers / 3;
    console.log(
      `This trip has ${passengerGrp} group of passengers with ${n} passengers`
    );
  }, wait * 1000);

  console.log(
    `We're starting the trip with ${noOfPassengers} passengers in ${wait} seconds`
  );
};
startTrip(1100, 3);
 */

//_________________________________________________________________________
