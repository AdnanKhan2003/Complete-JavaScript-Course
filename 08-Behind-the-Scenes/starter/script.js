'use strict';

/*
___________________________________________________________________________
>>>>>>>>>>>>>>> 1. BRIEF OVERVIEW OF JAVASCRIPT: <<<<<<<<<<<<<<<<<<<


1] What is JavaScript?
--> JavaScript is high-level, object-oriented, multi-paradigm programming language.

JavaScript is...
i. High-level
ii. Garbage-collected  
iii. Interpreted or just-in-time compiled
iv. Multi-paradigm
v. Prototype-based object oriented
vi. First-class Functions 
vii. Dynamic 
viii. Event Loop Concurrency Model / Non blocking event loop
ix. Single-threaded

--  --
Every program in your computer needs some hardware resources such memory and CPU to do its work

-- `] LOW $ HIGH LEVEL PROGRAMMING LANGUAGE --

A. Low-level 
- Developer has to manually manage resources
- Program is fast and optimized

B. High-level
- Everything happens automatically. Developer does not have to worry
- Program is not fast and optimized as low level languages

-- ABSTRACTIONS --
- An abstraction is a way of hiding the implementation details and showing only the functionality to the users.
- In other words, it ignores the irrelevant details and shows only the required one.


-- 2] GARBAGE COLLECTION --
- It is an 'algorithm' inside a 'JavaScript Engine' which automatically removes old, unused objects from the computer memory inorder to not clog it up with the unnecessary stuff
- One of the powerful tools that take 'memory management' away from developers is "garbage collection"

Ex: JavaScript has a 'cleaning guy' which time-to-time cleans memory so that we don't have to do it manually in our code

Processors only understands 'binary language' (1s & 0s) which is not practical to write. So we write code in human-readable code in using programming languages

-- 3] INTERPRETED OR JUST-IN-TIME COMPILED -- 
- It is an abstraction over machine code. 
- 'Human-readable Code' needs to be translated to 'machine code'.
- That step can be either "compiling" or "interpreting"

-- 4] MULTI-PARADIGM -- 
- An approach or mindset of structuring code, which will direct your coding style and techniques
------ The 3 Popular paradigms are as follows ------
1. Procedural Programming
-> Organising the code in a very linear way with some functions in between.

2. Object-Oriented Programming (OOP)
-> It is a prototype-based object-oriented approach

3. Functional Programming (FP)
-----  ------
_____________________________________________________________________
REMEMBER THIS!!!!!!!!!!
>>> 1] WE CAN 'CLASSIFY' PARADIGMS AS "IMPERATIVE" & "DECLARATIVE" <<<
>>> 2] "EVERYTHING" IN JAVASCRIPT IS AN "OBJECT" EXCEPT FOR 'PRIMITIVE VALUES' SUCH AS (NUMBERS, STRINGS, BOOLEANS, ETC). 'ARRAY' IS ALSO AN 'OBJECT' <<<
--------------------------------------------------------------------

-- 5] PROTOTYPE-BASED OBJECT-ORIENTED --
-- PROTOTYPAL INHERITANCE --
___________________________________________________________________________
|  PROTOTYPE/ Array Blueprint                                             |
|                            ARRAY                                        |
|                                                                         |
|                      Array.prototype.push                               |
|                      Array.prototype.indexOf                            |
|_________________________________________________________________________|

- We create arrays from an array blueprint, which is like a template and called 'prototype'
- This 'prototype' contains all 'array methods' and the arrays that we create in our code then inherit the method from blueprint so that we can use them in the arrays

-- 6] FIRST-CLASS FUNCTIONS --
In a language with first-class functions, functions are simply treated as variables. We can pass them into other funcitons, and return them function functions.
EXAMPLE:
FIRST-CLASS FUNCTIONS:
PASSING A FUNCTION INTO ANOTHER FUNCTION AS AN ARGUMENT: 

-- 7] DYNAMIC LANGUAGE --
- JavaScript is a dynamic language.
- Dynamic means "dynamically typed"
- In dynamic language we don't need to define the type of the variable at the time of creating it
- Data Type of the variable became known when the JavaScript engine executes our code
- The type of variable can be changes as we reassign it

-- STRONGLY-TYPED LANGUAGE --
- Strongly-typed language means where we have to define the datatype of the variable when creating variables

>>> 1] JavaScript doesn't define datatypes when creating variable <<<
>>> 2] It became known when the JavaScript engine executes our code <<<
>>> 3] The type of variable can be changes as we reassign it <<<

-- 8] EVENT LOOP CONCURRENCY MODEL  / NON-BLOCKING EVENT LOOP

-- Concurrency Model
- How the JavaScript engine handles multiple tasks happening at the same time

WHY DO WE NEED THAT?

-- 9] SINGLE-THREADED --
- JavaScript runs in one single-thread, so it can only do 1 thing at a time. Therefore we need a way of handling multiple things happening at the same time

SO WHAT ABOUT A LONG-RUNNING TASK?
Example: Fetching data from the remote server

- Sounds like it would block the single thread. However, we want non-blocking behaviour!

HOW DO WE ACHIEVE THAT?

- By using an event loop: takes long running tasks, executes them in the background, and puts them back in the main thread once they are finished

NON-BLOCKING BEHAVIOUR


MEANINGS
-- Single thread: It can do 1 thing at a time
-- Thread: In computing, a thread is like a set of instructions that is executed in the computer's CPU
Basically thread is where our code is actually executed in the computer's processor
___________________________________________________________________________


___________________________________________________________________________
>>>>>>>>>>>>>>>>>> 2. JAVASCRIPT ENGINE AND RUNTIME <<<<<<<<<<<<<<<<<<<<<

1] JavaScript Engine:
--> A program that executes JavaScript code

- All browsers have their own JavaScript Engine but most well-known engine is Google's V8 -> Chrome, nodeJs

- NodeJs (JavaScript runtime):
    To build server-side applications with JavaScripy outside of any browser

Any JavaScript engine contains a
1. Call stack 
2. Heap

- Call stack is where our code is exeuted using execution context
- Heap is unstructured memory pool whicch stores all the objects our application needs


2] COMPILATION VS. INTERPRETATION

1. Compilation: 
-> Entire code is converted into machine code at once, and written into a binary file that can be executed by the computer

___________________________________________________________________________
__________    STEP 1      ____________  STEP 2     ___________
| Source |   ------->     | Portable |  ----->     | Program |
| Code   |  COMPILATION   | machine  |  EXECUTION  | running |
----------                ------------             -----------
___________________________________________________________________________

2. Interpretation:
-> Interpreter runs through the source code and executes it line by line

___________________________________________________________________________
__________    STEP 1                ____________
| Source |   --------------->       | Program |
| Code   |  EXECUTION LINE BY LINE  | running |
----------                          -----------
___________________________________________________________________________

3. Just-in-time (JIT) compilation: 
-> Entire code is converted into machine code at once, then executed immediately

___________________________________________________________________________
__________    STEP 1      ____________  STEP 2     ___________
| Source |   ------->     | Machine  |  ----->     | Program |
| Code   |  COMPILATION   | machine  |  EXECUTION  | running |
----------                ------------             -----------
         NOT a portable file            Executes immediately
___________________________________________________________________________

3] MODERN JUST-IN-TIME COMPILAITON OF JAVASCRIPT


-- 3A] JavaScript Engine --
When a piece of JavaScript code enters in an engine.
The 1st step is

1. Parsing: 
- To Parse the code which means read the code
- During parse process, the code is parsed into a data structure called ABSTRACT SYNTAX TREE (AST)
- This works by first splitting up each line of code into pieces that are meaningful to language Eg: const, function keywords
- And then saving all these pieces into the tree in a structured way
- This step also check if there are any syntax errors
- Resulting tree will later be used to generate machine code
- It is just a respresentation of our code inside the engine
This tree has nothing to do with DOM Tree

2. Compilation:
- It takes the generated AST and compiles it into machine code

3. Execution:
- This machine code then executed right away
- Because modern JavaScript engine use just-in-time compilation
- Execution happens in the JavaScript engines call stack
- This is not finished here

Modern JavaScript Engine has some clever optimization strategies

Optimizaiton Strategies:
- It creates very unoptimized version of machine code in the beginning just so it can start executing as fast as possible
- In the background this code is being optimized and recompiled during the already running program execution
- This can be done multiple times
- After each optimization the unoptimized code is simply swept for the new optimized code without ever stopping execution of course

And this what makes modern engines such as V-8 so fast

- All this parsing, compilation and optimization happens in some special threads inside the engine that we can't access from our code
- Completely seperate from the main thread that is basically running into call stack executing our code
- Different engines implements in slightly different ways
- This is what modern just-in-time compilation looks like


-- 3B] JAVASCRIPT RUNTIME --
JavaScript runtime is basically an environment in which the JavaScript code is executed. It consists of a couple of things, basically:

1) JavaScript Engine - The engine that executes JavaScript, which consists of a call stack (used to organize the execution of the code) and heap (a place in memory to store objects)

2) Web APIs - these are extra things provided by browsers, for example, DOM API to manipulate elements on the websites, timers, Geolocation API to access user's geolocation, etc.

3) Event loop and the callback queue, which is used to organize asynchronous operations.

-- What is? JAVASCRIPT RUNTIME -- 

JavaScript Runtime:
- Imagine like it is basically like a box which contains all the things that is needed to use JavaScript (In this case in the browser)

1] JavaScript Engine:
- The engine that executes JavaScript code, which consists of a call stack (used to organize the execution of the code) and a heap (where objects are stored that are needed in the program)

2] Web API's:
- Functionalities provided to the engine which are not part of JavaScript
accessible on global window object
- Everything related to DOM, console.log, timers, etc

3] Callback queue: 
- It is a data structure that includes all the callback functions that are ready to be executed
- EventHandlers functions are also called as CallBack Functions 
- As we attach callback functions to DOM elements like a btn to react to certain events
- As the event happens callback function will be called

1- The first thing happens after the callback functions are called is put into the callback queue
2- When the call stack is empty the callback function is passed to the stack so that it can be executed
3- This happens by something called the event loop

EVENT LOOP             IMPORTANT!!!!!
Event loops take callback function from the callback queue and puts them in the call stack so that they can be executed
Event Loop is how 'JavaScript non-blocking concurrency model is implemented'


3C] JavaScript (Node.js)
JavaScript also exist outside the browser. For eg: Node.js

- It is similiar but since we don't have browser then we can't have the Web API 
- Because its the browser who provides these
- Instead we've multiple C++ bindings and thread pool

Different JavaScript Runtime exists
___________________________________________________________________________


___________________________________________________________________________
4] EXECUTION CONTEXT AND CALL STACK


How code is executed?
- When the code is ready to be executed, global execution context is created for high-level code which means code which is not inside of any function
- The code inside the function is executed when the function is called

What is Execution Context?
-> It is basically an abstract concept
- It is an environment where piece of JavaScript code is executed
- Such as local variables, arguments passed in function
- It stores all the information for code to be executed
___________________________________________________________________________



>>>>>>>>>>>>>> JAVASCRIPT ENGINE 2 <<<<<<<<<<<<<<<
JavaScript is a multi-paradigm prototype-based language, which uses JavaScript Engine such as Chrome’s V8 engine Firefox SpiderMonkey engine and etc. They convert the high level code into machine-readable code which lets computer to perform some specific tasks. We will understand this using an image.
Google chrome’s JavaScript V8 engine: Firstly, raw JavaScript file goes into the Parser.

Parser: It checks for syntax and semantics. Parser is nothing but a lexical analysis that results into the breaking of code into tokens in order to understand their meanings and these tokens gets converted into Abstract Syntax Tree(AST).

Abstract Syntax tree: It is a hierarchical tree like structure of program representation which allows interpreter to understand the program. This AST is initially goes to the Interpreter.

Interpreter: It lets the AST to get converted into Byte code. In V8 engine, this process is known as Ignition but when some code gets repeated again and again.
For example:

// Arrow function
const multiply = (a, b)=> a*b;
for(let i=0;i<1000;i++){
    console.log(multiply(4, 3));
}
In the above code, we are calling multiply() function 1000 times. When this code goes into the interpreter, the interpreter performance got decreased, since, Interpreter had to repeat this code again and again and then profiler will mark this code as warm and comes into action.

Profiler: It will check for the repeating code that can be optimized. As soon as, it gets the repeating code, it basically moves the code into compiler.

Compiler: It spits out the most optimized byte code. In the above case, it will see the repeating code and optimize the code by replacing the multiply(4, 3) as 12, since it gets repeated again and again and it will produce the optimized byte-code which gets replaced with the slower byte code produced by the Interpreter. In V8 Engine, This compiler is called as TurboFan. This process gets repeated again and again which means that JavaScript Engine’s speed gets improved since profiler and compiler will be producing and updating the optimized byte code.
___________________________________________________________________________


___________________________________________________________________________
3. EXECUTION CONTEXT AND CALL STACK

When the code is compiled and ready to be executed then, 
In the beginning a "global execution context" is created for top-level code to be executed

--- 1] Execution Context ---
- It is an environment in which a piece of JavaScript code is executed
- Stores all necessary information that is needed for some code to be executed

-- 2] CAll STACK --
- Call stack ensures that the order of execution never gets loss
- Call stack is place where execution context stack on top of each other to keep track of where we are in the execution


1. Global Execution Context:
'Global Execution Context' is created for top-level code to be executed
2. Computer CPU:
The top-level code is executed in this step computer's CPU process this machine code that it received
3. Functions and Callback:
a) functions
For each function call a new execution context is created and same with methods
b) Callbacks
When all the functions are done executing the engine will wait for 'callback functions' to be arrive so that it can execute it. Eg: "click event callback"

All this makes call stack

How 'CALL STACK' works?
a] The context that is on the top is currently execution context
b] When a function is called a new execution context is created and stacked in top of the current execution function
c] When a function is executed it is popped off the call stack and remove from computer memory
d] Some execution context that is executed and popped off the call stack may remain in computer's memory
e] When another function is called the previous context is paused and when the current context is executed, the current context is popped off and the previous context starts executing
f] When all the context is executed they are popped off the call stack, but the 'global execution context' remains there until the program is finished. For example: When the browser is quitted. 
g] And once program is finished like the above example the 'global execution context' is also popped off

-- 3] WHAT'S INSIDE OF EXECUTION CONTEXT? --


1] Variable Environment:
a] let, const and var declaration
- It has all the variable declarations

b] Functions
- It has all the funcion declarations

c] Arguments Object
- This object contains all the arguments that are passed inside the function that current execution context belongs to
Each functions gets it own execution context as soon as the function is called

All variables that are declared inside the function will end up in their variable environment

2] Scope chain:
- It has reference of the variable that are located outside of the function
- To keep track of the scope chain, it is stored inside the execution context

3] this keyword:
- Each execution context gets a special variable called 'this' keyword


All this 'variable environment', 'scope chain' and 'this keyword' is generated during "creation phase" right before execution



---- But in case of "ARROW FUNCTIONS!!!!!!!!!!!!!!!!!!!!" ----
- Arrow function don't have "arguments object" and "this keyword"
- But they can use 'argument object' and 'this keyword' from their closest regular function parent





-- MEANINGS --
Top-level code: the code that isn't inside of any function
__________________________________________________________________________



__________________________________________________________________________
4. SCOPE AND SCOPE CHAIN

-- 1] DEFINITIONS --
1. Scoping:
It is how the program's variables are organized and accessed
2. Lexical Scoping:
Scoping that are controlled by the placement of functions and blocks in the code
3. Scope:
Space or environment where certain variables are declared
4. Scope of a variable:
Region of our code where certain variable can be accessed

-- 2] THE 3 TYPES OF SCOPE --
a. Global Scope:
- Variables that are outside of any function or block
- Variables are accessible everywhere in the program

b. Function Scope:
- Variables that are accessible only inside function, and not outside
- Also called local scope

// BLOCKS ALSO CREATES SCOPE
c. Block Scope:
- Functions that are accessible inside the block
- This only applies to let and const variables
- Functions are also block scope
(only in strict mode)

-- IMPORTANT --
'var' is function scoped
'let' & 'const' is block scoped
'functions' is block scoped
let & const variables also creates scope

-- 3] Scope Chain --
- Scope has access to all variables from all outer scopes/parent scope/global scope
- Scope can't access variables from an inner scope
- The variables present in global scope are accessible from everywhere
- Because they are at the top of scope chain
- The way we can access variables depends on the where the scope is placed 

a) Variable Lookup:
- If one scope needs to use a certain variable that is not in its current scope than it will look up in the scope chain and see if it can find it in one of the parent scopes
- This process is known as variable lookup
- A scope has access to variable of its parent scope
- But it not work the another way the scope never have access to the variables of an inner scope
- One scope can only look up in the scope chain and not look down
- Only parent scope can be used and no child scope

--------------- SUMMARY --------------------

1. Scoping asks the question. "Where do variable live?", or "Where can we access variable and where not?"
2. There are 3 types of scope: Global Scopes, Scopes defined by function or Scopes defined by blocks
3. 'let' and 'const' are block-scoped, whereas 'var' is function-scoped it ends up in the closest function scope
4. In JavaScript we've lexical scoping, so the rules that where we can access certain variable based on where in the code function and blocks are written
5. All the scopes has access to all the variables from the outer scope. This is scope chain
6. When a certain variable is not found in current scope, the JavaScript engine looks up in the scope chain until it finds the variable. This is variable lookup
7. Variable lookup is one-way street. The scopes doesn't have access to variables in an inner scope
8. The scope chain in certain scope is equal to adding all the variable environment of all parent scope
9. The scope chain has nothing to do with the order in which function is called
__________________________________________________________________________
*/

