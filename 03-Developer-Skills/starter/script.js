// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// _________________________________________
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/* 
1] Understanding Problem
- What is temperature amplitude? 
=> The difference between maximum and minimum values of temperature (in array).
- How to find max and min values?
- What is sensor error? How does it goes away?

2] Dividing problems into sub-problems
- How to ignore errors?
- Find min and max values!
- Return temperature amplitude value
- Find Temperature Amplitude By:
Calculating temperature amplitude by doing
Temperature Amplitude = Max value (temperature) - Min value (temperature)
(IN AN ARRAY)!!
*/
/* 

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    let currentTemp = temp[i];

    if (typeof currentTemp !== 'number') {
      continue;
    }
    if (max < currentTemp) {
      max = currentTemp;
    }
    if (min > currentTemp) {
      min = currentTemp;
    }
  }
  return max - min;
};

console.log(calcTempAmplitude([12, 34, 45, 12]));
*/

// ___________________

// PROBLEM 2:
// Function should now receive 2 arrays of temps

/* 
1] Understanding Problem
- With 2 arrays, Should we implement functionality twice?
=> NO!! Just merge 2 arrays.

2] Dividing problems into sub-problems
- Merge 2 arrays
*/

/* 
const calcTempAmplitude2 = function (t1, t2) {
  const temp2 = t1.concat(t2);
  console.log(temp2);

  let max2 = temp2[0];
  let min2 = temp2[0];

  for (let i = 0; i < temp2.length; i++) {
    let currentTemp2 = temp2[i];

    if (typeof currentTemp2 !== 'number') {
      continue;
    }
    if (max2 < currentTemp2) {
      max2 = currentTemp2;
    }
    if (min2 > currentTemp2) {
      min2 = currentTemp2;
    }
  }

  return max2 - min2;
};
console.log(calcTempAmplitude2([123, 34, 43, 44], [98, 39, 98, 1]));
console.log(calcTempAmplitude2(temperatures, [98, 39, 98, 1]));
*/

// _________________________________________

// _________________________________________
// Debugging
// => Process of identifying, finding, fixing and preventing bugs

// => A software bug is a 'defect' or a 'problem' in a computer program.
// Any unexpected and unintended behaviour of a program is called a bug.
// => Debugging is a skill which means to identify, find, fix and prevent errors!

/*
The prompt function always returns string
The '+' operator when it will convert both operands to a string and then concatenate the string


IDENTIFY: Becoming aware that there is a bug
FIND: Isolating where exactly the bug happening in code
FIX: Correct the bug
PREVENT: Prevent the bug from happening again
*/

/* 
const calcKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX:
    // value: prompt(`Degree Celsius: `), // BEFORE
    // value: Number(prompt(`Degree Celsius: `)), // AFTER
    value: 10,
  };
  // B) FIND:
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) IDENTIFY:
console.log(calcKelvin());
*/

/* 
WHAT IS /BREAKPOINT'?
 => We can set Red Point which means breakpoint in the sources tab of developer options
 => The execution will freeze in this time and shows us how exactly the execution looks like
*/

/*
 NOTE: THE BELOW CODE IS JUST FOR DEBUGGING
 Use either 'SOURCES' Tab or 'TYPE debugger' from where you want the code to freeze and see how further code will be executed
*/

// const calcTempAmplitude2 = function (t1, t2) {
//   const temp2 = t1.concat(t2);
//   console.log(temp2);

//   let max2 = 0;
//   let min2 = 0;

//   for (let i = 0; i < temp2.length; i++) {
//     let currentTemp2 = temp2[i];

//     if (typeof currentTemp2 !== 'number') {
//       continue;
//     }
//     debugger;
//     if (max2 < currentTemp2) {
//       max2 = currentTemp2;
//     }
//     debugger;
//     if (min2 > currentTemp2) {
//       min2 = currentTemp2;
//     }
//   }

//   console.log(max2, min2);
//   return max2 - min2;
// };
// console.log(calcTempAmplitude2([123, 34, 43, 44], [98, 39, 98, 1]));

// _________________________________________
