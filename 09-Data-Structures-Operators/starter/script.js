'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  vegetable: { nameOfVeg: `Potato`, size: `30g` },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderPizza: function (ing, ...otherIng) {
    return console.log(ing, otherIng);
  },

  openingHours,

  orderBiryani: function (ing1, ing2, ing3) {
    return `Your Biryani is made with ${ing1}, ${ing2}, ${ing3}`;
  },

  orderDeleivery: function ({
    starterIndex = 2,
    mainIndex = 2,
    time,
    address,
  }) {
    console.log(
      `Order received!, ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deleivered in ${address} at ${time}`
    );
  },
};

//_________________________________________________________________________
/*
1. Destructuring is an ES6 feature and its basically way of unpacking values from an array or object into seperate variable
2. In simple words, Destructuring means to break down a complex data structure into a smaller data structure like a variable

Arrays
For arrays we use destructuring to retrieve elements from an array and store them into variables in a very easy way
*/

// const num = [1, 2, 3];
// const x = num[0];
// const y = num[1];
// const z = num[2];
// console.log(num);
// console.log(x, y, z);

// /* Destructuring the array */
// const arr = [12, 93, 92];
// const [a, b, c] = arr;

// console.log(arr);
// console.log(a, b, c);

// /* Skipping the 2nd element (creating hole in destructuring operator) */
// let [first, , second] = restaurant.categories;
// console.log(first, second);

// /* Mutating arrays destructuring
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);
// */

// /* 2nd Method */
// [first, second] = [second, first];
// console.log(first, second);

// // Return multiple values from function
// const [starter, mainMenu] = restaurant.order(2, 1);
// console.log(starter, mainMenu);

// /* Nested Destructuring */
// const secretArr = [1, 23, [12, 23, 12]];
// const [i, j, k] = secretArr;
// console.log(i, j, k);

// const [n, , [o, p, q]] = secretArr;
// console.log(n, o, p, q);

// /*
// Default values
// Gonna be useful when we take data from an API
// */
// const [e, f, g, h] = secretArr;
// console.log(e, f, g, h);

// const [e1 = 1, f1 = 1, g1 = 1, h1 = 1] = secretArr;
// console.log(e1, f1, g1, h1);

//_________________________________________________________________________

//_________________________________________________________________________
/*
2. DESTRUCTURING OBJECTS 
*/

// Extracting property from objects
// METHOD 1
/* const { name, openingHours, categories } = restaurant;
// ! The variable name should be exact as property name !
console.log(name, openingHours, categories);

// METHOD 2
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default value
const { mainMenu2: mainMenu = [], menu = [] } = restaurant;
console.log(mainMenu, menu);

// Mutating value
let u = 12;
let v = 23;
const abc = { u: 34, v: 45 };
({ u, v } = abc);
console.log(u, v);
const def = Object.assign({}, abc);
console.log(def);

// Destructuring Nested objects
const {
  thu,
  thu: { open, close },
} = openingHours;
console.log(thu, open, close);

// Passing object as an argument
restaurant.orderDeleivery({
  time: `10:30`,
  address: `D / 302, Mecca Al-Safa`,
  mainIndex: 0,
  starterIndex: 0,
});

// Deconstructing parameters results
restaurant.orderDeleivery({
  time: `10:30`,
  address: `D / 302, Mecca Al-Safa`,
});
 */

// It is helpful when we deal with the result of an API call, which means to get data from another web application like whether data or data about movies. This data comes in the form of objects

// We still need to reference property names. Otherwise JavaScript has no way knowing it

//_________________________________________________________________________

//_________________________________________________________________________
/*
3. Spread Operator 
Spread Operator is used to expand the array into all its elements. In simple words, unpacking all the array elements at once

Spread Operator takes all the value out of the array and write them individually

It logs the individual elements of the array

The d/b the destructuring and spread operator is, the spread operator takes all the elements from the array and doesn't create variables
*/
/* 
const arr1 = [1, 2, 3, 1];
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2], arr1[3]];
console.log(badNewArr);

// Spread Operator
const newarr = [1, 2, ...arr1];
// Object.assign()
const newarr2 = Object.assign({}, arr1);
console.log(newarr);
console.log(newarr2);

console.log(...newarr);
// It is same as writing the below code:
// console.log(1, 2, 1, 2, 3, 1);

const newMenu = [
  ...restaurant.mainMenu,
  `Biryani`,
  `Paneer Tikka`,
  `Daal & Rice`,
];
console.log(newMenu); // It will not change the real array
console.log(restaurant.mainMenu);

const totalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(totalMenu);

const str = `Adnan`;
console.log(...str);

// const ing = [
//   prompt(`Enter the recipe: First Ingredient`),
//   prompt(`Enter the recipe: Second Ingredient`),
//   prompt(`Enter the recipe: Third Ingredient`),
// ];

// restaurant.orderBiryani(...ing);

const newRestaurant = { ...restaurant };
newRestaurant.name = `Paratha`;
console.log(restaurant.name);
console.log(newRestaurant.name);

// "Object.assign()" only creates a shallow copy
const vegCopy = Object.assign({}, restaurant);
vegCopy.vegetable = { nameOfVeg: `Alu`, size: `30kg` };
vegCopy.name = `Khan`;
console.log(restaurant);
console.log(vegCopy);
 */