// __________________________________________________________________________
// 5. SCOPING IN PRACTICE

/* 
function calcAge(birthYear) {
  const age = 2022 - birthYear;
  const job = `Student`;
  //   const firstName = `ABCD`;
  console.log(age);

  function printAge() {
    const str = `You are ${firstName} a ${age} year-old ${job}`;
    console.log(str);

    if (year >= 1980 && year <= 1991) {
      console.log(`You ${firstName}, yes you! You're a millenial`);
      var vegetable = `Potato`;

      //   const vegetable = `Potato`;
      function add(a, b) {
        const c = a + b;
        return c;
      }
    }

    firstName = `EFGH`;
    console.log(firstName);
    // console.log(add(2, 3));
    console.log(vegetable);
  }
  printAge();
}

// console.log(age);
let firstName = `Adnan`;
const year = 1990;
calcAge(2003);
console.log(firstName);
*/
// Sloppy mode

// ________________________________________________________________________

// ________________________________________________________________________
/*
6. HOISTING and THE TDZ

a. Hoisting: 
- Make some types of variables accessible in the code before they are actually declared
- Variables are shifted to top of their scopes
- Before execution code is scanned for variable declarations and for each declaration a new property in variable environment object is created

Initial value is the value assigned to variables in the creation phase. When you call a function, the creation phase begins. A function body is scanned for variables/function declarations, and for each variable/function a property in the Variable Environment object is created. These properties are initialized with some initial value, for var variables, it's undefined.

After the creation phase, it's time for the execution phase, in which the body of a function is executed line by line. At this stage, actual values are assigned to variables.

*/
/* 
console.log(x); // Undefined
// console.log(y); // Uninitialized
// console.log(z); // Uninitialized

var x = 23;
let y = 23;
const z = 23;
// only var is accessible in the window object and const and let are not

console.log(add(2, 3));
// console.log(add2(2, 3)); // Uninitialized
// console.log(add3(2, 3)); // Uninitialized
// console.log(add4(2, 3)); // It isn't a function
// because we're tyring to access var before declaring it
console.log(add4);

function add(a, b) {
  return a + b;
}
const add2 = function (a, b) {
  return a + b;
};
const add3 = (a, b) => a + b;

var add4 = function (a, b) {
  return a + b;
};

console.log(window.x === x);
console.log(window.y === y);
console.log(window.z === z);

// if (!numOfProducts) deleteProduct();

const numOfProducts = 30;

const deleteProduct = function () {
  console.log(`All products deleted!!`);
};

Why Hoisting

- It was created to access function declaration before it is actually declared
- Variable hoisting is just a byproduct

TDZ (Temporal Dead Zone)
- It is basically region of the scope where variable is defined but can't be accessed
- It makes variable inaccessible between the beginning of the scope till the place in our code where variable is declared

Why TDZ
- It makes easy to catch or avoid errors. Accessing variable before declaring is a bad practice and should be avoided
- The best way to avoid is to get errors when we attempt to do so
- Make const variable actually work
    Const variable must not be reassigned and it is not possible to set them to undefined and then assign real value later. Const should not be reassigned and its only assigned when execution reaches declaration
 */
