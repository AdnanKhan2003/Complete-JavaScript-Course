'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
/* const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
 */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//_________________________________________________________________________
// ARRAY METHODS
// Arrays are just objects so we can call methods on them2

/* 
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// SLICE()
const slice = arr.slice(2, 7);
console.log(slice);
console.log(arr);

// MUTATES THE ORIGINAL ARRAY
// SPLICE()
arr.splice(2);
console.log(arr);
arr.splice(-1);
console.log(arr);
arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const splice = arr.splice(3, 3);
console.log(splice);
console.log(arr);

// REVERSE (MUTATES ORIGINAL ARRAY)
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverse = arr2.reverse();
console.log(reverse);
console.log(arr2);

// CONCAT
const concat = slice.concat(splice);
console.log(concat);
// ANOTHER METHOD TO DO
const spread = [...slice, ...splice];
console.log(spread);

// JOIN
const join = spread.join(' - ');
console.log(join);

// indexOF
console.log(spread.indexOf('d', 2));

// includes
console.log(spread.includes('b'));

// pop (MUTATES THE ORIGINAL ARRAY)
console.log(spread);
console.log(spread.pop());
console.log(spread);

// shift (MUTATES THE ORIGINAL ARRAY)
console.log(spread.shift());
console.log(spread);

// unshift (MUTATES THE ORIGINAL ARRAY)
console.log(spread.unshift('c'));
console.log(spread);

// push (MUTATES THE ORIGINAL ARRAY)
console.log(spread.push('f'));
console.log(spread);
*/

//_________________________________________________________________________

//_________________________________________________________________________
// AT METHOD
// AT METHODS helps in "method chaining" which we'll learn later

/* 
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// WAYS to GET ARRAY ELEMENTS
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.slice(0, 1)[0]);

// WAYS to GET ARRAY ELEMENTS
console.log(arr[arr.length - 1]);
console.log(arr.at(-1));
console.log(arr.slice(-1)[0]);

// AT also works in STRINGS
console.log('ADNAN'.at(3));
console.log('ADNAN'.slice(-1));
 */

//_________________________________________________________________________

//_________________________________________________________________________
// FOREACH ARRAY METHOD
// It loops over the array and at each iteration it executes the callback function
// Foreach method calls the callback function and in each iteration it will pass the current element of the array as an argument
// break & continue doesn't work in forEach function

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: Money Deposit ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: Money Withdrawal ${Math.abs(mov)}`);
  }
}

console.log('FOREACH'.padStart(20, '-').padEnd(40, '-'));

// Although 'forEach' method is beter but
// It doesn't "break" out of forEach
// break & continue doesn't work in forEach function
movements.forEach(function (mov, i, arr) {
  console.log(arr);
  if (mov > 0) {
    console.log(`Movement ${i + 1}: Money Deposit ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: Money Withdrawal ${Math.abs(mov)}`);
  }
});

// We're giving forEach instructions by giving it callback function which contains instructions
*/

//_________________________________________________________________________

//_________________________________________________________________________
// FOREACH METHOD: MAPS & SETS

/* 
// MAPS
const mapDs = new Map([
  ['name', 'Adnan'],
  [true, 'Yes'],
  [19, true],
  ['human', 'yes'],
]);

mapDs.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  console.log(map);
});

// SETS
const setDs = new Set([
  `Dr. Zakir Naik`,
  `Mohammad Hijab`,
  `Daneil Haqiaqtjou`,
  `Mohammad Hijab`,
  `Dr. Zakir Naik`,
  `Ali Dawah`,
  `Daneil Haqiaqtjou`,
  `Mohammad Ali`,
  `Dr. Zakir Naik`,
  `Dr. Zakir Naik`,
  `Daneil Haqiaqtjou`,
  `Daneil Haqiaqtjou`,
  `Zeeshan`,
  `Ali Dawah`,
  `Sam`,
  `Hamza Tzortis`,
  `Daneil Haqiaqtjou`,
  `Dr. Zakir Naik`,
  `Sam`,
  `Hamza Tzortis`,
]);

console.log('forEach for SETS'.padStart(25, '-').padEnd(40, '-'));

// Here in Sets the order doesn't matter so sets doesn't get index
// the 2nd parameter is set as to the value of the 1st
setDs.forEach(function (value, _, set) {
  console.log(`${value}`);
  // console.log(set);
});

// Here '_' means 'THROWABLE' variables
// It means that it is completely unnecessary
 */

//_________________________________________________________________________

//_________________________________________________________________________
// MAP, FILTER & REDUCE

/* 
1. MAP
map returns the 'NEW array' containing the results of applying an operation on the original array

2. FILTER
filter returns the 'new array' containing the array elements that passed a specific test condition

3. REDUCE
reduce boils the array elements into a single value
*/
//_________________________________________________________________________

//_________________________________________________________________________
// MAP
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

// USING map
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUSD;
});
console.log(movementsUSD);

// OTHER solutions
const movementsUSD2 = [];
for (const mov of movements) {
  movementsUSD2.push(mov * 1.1);
}
console.log(movementsUSD2);

// USING map (callback function as an argument)
const movementsUSD3 = movements.map(mov => mov * euroToUSD);
console.log(movementsUSD3);

// Foreach returns undefined
console.log(movements.forEach(mov => mov * 2));
console.log(movements);

// Map returns new array
console.log(
  movements.map(function (mov) {
    return mov * euroToUSD;
  })
);

const movementsUSD4 = movements.map((mov, i) => {
  return `Movements ${i + 1}: You ${
    mov > 0 ? 'deposit' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movementsUSD4);
 */