// Spread Operator also works for object from ES2018

// Multiple value seperated by comma are only expected when we pass argument in function and while creating array

// Spread Operators works on iterables
// Iterables -> Arrays, Strings, Maps or Sets. BUT NOT ON OBJECT (in a indirect way)
/* The difference between the "spread operator" & "Object.assign()"

Spread operator is spread operator unpacks individual elements of array and is a deep clone whereas 

"Object.assign()" creates a shallow copy

For Destructring variables need to be created
For spread operator it doesn't need to create variables it unpacks individual element of an array 
*/

//_________________________________________________________________________

//_________________________________________________________________________
// 4. Rest Pattern and Parameters
// Spread -> Expand , Rest -> Compress

/* 
// 1) REST
// SPREAD, because it is on the Right side of '='
// --> Spread Elements to unpack an array into elements or To expand the array into mutliple elements
const arrr = [1, 2, 3, 4];
const newArr = [1, 2, ...arrr];
console.log(newArr);

// REST, because it is on the Left side of '='
// --> To collect multiple elements and condense them into an array
// --> Rest to to pack elements into an array
// --> The rest pattern collects the elements that are unused in the destructuring assignment
const [ads, dsa, ...other] = [2, 23, 2, 32, 12];
console.log(ads, dsa, other);

// We can use both
const [pizza, pasta, , ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, pasta, otherFood);

// REST on OBJECTS
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) FUNCTIONS

// REST PARAMETERS
const addition = function (...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) sum += num[i];
  console.log(sum);
};
addition(1, 2);
addition(1, 2, 3, 3, 90, 2);
addition(1, 2, 2, 4, 7, 8, 5, 3);

const numbers = [1, 2, 32, 3, 34, 34, 34, 3];
addition(...numbers);

restaurant.orderPizza(`Alu`, `Paneer`, `Chicken`);

// Spread operator is used wher  e we write values seperated by commas
// Rest is used where variables are written seperated by cammas
*/

//_________________________________________________________________________

//_________________________________________________________________________
// 5. Short Circuiting / Shor Circuit Evaluation

// In case of OR (||), 'SHORT CIRCUITING' means that if the first value is a truthy value, it will immediately return the first value
// In OR operator, If the first operand is a truthy value, then the second operand will not even be evaluated
// In case of Or operator, if the first value is a truthy value, then the second value is not even evaluated because the result of the expression will already be true
/* 
console.log(`----- OR ------`);

console.log(1 || 'Adnan');
console.log('' || 'Adnan');
console.log(true || 'Adnan');
console.log(undefined || null);
// Here the 1st value is falsy value, and the 2nd value is also falsy value but null is returned. The short curcuiting do not happens

const guest = restaurant.numGuests ? restaurant.numGuests : 10;
// Here the "resturant.numGuests" don't exist therefore it is set to "undefined" which is a falsy value. That's why the other value "10" is returned
console.log(guest);

const adsd = restaurant.numOfGuests || 0 || '' || ` ` || true;
console.log(adsd);

restaurant.numGuests = 23;
const guest2 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest2);

// EASY way of doing short circuiting
const guest3 = restaurant.numGuests || 10;
console.log(guest3);

console.log(`----- AND ------`);

console.log(23 && '');
console.log(23 && 2);
console.log(0 && 2);

restaurant.orderPizza &&
  restaurant.orderPizza(
    'Chapati',
    'Potato',
    'Onion',
    'Chicken',
    'Salt',
    'Cheeze'
  );
 */
/*
-- SUMMARY --
The "OR" operator wil return the first truthy value of all the operands or simply the last value if all of operand are falsy

The "AND" operator will return the first falsy value of all the operands or the last value if all of them are truthy

Practical applications:
We can use the "OR" operator if we wanna set default values
"AND" operator if we wanna execute the second operand if the first is true

if the 1st value is truthy then it will not evaluate further operands because the result of the operation is already true then it will short-circuit then simply return the 1st value

If any value of the operand is false then the results of the whole operation will become false then it will short-circuit the rest of the evaluation and return the falsy value
*/
//_________________________________________________________________________