// ________________________________________________________________________

// ________________________________________________________________________
/*
7. 'this' keyword
- Special keyword that is created for each execution context (for every function)
- The 'this' keyword inside the method points to the object that is calling the function

*/

/*
1. 'this' value in 'regular function'
- It is not a method nor it is not inside the object. In this case, 'this' keyword will be undefined
- In sloppy mode, 'this' keyword will point to the parent scope or global object window
*/

// const calcAge = function (birthYear) {
//   console.log(2022 - birthYear);
//   console.log(this);
// };
// calcAge(2003);
// // Here 'this' keyword is set 'undefined' only in 'strict mode'
// // In 'sloppy mode' 'this' keyword will point to the global object window

// /*
// 2. 'this' value in 'arrow function'
// The arrow function do not get arrow function. Instead 'this' keyword in an arrow function will be of parent scope
// */
// const calcAgeArrow = birthYear => console.log(this);
// calcAgeArrow(2003);
// // Here 'arrow function' don't get 'this' keyword. So it is the 'this' keyword of the surrounding scope or parent scope

// /*
// 3. 'this' value in 'object'
// When the method is called that is attached to object is called. The 'this' keyword inside the method will point to the object that is calling method
// */
// const adnan = {
//   birthYear: 2003,
//   calcAge2: function () {
//     console.log(this);
//     // Here 'this' keyword is written in 'adnan' object but it still points to 'probot' because it is the object that is calling the method
//     console.log(2022 - this.birthYear);
//   },
// };
// adnan.calcAge2();
// // Here 'this' keyword points to 'adnan' object that is calling the method