/* 
console.log(movements);
movements.forEach((mov, i) => {
  movements[i] = mov * 10;
});
console.log(movements);

console.log(movements);
const mapCantImmutate = movements.map((mov, i) => (movements[i] = mov * mov));
console.log(mapCantImmutate); */

// Basically a side-effect means something is mutating/changing existing data. Like changing a value in an existing array.
// Basically anything that 'changes' existing data instead of cloning / returning new values is a 'side effect'

//_________________________________________________________________________

//_________________________________________________________________________
// FILTER

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// USING MAP
const depositsOnly = movements.filter(mov => mov > 0);
console.log(depositsOnly);

const withdrawalOnly = movements.filter(mov => mov < 0);
console.log(withdrawalOnly);

// USING FOR OF
const depositMovements = [];
for (const mov of movements) {
  if (mov > 0) depositMovements.push(mov);
}
console.log(depositMovements);

// Filter returns the new array containing all the elements of the original array that passed a specific test
// Method Chaining is possible
*/

//_________________________________________________________________________

//_________________________________________________________________________
// REDUCE

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// USING REDUCE
// const balance = movements.reduce(function (acc, mov, i, arr) {
//   return acc + mov;
// }, 0);
// console.log(balance);

/* 
const balance = movements.reduce((acc, mov, i, arr) => acc + mov, 0);
console.log(balance);

// USING FOR OF
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}
console.log(balance2);

console.log(movements);
// MAXIMUM
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

const min = movements.reduce((acc, mov) => {
  if (acc < mov) return acc;
  else return mov;
}, movements[0]);
console.log(min);
 */

//_________________________________________________________________________

//_________________________________________________________________________
// METHOD CHANING

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUSD = 1.1;

const balance = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUSD)
  .reduce((acc, mov) => acc + mov);
console.log(balance);

// HOW TO DEBUG SUCH "METHOD CHAINS"
const debugMe = movements
  .filter(mov => mov < 0)
  // USE ARR ARGUMENT TO DEBUG IN MAP, FILTER & REDUCE
  .map((mov, i, arr) => {
    console.log(arr);
    console.log(arr.length);
    return mov * euroToUSD;
  })
  .reduce((acc, mov) => acc + mov);
console.log(debugMe);
*/

//_________________________________________________________________________

//_________________________________________________________________________
// FIND

// - To retrieve the first element from the array that matches a certain condition (either true or false)
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstElSatisfiesCondition = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstElSatisfiesCondition); // => 1st element that satisfies condition
console.log(accounts);

// CAN RETRUN AN OBJECT ON ARRAYS
// We searched arrays to find the first object that satisfies a particular condition
const firstWithdrawal = accounts.find(
  acc => acc.owner === 'Steven Thomas Williams'
);
console.log(firstWithdrawal);
*/

//_________________________________________________________________________

//_________________________________________________________________________
// FINDINDEX
// - It retrieves the index of the element of the array that matches a certain condition

/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const m = movements.findIndex(mov => mov > 0);
console.log(m);
*/

//_________________________________________________________________________

//_________________________________________________________________________
// SOME & EVERY
// EVERY: The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// SOME: The some() method tests whether at least one element in the array passes the test implemented by the provided function

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// CALLBACK BEFORE
// >>>>> SOME <<<<<
// const firstDeposit = movements.some(mov => mov > 0);
// console.log(firstDeposit);