//_________________________________________________________________________
/*
6. NULLISH COALESCING
Nullish Coalescing Operator works with the idea or concept of nullish values instead of falsy value
*/

/* 
let aluLelo = 0;
// let aluLelo = '';

// NULLISH: Undefined and null (NOT INCLUDES: 0 and '')
const purchaseAlu = aluLelo ?? 10;
console.log(purchaseAlu);
 */

//_________________________________________________________________________

//_________________________________________________________________________
/*
7. Logical Assignment Operator
*/
/* 
const rest1 = {
  name: `Kebab`,
  numOfGuests: 20,
};
const rest2 = {
  name: `Kebab`,
  owner: `Alu Bhai`,
};

// rest2.numOfGuests = rest1.numOfGuests;
// rest1.owner = rest2.owner;

// rest1.numOfGuests = rest1.numOfGuests || 10;
// rest2.numOfGuests = rest1.numOfGuests || 10;

// OR Assignment Operator
rest1.numOfGuests ||= 10;
rest2.numOfGuests ||= 10;
// We can use 'OR' Operator if we wanna set default values

// AND Assignment Operator
rest2.owner &&= '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
// We can use 'AND' Operator if we wanna execute the second operand if the first operand is truthy

console.log(rest1);
console.log(rest2);
 */
//_________________________________________________________________________
//_________________________________________________________________________
/*
8. FOR OF
Some characters work differently depending on the context. For example, curly braces can be used to declare an object, as part of object destructuring assignment, but also to create a block of code.

Similarly with square brackets. Depending on the context, they can be used to declare an array, as part of array destructuring assignment, or for computed properties.

////////
// USE OF "[]" AND "{}"
{} OBJECTS
1. Declare Objects
2. Destructuring part of Objects
3. To create block of code

[] BRACES
1. Declare Array
2. Destructuring Array
3. For Computing properties
*/

/* 
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// At each iteration it will give access to the current array element
for (const item of menu) {
  console.log(item);
}

//// 
MENU.ENTRIES
console.log([...menu.entries()]);

// For getting index
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
1;

// Destructuring
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
 */
//_________________________________________________________________________

//_________________________________________________________________________
/*
9. ENHANCED OBJECT LITERALS
*/

/* 
const weekDays = [
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
  `Sunday`,
];

const openingHours = {
  // OLD Way
  thu: {
    open: 12,
    close: 22,
  },

  ///
  // 3. ENHANCEMENT
  // NEW Way
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`Day${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const policeStation = {
  name: `Alu Khana`,
  location: `Norway`,
  isOpen: true,
  officers: [`Alu Singh`, `Gajar Singh`, `Jethalal`, `Bhide`, `Iyyer`],

  // It is confusing here because the 'property-name'is same as the 'variable-name' where we get the objects from
  // openingHours: openingHours,

  ////
  // 1. ENHANCEMENT
  // Just write the variable name
  openingHours,

  // Old way of writing methods
  fileFIR: function (complaint) {
    console.log(`Your Complaint is successfully taken!`);
  },

  ///
  // 2. ENHANCEMENT
  // NEW way and LOOKS CLEAN
  fileFIR(complaint) {
    console.log(`Your Complaint is successfully taken!`);
  },
};
console.log(policeStation);
policeStation.fileFIR();
console.log(openingHours);
*/

//_________________________________________________________________________

//_________________________________________________________________________
/*
10. OPTIONAL CHAINING
*/

/* 
// WITHOUT "OPTIONAL CHAINING"
restaurant.openingHours.fri &&
  restaurant.openingHours.fri.open &&
  console.log(restaurant.openingHours.fri.open);

// As the 'mon' doesn't exist so it returns undefined.open which gives an error
// restaurant.openingHours && console.log(restaurant.openingHours.mon.open);    // IT GIVES 'ERROR'

// WITH "OPTIONAL CHAINING"
console.log(restaurant.openingHours?.mon?.open);
// Here the "mon" doesn't exist thats why "open" property is not read and the "restaurant.openingHours.mon" returns undefined

// USE of 'optional chaining' and 'nullish coalescing'
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekDays) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`At ${day}, we're open at ${open}`);
}
 
// METHODS
const result = restaurant.order?.(1, 2) ?? `We don't have that dish`;
console.log(result);

const result2 =
  restaurant.orderPulav?.(`Rice`, `Chicken`) ?? `We don't have that dish`;
console.log(result2);
// console.log(restaurant.order?.(0, 1) ?? `We don't have that dish`);

const result5 =
  restaurant.orderBiryani?.(`Alu`, `Chawal`, `Kanda`) ??
  `No such dish available`;
console.log(result5);

// ARRAYS
const adnanBrother = [{ firstName: `Adnan`, age: 19, job: `jobless` }];
const adnanBrother2 = [];

const result3 = adnanBrother[0]?.firstName ?? `It's an empty array`;
console.log(result3);
const result4 = adnanBrother2[0]?.firstName ?? `It's an empty array`;
console.log(result4);
 */