// const probot = {
//   birthYear: 2001,
// };

// // This is called 'Method Borrowing'
// probot.calcAge2 = adnan.calcAge2;
// probot.calcAge2();

// const abc = probot.calcAge2;
// // abc();
// // This is sa
// ________________________________________________________________________

// ________________________________________________________________________
// 8. Regular functions vs arrow functions

// // This will create a property in the global object window
// var lastName = `Not Khan`;

// const adnan21 = {
//   firstName: `Adnan`,
//   lastName: `Khan`,
//   birthYear: 2003,

//   // Arrow function don't get their 'this' keyword
//   // So it will take the 'this' keyword of their surrounding scope which is global window object
//   calcAge: function () {
//     console.log(2022 - this.birthYear);

//     // The 'this' keyword will be "undefined" because it is inside the regular function
//     const isMillenial = function () {
//       console.log(this);
//       // console.log(this.birthYear > 1996 && this.birthYear <= 2012);
//     };
//     isMillenial();
//     /* SOLUTION 1 */
//     // It is used to preserve the value of 'this'
//     const safe = this; // Safe or that
//     const isGenZ = function () {
//       // console.log(safe.birthYear > 1996 && safe.birthYear < 2012);
//       console.log(safe.birthYear > 1996 && safe.birthYear < 2012);
//     };
//     isGenZ();

