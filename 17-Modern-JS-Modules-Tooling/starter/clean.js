'use-strict';

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

let getLimit = (limits, user) => limits?.[user] ?? 0;

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

/////////////////////////////////////
// I] 'addExpense()' FUNCTION

// This will NOT work as we didn't MUTATED the array we just return a new array
//   budget,
//   spendingLimits,
//   100,
//   'Going to movies 🍿',
//   'Matilda'
// );

// so in order to NOT mutate the original state and also want the updated copy of the state we take the previous variable (which contains return value of function) and put that in this function

// 1. PURE function
// - AVOID side effects and mutation
// - AVOID logging to console, writing to DOM, mutating external variables
// - ALWAYS 'RETURNS' something
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  const cleanUser = user.toLowerCase();

  const newlyPushExp =
    value <= getLimit(limits, cleanUser)
      ? [...state, { value: -value, description, user: cleanUser }]
      : state;
  budgetCopy(newlyPushExp);
  return newlyPushExp;
};

// NOTE: composing or piping
const userExpenses1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const userExpenses2 = addExpense(
  userExpenses1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);

const userExpenses3 = addExpense(
  userExpenses2,
  spendingLimits,
  200,
  'Stuff',
  'Jay'
);
console.log(userExpenses1);
console.log(userExpenses2);
console.log(userExpenses3);

//////////////////////////
// II} 'checkExpense()' function

// 1. IMPURE function
// - side effects and mutation
// - logging to console, writing to DOM, mutating external variables
// const checkLimit = function () {
//   // let limit = getLimit(entry.user); // DOUBT (CANT USE LET WITHOUT BLOCK IN FOR OF LOOP)
//   for (const entry of budget)
//     if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
// };
// checkLimit();

const checkLimit = (state, limit) =>
  // let limit = getLimit(entry.user); // DOUBT (CANT USE LET WITHOUT BLOCK IN FOR OF LOOP)
  // for (const entry of budget)
  //   if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
  state.map(el =>
    el.value < -getLimit(limit, el.user) ? { ...el, flag: 'limit' } : el
  );
////////////////////////////

////////////////////////////
// III] 'userLimitCheck()' function
const userLimitCheck = checkLimit(budget, spendingLimits);
console.log(userLimitCheck);

const logBigExpenses = (state, limits, bigLimit) =>
  // let output = '';
  // for (const entry of budget)
  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
  // state
  //   .filter(el => el.value <= -bigLimit)
  //   .map(el => el.description.slice(-2))
  //   .join(' / ');
  state
    .filter(el => el.value <= -bigLimit)
    .reduce((acc, cur) => `${acc} / ${cur.description.slice(-2)}`, '')
    .slice(3);
// logBigExpenses(budget, spendingLimits, 100);

const userBigExp = logBigExpenses(budget, spendingLimits, 1000);
console.log(userBigExp);
const userBigExp2 = logBigExpenses(budget, spendingLimits, 100);
console.log(userBigExp2);
/////////////////////////

/////////////////////////
// II] '

console.log(budget);

/* 
1. Making data immutable (Object.freeze)
2. But it does ONLY 'freezes' 1 level of object so its NOT a deep freeze
so we can still mutate 2 level of object
3. A function should receive all data that it will need and should be made to look at outer scope for variables
4. 16 minutes: composing to create a chain

we would something called composing or curring to create this chain of operation here, we here need all of these intermediaries variables to create a new budget
*/