//_________________________________________________________________________

//_________________________________________________________________________
/*
11. LOOPING OBJECTS: OBJECTS KEYS, VALUES AND ENTRIES
*/
/* 
// 1. Objects KEYS
const keys = Object.keys(openingHours);
console.log(openingHours);

let keyStr = `We're open at ${keys.length} days & they're `;

// LOOPING Objects KEYS
for (const day of keys) {
  keyStr += `${day}, `;
}
console.log(keyStr);

// 2. Objects VALUES
const values = Object.values(openingHours);
console.log(values);

// LOOPING Objects VALUES
for (const value of values) {
  console.log(value);
}

// 3. ENTIRE Object
const entire = Object.entries(openingHours);
console.log(entire);

for (const [day, { open, close }] of entire) {
  console.log(`We're open at ${open} and close at ${close} in ${day}`);
}
 */
//_________________________________________________________________________

//_________________________________________________________________________
/*
12. Sets
- Sets is a collection of unique values
- Sets can never have any duplicate values

CONTENTS:
arr
strings
SET to ARRAY
Loop over SETS
Methods:
  add 
  delete
  has
  size
*/
/* 
// SETS SYNTAX
const dishes = new Set([
  `Biryani`,
  `Chicken Tikka`,
  `Rice & Daal`,
  `Biryani`,
  `Chicken Tikka`,
  `Rice & Daal`,
]);
console.log(dishes);

// ADD & DELETE Method
dishes.add(`Chole`);
dishes.delete(`Chicken Tikka`);

// HAS Method (similiar to INCLUDES)
console.log(dishes.has(`Biryani`));
console.log(dishes.has(`Tandoor`));

console.log(dishes);

// SIZE Method
let menu = `Our Restaurant has ${dishes.size} dishes which are `;

// LOOP over SETS
for (const dish of dishes) {
  menu += `${dish}, `;
}
console.log(menu);

// ARRAY to SET
const arr = [`Biryani`, 21, true, `Rice & Daal`, `Biryani`, 21, true];
const arrToSet = new Set(arr);

// Here we UNPACK the ENTIRE SET into elements and these elements are stored into newly created array
const arrToSet2 = [...new Set(arr)];

console.log(arrToSet);
console.log(arrToSet2);

// SIZE method
console.log(
  new Set([`Biryani`, 21, true, `Rice & Daal`, `Biryani`, 21, true]).size
);

// Check DIFFERENT LETTERS in STRINGS
console.log(new Set(`Adnan Khan`).size);
 */

// ARRAYS USECASE
// Whenever one needs to store values in order AND to store duplicate values
// Arrays have access to some very great array method

//_________________________________________________________________________