//     /* SOLUTION 2 */
//     // Arrow function don't get their 'this' keyword, it takes the 'this' keyword of the parent scope in this case it is "calcAge" method
//     // Arrow function inherits the 'this' keyword of its parent scope
//     const ispro = () =>
//       console.log(
//         this.firstName === `Adnan`
//           ? `You're pro`
//           : `Sorry ${this.firstName} is pro`
//       );
//     ispro();
//   },
//   printName: () => console.log(this.lastName),

//   // This will show undefined
//   printName2: () => console.log(this.firstName),
// };
// adnan21.printName();
// // console.log(this);
// adnan21.printName2();
// adnan21.calcAge();

// // DON'T USE ARROW FUNCTIONS AS METHOD AS ARROW FUNCTION DON'T HAVE 'THIS' KEYWORD

// // Regular function get their own 'arguments object'
// function add(a, b) {
//   console.log(arguments);
//   return console.log(a + b);
// }
// add(1, 3);
// // If parameters are lesser than arguments that's not a problem
// // But the arguments that don't have parameter will not have a name
// // Arguments object is an array
// // So, we can use them using loop
// add(1, 3, 23, 32, 10);

// // Arrow function don't get their own 'arguments object'
// const add2 = (a, b) => {
//   // console.log(arguments);
//   console.log(a + b);
// };
// add2();
// ________________________________________________________________________