// >>>>> EVERY <<<<<
// const withdrawal = movements.every(mov => mov < 0);
// const withdrawals = account4.movements
//   .filter(mov => mov < 0)
//   .every(mov => mov < 0);
// console.log(withdrawal);
// console.log(withdrawals);

/* 
// CALLBACK AFTER
// CODE callback and use just by putting the callback function name
const deposit = mov => mov > 0;
const withdrew = mov => mov < 0;

const firstDeposit = movements.some(mov => mov > 0);
console.log(firstDeposit);

const withdrawal = movements.every(mov => mov < 0);
const withdrawals = account4.movements.filter(withdrew).every(withdrew);
console.log(withdrawal);
console.log(withdrawals);
*/

//_________________________________________________________________________

//_________________________________________________________________________
// FLAT & FLATMAP
// FLAT: It flattens the nested array
// FLATMAP: It flattens the nested array + returns the new array with the results of applying operations on the elements of the array

/* 
const nestedArr1Lvl = [1, [2, 3, 3.5, 3.8, 4, 5, 6], 7, [8, 9], 10];
const nestedArr1Lv2 = [1, [2, 3, [3.5, 3.8, 4, 5], 6], 7, [8, 9], 10];

// FLAT
console.log(nestedArr1Lvl.flat());
console.log(nestedArr1Lvl.flat(1));

// 1ST LVL FLAT WILL NOT WORK IN 2ND LVL
console.log(nestedArr1Lv2.flat(1));
// TO work on 2nd lvl nesting put "depth" argument to 2
console.log(nestedArr1Lv2.flat(2));

// BETTER EXAMPLE
// const allMovements = accounts.map(mov => mov.movements);
// console.log(allMovements);
// const allBalance = allMovements.flat(2);
// console.log(allBalance);
// const totalMovements = allBalance.reduce((acc, mov) => acc + mov);
// console.log(totalMovements);

// OR
const totalBalance2 = accounts
  .map(mov => mov.movements)
  .flat()
  .reduce((acc, mov) => acc + mov);
console.log(totalBalance2);

// FLATMAP
// It is basically combination of FLAT + MAP

const totalBalance3 = accounts
  .flatMap(mov => mov.movements)
  .reduce((acc, mov) => acc + mov);
console.log(totalBalance3);
*/

//_________________________________________________________________________

//_________________________________________________________________________
// SORT
// - It sorts the array and returns the sorted array
// - The default sorting is ascending, built upon by converting the elements into strings, then comparing their sequence of UTF-16 code unit values

// HOW SORTING WORKS
// (When arguments are not passed)

/* 
// NUMBERS
// Here it connverts the array elements into string and compare their sequence of UTF-16 code unit values
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
console.log(movements.sort());

// STRINGS
const movementsStr = ['a', 'b', 'C', 'd'];
console.log(movementsStr);
console.log(movementsStr.sort());

// BOOLEAN
const movementsBoolean = [true, false, false, false, true, true, true];
console.log(movementsBoolean);
console.log(movementsBoolean.sort());

// COMPARATOR FUNCTION (calback function available in sort function)

// ASCENDING ORDER
const sortedNo = movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);

// DESCENDING ORDER
const sortedNo2 = movements.sort((a, b) => {
  if (a < b) return 1;
  if (a > b) return -1;
});
console.log(movements);

// REFACTORING COMPARATOR FUNCTION

// ASCENDING ORDER
const sortedPro = movements.sort((a, b) => a - b);
console.log(movements);
// DESCENDING ORDER
const sortedPro2 = movements.sort((a, b) => b - a);
console.log(movements);
*/

//_________________________________________________________________________

//_________________________________________________________________________
// FILL