//_________________________________________________________________________
/*
13. MAPS
- MAP is a data structure that we can use to map values to keys
- Just like in OBJECT, Data is stored in key value pairs in MAPS
- In OBJECT key are always Strings but, In MAPS keys can be of any TYPE

SET Method set()
- When the SET method is called, it not only update the map but also returns it

Calling the set method returns the updated map and we can call set again on that map 

CONTENT:
Objects
Methods:
  set
  get
  has 
  size
*/
/* 
const info = new Map();

info.set('name', 'Adnan');
info.set('age', 19);
console.log(info.set(true, 'Yes'));

// The SET method returns the updated map & thus we can CHAIN SET method like this
info
  .set('gender', 'male')
  .set(232, true)
  .set('favouriteDish', 'Biryani')
  .set('Hobby', 'Programming')
  .set('open', 9)
  .set('close', 21)
  .set(true, "We're open")
  .set(false, "We're close");
console.log(info);

// GET map KEY-PAIR values
// To READ data from the map
console.log(info.get('name'));
// console.log(info.get(name)); // DATA TYPE matters!
console.log(info.get(true));
console.log(info.get('age'));
console.log(info.get('favouriteDish'));

const time = 11;
// const time = 22;
console.log(info.get(time > info.get('open') && time < info.get('close')));

////// IMP
// They aren't the same object in the heap
// '[2, 1]' is just map key
// the key value [2, 1] and the newly set '[2, 1]' don't point to the same object
// info.set([2, 1], `This is array`);
// console.log(info);
// info.set([2, 1], 12);
// console.log(info);

// SOLUTION:
let arr = [2, 1];
info.set(arr, 2);
console.log(info);

// DOM (It is also a special type of OBJECT)
info.set(document.querySelector('h1'), `This is a heading element`);
console.log(info);
console.log(info.has('open'));
console.log(info.set('generation', 'gen-z'));

const question = new Map([
  ['question', "What's the best programming language in the world?"],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Your answer is correct!'],
  [false, 'Your answer is wrong!'],
]);
// console.log(question);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`${key}: ${value}`);
  }
}
// const answer = Number(prompt('Choose the correct option!'));
const answer = 3;
// console.log(answer);

// answer === question.get('correct')
//   ? console.log(question.get(true), answer, question.get(3))
//   : console.log(question.get(false));
// 1;

const result = question.get(answer === question.get('correct'));
console.log(result);

// OBJECT TO MAP
const mapToObj = new Map(Object.entries(openingHours));
console.log(mapToObj);

// MAP TO ARRAY
// console.log(question);
const mapToArr = [...question];
console.log(mapToArr);

const mapKeyToArr = [...question.keys()];
const mapValuesToArr = [...question.values()];
const mapKeyToArr2 = [question.values()];
// const mapKeyToArr = [...question.keys()];
console.log(mapKeyToArr);
console.log(mapValuesToArr);
console.log(mapKeyToArr2);

// set to array
const vegetable = new Set([`Potato`, `Tomato`, `Carrot`]);
console.log(vegetable);
const setoarr = [...vegetable];
console.log(setoarr);

const arrtoset = new Set(setoarr);
console.log(arrtoset);

for (const items of arrtoset) {
  console.log(`${items}`);
}

console.log(arrtoset.size);
console.log(arrtoset.has('Carrot'));
console.log(arrtoset.add('Car'));
console.log(arrtoset);
console.log(arrtoset.delete('Car'));
console.log(arrtoset);
console.log(arrtoset);
console.log(new Set(`stringsssssssssss`));
console.log(new Set(`stringsssssssssss`).size);

const adsf = new Map();

// set chain
adsf.set('alu', `30 rupya kilo`);
adsf.set('bhindi', `15 rupya kilo`);
adsf.set('gajar', `40 rupya kilo`);
console.log(adsf.set('louki', `30 rupya kilo`));

const adsf2 = new Map([
  ['alu', `30 rupya kilo`],
  ['bhindi', `15 rupya kilo`],
  ['gajar', `40 rupya kilo`],
  ['lauki', `30 rupya kilo`],
]);
console.log(adsf2);
adsf2.set('bhindi', `25 rupya kilo`);
adsf2.set('muli', `25 rupya kilo`);
console.log(adsf2);

const maptoarr = [...adsf2.keys()];
const maptoarr2 = [...adsf2.values()];
console.log(maptoarr);
console.log(maptoarr2);

const dsaf = { name: `dsfdsf`, age: 23, asdf: `dfasi` };
const dsaff = [...new Set(dsaf)];
console.log(dsaff);
 */

//_________________________________________________________________________

//_________________________________________________________________________
// 14. MAP ITERATION
/* 
// NEW way of creating MAPS
const quizContent = new Map([
  [
    'Question',
    'What is the best programming language in the world according to you?',
  ],
  [1, 'C++'],
  [2, 'Python'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct Answer'],
  [false, 'Wrong Answer!'],
]);
console.log(quizContent);

// const userAnswer = Number(prompt(quizContent.get('Question')));
const userAnswer = 3;

console.log(quizContent.get('Question'));
for (const [key, value] of quizContent) {
  if (typeof key === 'number') {
    console.log(`${key}: ${value}`);
  }
}

console.log(quizContent.get(quizContent.get('Correct') === userAnswer));

// OBJECT to MAP
const objToMap = new Map(Object.entries(openingHours));
console.log(objToMap);
// console.log(typeof objToMap);

// MAP to ARRAY
const mapToArr = [...quizContent.entries()];
const mapToArr2 = [...quizContent.keys()];
const mapToArr3 = [...quizContent.values()];
console.log(mapToArr);
console.log(mapToArr2);
console.log(mapToArr3);
 */