// ________________________________________________________________________
// 9. Primitive vs. Objects

/*
PRIMITTIVES: 
Number
String
Boolean
Undefined
Null
BigInt
Symbol

OBJECTS:
Function
Object literal
Arrays
...

WHEN WE'RE TALKING ABOUT "MEMORY MANAGEMENT", IT IS USUAL TO CALL PRIMITIVES PRIMITIVE TYPE AND REFERENCE REFERENCE TYPE


------ PRIMITIVE TYPES ------
Identifier points to the address and not to the value
Variable will be equal to the memory address
Value at a certain memory address is immutable
1. First JavaScript will create a unique indentifier with variable name
2. Then the piece of memory will be allocated with a certain address
3. Then value would be stored in memory at the specified address


------ REFERENCE TYPES ------
When a variable is declared as an object, an identifier is created which points to the piece of memory created in the stack, which in turn to the piece of memory in the heap where object is stored using memory address as it value, 
Stack just keep reference to where the object is stored in the heap
And it works this way because, objects might be too long to store in the stack and that's why they're stored in the heap which is like an almost unlimited memory pool

When an object is created it is stored in the heap memory
(It has unlimited memory)
1. In case of reference types, the identifier doesn't directly point to the newly created memory address in the heap
2. Instead, it points to the new piece of memory thats created in the stack
3. Then this new piece of memory will point to the object thats in the heap by using the memory address as its value
In simple words, the piece of memory in the stack has reference to the piece of memory in the heap which holds the object
That's why we call objects reference type in this context


-- CHANGING CONST OBJECTS --
When a variable is created as a const, we can still manipulate it because we're not changing the value in the memory for the particular identifier, so the value has reference to the object, so what we're doing is changing the value in the heap

They are just 2 identifiers pointing to the same value. The value is memory address which points to the reference in the memory heap

-- MYTH --
Variable that are declared using const are immutable is only true for primitive values

-- REMEMBER --
Whenever you're copying an object, you're just creating another variable that points to the exact same object
*/
// ________________________________________________________________________