/* 
const normalArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ARRAY CONSTRUCTOR
const constructorArr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// The difference between the array & the array constructor is that
// new Array() if only 1 argument is put it takes it as length and fill it with the empty spaces
const weirdBehaviour = new Array(3);

console.log(weirdBehaviour);

// FILL
// Here we programmatically filled the array
weirdBehaviour.fill('FIll array with me');
console.log(weirdBehaviour);

// The 2nd argument works like slice
weirdBehaviour.fill('Alu lelo', 1, 3);
console.log(weirdBehaviour);


//// ARRAY FROM
// -> As you can see from the DOCS, Array.from() creates a new array from an array-like or iterable object...
A good example of this is a node-list, which is an array-like object returned from the querySelectorAll method

// We can programmatically fill the normal array also we're calling method on the Array constructor which is also a type of object
// Here we're not calling method on Array Ojbect rather
// The 1st argument is the object with the length property
// The 2nd argument is the callback function (map) that loops over the array and for it iteration it pass its current value and index
const fillNormalArr = Array.from({ length: 10 }, () => 1);
const fillNormalArr2 = Array.from({ length: 10 }, (_, i) => i + 1);
console.log(fillNormalArr);
console.log(fillNormalArr2);

// ITERABLES (Sets, Maps, Strings) can be converted into Array
// "document.querySelectorAll()" returns a 'array-like' structures which is "NODELIST"

// MOVEMENTS
document.querySelector('.balance__value').addEventListener('click', () => {
  // 1ST METHOD
  // const nodeListToArr = Array.from(
  //   document.querySelectorAll('.movements__value')
  // );
  // console.log(
  //   nodeListToArr.map(mov => Number(mov.textContent.replace('€', '')))
  // );

  // 2ND METHOD (USING ARRAY CONSTRUCTOR FROM METHOD)
  const nodeListToArr = Array.from(
    document.querySelectorAll('.movements__value'),
    cur => Number(cur.textContent.replace('€', ''))
  );
  console.log(nodeListToArr);

  // 3RD METHOD (USING SPREAD OPERATOR)
  // const nodeList = [...document.querySelectorAll('.movements__value')];
  // console.log(nodeList.map(cur => Number(cur.textContent.replace('€', ''))));
});

const alu = document.querySelectorAll('.movements__value');
console.log(alu);
console.log(document.querySelectorAll('.movements__value'));
*/

//_________________________________________________________________________

//_________________________________________________________________________
// SUMMARY: ARRAY METHODS

/*
1. TO MUTATE ORIGINAL ARRAY
a. pop()
b. shift()
c. push()
d. unshift()
e. splice()
f. sort()
g. reverse()
h. fill()

2. A NEW ARRAY
a. map()
b. filter()
c. flat()
d. flatMap()
e. slice()
f. concat()

3. AN ARRAY INDEX
a. indexOf()
b. findIndex()

4. AN ARRAY ELEMENT
a. find()

5. KNOW IF ARRAY INCLUDES
a. includes()
b. some()
c. every()

6. A NEW STRING
a. join()

7. TO TRANSFORM TO VALUE
a. reduce()

8. TO JUST LOOP ARRAY
a. forEach()



////////////
///////
1. MUTATING ARRAY
A. ADDING TO ARRAY
- push()
- unshift()
B. REMOVING FROM ARRAY
- pop()
- shift()
- splice()
C. OTHERS
- sort()
- filter()
- fill()

2. NEW ARRAY
A. COMPUTED ORIGNAL ARRAY
- map()
B. BASED ON CONDITION
- filter()
C. FLATTENS THE ARRAY
- flat()
- flatMap()
D. PORTION OF ORIGINAL
- slice()
E. ADDING TO ORIGINAL
- concat()

3. NEW STRING
A. BASED ON SEPERATOR STRING
- join()

4. CURRENT ARRAY
A. BASED ON CONDITION
- find()

5. CURRENT INDEX
A. BASED ON VALUE
- indexOf()
B. BASED ON CONDITION
- findIndex()


6. INCLUDES
A. BASED ON VALUE
- includes()

B. BASED ON CONDITION
- some()
- every()

7. TRANSFER TO VALUE
A. BASED ON ACCUMULATOR
- reduce()

8. JUST LOOP OVER
A. BASED ON CALLBACK
- forEach()

*/
//_________________________________________________________________________