//_________________________________________________________________________
/* 
// ....................... SUMMARY: MAPS & SET .......................

////////
// >>>>>>> KEEP IN MIND <<<<<<
// OBJECTS aren't iterables
// ITERALBES -> ARRAYS, STRINGS, SETS & MAPS

////////
// 1. OBJECTS
// OBJECT -> NOT iterable
const openingHoursCopy = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

/////
// >>>>>>>>>>>>>>>> LOOPING & ACCESSING OBJECTS <<<<<<<<<<<<<<<<

// ACCESS OBJECT KEYS
for (const keys of Object.keys(openingHoursCopy)) {
  console.log(keys);
}
// ACCESS OBJECT KEYS
for (const values of Object.values(openingHoursCopy)) {
  console.log(values);
}
// ACCESS WHOLE OBJECT
for (const [key, values] of Object.entries(openingHoursCopy)) {
  console.log(key, values);
}

// CONVERT OBJECT TO ARRAY
const objToArr = [...Object.entries(openingHoursCopy)];
console.log(objToArr);

for (const el of objToArr) {
  console.log(el);
}

////
// 2. SETS
const aSet = new Set([
  `Potato`,
  `Tomato`,
  `Potato`,
  `Zomato`,
  `Tomato`,
  `Zomato`,
]);

// ADD elements
aSet.add(`Toroto`);
console.log(aSet);
// DELETE elements
aSet.delete('Toroto');
console.log(aSet);

// SIZE method
console.log(aSet.size);
// HAS method
console.log(aSet.has('Tomato'));

// SET to ARRAY
const setToArr = [...aSet];
console.log(setToArr);
// ARRAY to SET
const foodArr = [`Potato`, `Tomato`, `Potato`, `Zomato`, `Tomato`, `Zomato`];
const arrToSet = new Set(foodArr);
console.log(arrToSet);
// Taking UNIQUE values from SET & put it into ARRAY
const takeUniqueValues = [...new Set(foodArr)];
console.log(takeUniqueValues);

// LOOPING over SET
for (const el of aSet) {
  console.log(el);
}

aSet.clear();
console.log(aSet);
// SETS in STRINGS
const setInStr = new Set('Gabriel Al Romani');
console.log(setInStr);
console.log(setInStr.size);

///// SETS definition
// SETS are used to store unique values
////// When to USE SETS
// 1. When the order doesn't matter
// 2. To store UNIQUE values

//////////
// >>>>>>>>>>>>>> MAPS <<<<<<<<<<<<<<<<
const map = new Map();

// ADD values to MAP
map.set('Name', 'Adnan');
map.set('Age', 19);
map.set('Profession', 'Jobless');

map.delete('Profession');

console.log(map.get('Name'));

// map.clear();
console.log(map);

// OBJECT to MAP
const mySelf = { Name: 'Adnan', Age: 19 };
const objToMap = new Map(Object.entries(openingHours));
console.log(mySelf);
console.log(objToMap);

// MAP to ARRAY
const mapToArr1 = [...map.entries()];
console.log(mapToArr1);
const mapToArr2 = [...map.keys()];
console.log(mapToArr2);
const mapToArr3 = [...map.values()];
console.log(mapToArr3);

// Another WAY to make MAP
const aa = [2, 3, 3, 3];
const newMap = new Map([
  ['asdf', 'String'],
  [[2, 2], 'Array'],
  [{ name: 'Alu' }, 'Object'],
  [aa, 'Arr'],
]);
console.log(newMap.get(aa));
console.log(newMap);

const sda = new Map([
  ['adfs', 'safd'],
  [2, 'dsaf'],
]);

// LOOPING over MAP
for (const [key, value] of sda) {
  console.log(key, value);
}
 */
//________________________________________________________________________

//________________________________________________________________________
/*
15. DATA STRUCTURES OVERVIEW

///////// SOURCES of DATA
1. From the program itself:
-> Data written in source code (based on user actions)
2. From the UI:
-> Data input from the user
   Data written in DOM
3. From External sources:
-> Data fetched for example from Web API


//////
We get collection of data from sources of data whatever may it be
SOURCES of DATA
1. From the program itself
2. From the UI
3. From the external sources
            |
      COLLECTION of DATA
      Collection of data that we get from may come from different sources
            |
            DATA STRUCTURES
We need DATA STRUCTURES to STORE this DATA
In JavaScript we've 4 built-in JavaScript Data Structure
            |
   _________|_________
   |                  |
   ARRAYS/ SETS      OBJECT/ MAP
   1. To store      1. To store key-pair
   SIMPE LIST         values
2. Values are    2. Keys allows to describe
not descriptive      values


//////////// WHAT IS...?
a. Web API
-> To get data from another web application

b. DATA from WEB API
-> Data from web api comes in a special data format called "JSON"

c. JSON 
-> It is basically a string or a long string which can be converted into object as it uses the same formatting as JavaScript objects & arrays

///////////
>>>>>>>>>> ARRAYS vs. SETS
To store values of the list which doesn't need any description

ARRAYS 
1. To store the values in order (which can also contains duplicates)
2. Used when one needs to manipulate data

SETS
1. To store unique values (the order doesn't matter here)
2. To remove duplicates from an array
3. Use when high-performance is really important

///////////
>>>>>>>>>> OBJECTS vs. MAPS
To describe value using keys

OBJECTS
1. Traditional way of storing key-pair values
2. Easy to access properties using (.) or ([]) (dot or bracket notation)
3. When you need to include function (methods)
4. When working with JSON (object to map)


MAPS
1. Better performance
2. Key can be of any data type
3. Easy to iterate
4. Easy to compute size
5. When one have to map values to keys
6. Use when you need keys that aren't strings`
*/
//________________________________________________________________________

