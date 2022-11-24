/*
Developer Skills & Editor Setup
Coding Challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]

1] UNDERSTANDING THE PROBLEM
- Arrays element should be seperated by '...'
- What will be 'x days'
=> i + 1


2] BREAKING PROBLEMS INTO SUB-POINTS
- Make a function 'printForecast'
- Pass the argument('data') to that function
- Make a loop with the condition 'i < parameter.length' to count the 'x days'
- i] Convert whole array
    ii] Convert array elements into strings
- String needs to contain day [i + 1]
- Call the function

*/

// const forecastedMaxTemp = [17, 21, 23];

// let temperature = [];
// let temperatures;
// const printForecast = function (temps) {
//   for (let i = 0; i < temps.length; i++) {
//     temperature.push(`... ${forecastedMaxTemp[i]}ºC in ${i + 1} days`);
//   }
//   temperatures = temperature[0] + temperature[1] + temperature[2];
//   return temperatures;
// };
// printForecast(forecastedMaxTemp);
// console.log(temperatures);

// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

/* 
const forecastedMaxTemp = [17, 21, 23];
const forecastedMaxTemp2 = [12, 5, -5, 0, 4];

let str;
const printForecast = function (temp) {
  str = '';
  for (let i = 0; i < temp.length; i++) {
    str += `${temp[i]}ºC in ${i + 1} days... `;
  }
  console.log(`... ${str}`);
};
printForecast(forecastedMaxTemp);
*/