/*
splice(): 
- It returns the extracted element as per the given arguments. 
- It does mutates the original array
reverse(): 
- It reverse the array  
- It mutates the original array
slice(): 
- It extracts the array as per the given arguments.
- It doesn't mutate the original array
indexOf():
- It returns the index of the given element in the array
lastIndexOf():
- It returns the index of the last occurence ofthe given element in the array
concat():
- It merge arrays and returns it
join():
- It splits the strings into arrays


///
forEach():
  - It loops over the array and in each iteration it passes
  - Current Element
  - Current Index
  - Array on which the method is called
  - It returns undefined
map():
  - It returns the new array with the result of applying operations on the original array
  - It loops over the array and in each iteration it passes
  - Current Element
  - Current Index
  - Array on which the method is called
  - It doesn't mutate the original array
filter():
  - It returns all the elements of the array that matches the condition implemented in the callback function
  - It doesn't mutate the original array
reduce():
  - It boils down all the element of the array into one single value
  - It doesn't mutate the original array
  - 
find(): 
- It returns the first element that matches the condition implemented in the callback function
findIndex():
- It returns the index of the first element that matches the condition implemented in the callback function
flat(): 
- It flattens the array. 
flatMap(): 
- It flattens the array
- It returns the new array with result of applying the operations on the original array
some(): 
- This method test if atleast 1 element matches the condition that is implemented in the callback function. 
- It returns boolean value
every(): 
- This method test if every element in the array matches the condition implemented in the callback function. 
- It returns boolean value
fill():
- It fills the array with the number (The number that was passsed as 1 argument)
Array.from():
- It helps to make the array programmatically
*/

//_________________________________________________________________________

//_________________________________________________________________________
// EXERCISES
/////
// EXERCISE 1: TAKE MOVEMENTS FROM EVERY ACCOUNT, REMOVE THE WITHDRAWAL KEEP ONLY DEPOSITS AND ADD ALL THE DEPOSISTS OF ALL THE ACCOUNTS

/* 
// 1 Method
// Take subarray & merge it into 1 (all deposits) and sum all of that
// const totalDepositsMov = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .filter(mov => mov > 0)
//   .reduce((acc, mov) => acc + mov, 0);

// 2 Method
const totalDepositsMov = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
  console.log(totalDepositsMov);
  console.log(accounts);
  */

/////
// EXERCISE 2:
// TAKE NUMBERS OF DEPOSITS WHICH ARE ABOVE 1000

// const numDepositsAbv1000 = accounts
//   .flatMap(acc => acc.movements)
// HERE THE COUNTER ISN'T INCREMENTING BECAUSE.... (LOOK DOWN EXAMPLE)
//   .reduce((acc, mov) => (mov >= 1000 ? acc++ : acc), 0);

/* 
let a = 10;
// HERE "a++" returns the increment value, but when it is log to console like this it will show the old value
console.log(a++);

// NOTE!!!!!!!!!!!!
// PREFIXED ++ OPERATOR
console.log(++a);
console.log(a);

// SOLUTION
const numDepositsAbv1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => (mov >= 1000 ? ++acc : acc), 0);
  console.log(numDepositsAbv1000);
*/

/////
// EXERCISE 3:
// CREATE A NEW OBJECT BASED ON THE VALUE OF THE ACCUMULATOR OF THE REDUCE METHOD

/* 
const { deposits, withdrawal } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, mov) => {
      // mov > 0 ? (acc.deposits += mov) : (acc.withdrawal += mov);
      acc[mov > 0 ? 'deposits' : 'withdrawal'] += mov;
      return acc;
    },
    { deposits: 0, withdrawal: 0 }
  );
console.log(deposits, withdrawal);

const arr = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => {
    mov > 0 ? acc.unshift(mov) : acc.push(mov);
    return acc;
  }, []);
console.log(arr);

const map = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => {
    mov > 0 ? acc.set('Deposits', mov) : acc.set('Withdrawal', mov);
    return acc;
  }, new Map());
console.log(map);

let sum = 0;
const set = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => {
    mov > 0 ? acc.add((sum += mov)) : acc.add((sum += mov));
    return acc;
  }, new Set([]));
console.log(set);

// 4.
const correctedStr = function (str) {
  const exceptions = [
    'a',
    'an',
    'and',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
    'it',
  ];

  const capitalize1stLetter = str =>
    str[0].toUpperCase() + str.slice(1).toLowerCase();

  // const titleCase = str
  //   .split(' ')
  //   .map(word =>
  //     exceptions.includes(word)
  //       ? word
  //       : word[0].toUpperCase() + word.slice(1).toLowerCase()
  //   )
  //   .join(' ');

  // REFACTORING THE ABOVE CODE
  const titleCase = str
    .split(' ')
    .map(word => (exceptions.includes.word ? word : capitalize1stLetter(word)))
    .join(' ');
  return titleCase;
};

console.log(correctedStr('This is a long string'));
console.log(correctedStr('and the another long string'));
console.log(correctedStr('This is an another string with the statement in it'));

*/

//_________________________________________________________________________