//________________________________________________________________________
// 16. Strings
// indexOf()
// lastIndexOf()
// slice()
// toLowerCase()
// toUpperCase()
// trim()
// trimStart()
// trimEnd()
// replace()
// replaceAll()
// includes()
// startsWith()
// endsWith()
// split()
// join()
// repeat()
// padStart()
// padEnd()
/* 
const str = 'Adnan is a Human';
console.log(str[3]);
console.log(str[0]);
console.log('Alu lelo'[1]);

////// >>>> STRING METHODS
// indexOf (has both 1 & 2 parameters)
// -> Returns the occurence of the character or word in the string
console.log(str.indexOf('a'));
console.log(str.lastIndexOf('a'));
console.log(str.indexOf('a', 4));
console.log(str.indexOf('Human'));
console.log('Alu ek bhaji hai'.indexOf('A'));

// lastIndexOf
// -> Returns the last occurence of the character or word in the string
console.log(str.lastIndexOf('d'));
console.log(str.lastIndexOf('n'));
console.log('Alu ek bhaji hai'.lastIndexOf('A'));

console.log(str.length);

// slice
// => Returns the extracted part of the string
// 1st parameter includes last not

console.log(str.slice(0, 5));
console.log(str.slice(6));

// REMOVE 1 & LAST word from the string
console.log(str.slice(0, str.indexOf(' ')));
console.log(str.slice(str.lastIndexOf(' ') + 1));

/// Find MIDDLE SEAT
const middleSeat = function (seat) {
  seat = seat.slice(-1);
  if (seat === 'B' || seat === 'E') {
    console.log(`You got the middle seat`);
  } else {
    console.log(`You didn't get middle seat`);
  }
};

middleSeat('11B');
middleSeat('11F');
middleSeat('11A');
middleSeat('11E');

console.log(new String('Adnan is a Human').slice(0, 5));
console.log(typeof new String('Adnan is a Human').slice(0, 5));
*/

// 1. Whenever we call method to a string. The JavaScript behind the scenes the converts the string primitive to string object with the same content
// 2. Then its on that object where methods are called
// 3. This process is known as 'boxing' because it takes string and put it into box which is an object
// 4. Once the operation is done the object is converted back to regular string primitives
// 5. All string methods returns primitive even if it is called in string object

//________________________________________________________________________

//________________________________________________________________________
// 17. STRINGS
// toLowerCase()
// toUpperCase()
// trim()
// trimStart()
// trimEnd()
// replace()
// replaceAll()
// includes()
// startsWith()
// endsWith()
/* 
const userName = `AdNAn`;

// toLowerCase()
const lowerName = userName.toLowerCase();
console.log(lowerName);
// toUpperCase()
const UpperName = userName.toUpperCase();
console.log(UpperName);

const properUserEmail = `info@adnan.io`;
const userEmail = `   iNfo@aDnAn.io       \n`;

// trim()
const normaliseEmail = function (email) {
  return email.toLowerCase().trim();
};
const correctEmail = normaliseEmail(userEmail);
console.log(correctEmail);
console.log(correctEmail === properUserEmail);

const startSpace = `   dsaffad`;
const endSpace = `dsaffad       `;
console.log(startSpace.trimStart());
console.log(endSpace.trimEnd());

// replace()
const normalString = `Adnan is a student. He is a student learning Web Development and he is enrolled in an academic course called "BCom". He is an average student`;
// This only REPLACE the 1st OCCURENCE
console.log(normalString.replace('student', 'Talib-e-ilm'));
// To REPLACE ALL words use "REGULAR EXPRESSION"
// the 'g' flag stands for GLOBAL
console.log(normalString.replace(/student/g, 'Talib-e-ilm'));
console.log(normalString);
console.log(normalString.replaceAll('student', 'Talib-e-ilm'));

// BOOLEANS
const myName = `Adnan`;
console.log(myName.includes('a'));
console.log(myName.startsWith('A'));
console.log(myName.endsWith('n'));

//
const carModel = `Honda H320 Neo`;

if (carModel.startsWith('Honda') && carModel.endsWith('Neo')) {
  console.log(`You've new model`);
} else {
  console.log(`Your car is old version`);
}

// SECURITY CHECK
const security = function (things) {
  const thing = things.toLowerCase();
  if (thing.includes('knife') || thing.includes('gun')) {
    console.log(`You aren't allowed as you've weapons with yourself`);
  } else {
    console.log(`You're Welcome`);
  }
};
security(`I've 5 dozen apple, 2 packets juice and 1 Knife`);
security(`I've 5 dozen apple, 2 packets juice and a GuN\n`);
 */