// ________________________________________________________________________
// 10. PRIMITIVE VS. OBJECTS IN PRACTICE
/*
Each primitive value will stored into its own piece of memory in the stack

Since object is a reference value, it is stored in the heap and the stack just keep reference to the memory position where object is stored in the heap

we're just copying the reference which will point to the same memory address where object is stored

They're just variables in stack which hold the references to the original object is stored in the heap
Both variable points to the same memory address in the heap
Because in the stack they both hold same memory address reference





IMP
const are supposed to be for constants, things that we can not change. However what actually needs to be constant is the value in the stack.
And in the stack the value only holds reference which we aren't changing
The only thing that we're changing is underlying object in the heap

If we change something in the heap that is nothing to do with const or let
*/

// PRIMITIVE TYPES
// let age = 18;
// let oldAge = age;
// age = 19;
// console.log(oldAge);
// console.log(age);

// // REFERENCE TYPES
// const oldAdnan = {
//   firstName: `Adnan`,
//   lastName: `Khan`,
//   age: 18,
// };
// const newAdnan = oldAdnan;

// console.log(oldAdnan);
// console.log(newAdnan);

// Here a new object was created in the heap and the "newAdnanCopy" is pointing to the object. So it has reference to that new c object
// The problem is it only works at the first level. If we've object inside another object, then the inner object wil be same. It will still point to the same place in memory
// Object.assign will only create a shallow copy and not deep clone
// const newAdnanCopy = Object.assign({}, oldAdnan);
// newAdnanCopy.age = 19;

// console.log(oldAdnan);
// console.log(newAdnanCopy);

// ________________________________________________________________________