//________________________________________________________________________

//________________________________________________________________________
// 18. STRINGS
// split()
// join()
// repeat()
// padStart()
// padEnd()
/* 
const names = 'Adnan Arman Farman German';

// split() DIVIDER STRING (+ or ' ')
const myStr = `Adnan is a Human`;
// SPLIT WORDS
const myArr = myStr.split(' ');
console.log(myArr);
// SPLIT CHARACTERS
const myArr2 = myStr.split('');
const myArr3 = myStr.split(' ', 3);
console.log(myArr2);
console.log(myArr3);

const arr = ['Potato', 'Tomato', 'Cabbage', 'Onion'];
const myString = arr.join('');
const myString2 = arr.join(' ');
const myString3 = arr.join(' and ');
console.log(myString);
console.log(myString2);
console.log(myString3);

const firstName = `Adnan`;
const lastName = `Pro`;
console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));

const capitalizeName = function (personNames) {
  const nameArr = personNames.toLowerCase().split(' ');
  const correctNames = [];
  // console.log(nameArr);
  for (const name of nameArr) {
    // correctNames.push(name[0].toUpperCase() + name.slice(1));
    correctNames.push(name.replace(name[0], name[0].toUpperCase()));
  }
  // console.log(correctNames);
  console.log(correctNames.join(' '));
};

capitalizeName('aDnaN afNAN ARMan');
// PADDING of STRING
// To add number of characters to the string until the string has a desired length
// padStart() padEnd()
console.log(`Alu lelo Kanda lelo`.padStart(25, '_').padEnd(33, '_'));

// HIDING/MASKING CREDIT Card Numbers
const maskCreditCard = function (numbers) {
  const creditNoStr = String(numbers);
  const lastFour = creditNoStr.slice(-4);
  return lastFour.padStart(creditNoStr.length, '*');
};

console.log(maskCreditCard(12345678910));
console.log(maskCreditCard(10987654321));

// repeat()
const msg = `You're a human\n`;
console.log(msg.repeat(5));

// Plain in line
const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ` + 'Yo '.repeat(n));
};
planeInLine(5);
 */

//////////////////
// STRING METHODS
// indexOf()
// lastIndexOf()
// slice()
// toLowerCase()
// toUpperCase()
// trim()
// trimStart()
// trimEnd()
// replace()
// replaceAll()
// includes()
// startsWith()
// endsWith()
// split()
// join()
// repeat()
// padStart()
// padEnd()
/* 
const msgg = `dsafklaj lkd; fdasfj adj k`;
const msgg2 = `       dsafklaj lkd; alu alu alu alu alu fdasfj adj k        `;
console.log(msgg.indexOf('d'));
console.log(msgg.indexOf('d', 15));
console.log(msgg.lastIndexOf('d'));
console.log(msgg.lastIndexOf('d', 18));
console.log(msgg.slice(0, msgg.indexOf(' ')));
console.log(msgg.slice(msgg.lastIndexOf(' ')));
console.log(msgg.toUpperCase());
console.log(msgg.toLowerCase());
console.log(msgg2.trim());
console.log(msgg2.trimStart());
console.log(msgg2.trimEnd());
console.log(msgg2.replace('alu', 'Nothing'));
console.log(msgg2.replaceAll('alu', 'Nothing'));
// regular expression
console.log(msgg2.replace(/alu/g, 'Nothing'));
console.log(msgg2.includes('alu'));
console.log(msgg.startsWith('d'));
console.log(msgg.endsWith('k'));
console.log(msgg.split(' '));
console.log(msgg.split(' ').join(' '));
console.log(msgg.repeat(5));
console.log(msgg.padStart(35, '*'));
console.log(msgg.padEnd(45, '*'));

console.log('Alu lelo'.slice(6, 2));
console.log('Alu lelo'.substring(6, 2));
console.log('Alu lelo'.substr(6, 2));
 */

//________________________________________________________________________
const newRestaurant = { ...restaurant };
newRestaurant.name = `Paratha`;
console.log(restaurant.name);
console.log(newRestaurant.name);

// "Object.assign()" only creates a shallow copy
const vegCopy = Object.assign({}, restaurant);
vegCopy.vegetable = { nameOfVeg: `Alu`, size: `30kg` };
vegCopy.name = `Khan`;
console.log(restaurant);
console.log(vegCopy);
d;
