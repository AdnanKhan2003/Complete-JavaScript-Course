// _________________________________________
/*
LECTURE 1: Functions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console
*/

/*
function describeCountry(country, population, capitalCity) {
    const str = `${country} has ${population} million people and its capital city is ${capitalCity}`;
    return str;
}

const descriptionOfIndia = describeCountry("India", 1393.4, "Delhi");
console.log(descriptionOfIndia);
const descriptionOfSaudiArabia = describeCountry("Saudi Arabia", 35.84, "Riyadh");
console.log(descriptionOfSaudiArabia);
const descriptionOfKuwait = describeCountry("Kuwait", 4, "Kuwait City");
console.log(descriptionOfKuwait);
*/

// _________________________________________




// _________________________________________
/*
LECTURE 2: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population
2. To calculate the percentage, divide the given 'population' value by 7900
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice,
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called
'percentageOfWorld2', and also call it with 3 country populations (can be
the same populations)
*/

/*
const worldPopulation = 7900;

function percentageOfWorld1(countryPopulation) {
    return (countryPopulation / worldPopulation) * 100;
}
const percentageOfWorld2 = function (countryPopulation) {
    return (countryPopulation / worldPopulation) * 100;
}

const prctIndia1 = percentageOfWorld1(1393.4);
const prctSaudiArabia1 = percentageOfWorld1(35.84);
const prctKuwait1 = percentageOfWorld1(4);
console.log(prctIndia1, prctSaudiArabia1, prctKuwait1);

const prctIndia2 = percentageOfWorld1(1393.4);
const prctSaudiArabia2 = percentageOfWorld1(35.84);
const prctKuwait2 = percentageOfWorld1(4);
console.log(prctIndia2, prctSaudiArabia2, prctKuwait2);
// */

// _________________________________________





// _________________________________________
/*
LECTURE 3: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 'percentageOfWorld3'
*/

/*
const worldPopulation = 7900;
const percentageOfWorld = coutryPopulation => (coutryPopulation / worldPopulation) * 100;

const prctIndia = percentageOfWorld(1393.4);
const prctSaudiArabia = percentageOfWorld(35.84);
const prctKuwait = percentageOfWorld(4);
console.log(prctIndia, prctSaudiArabia, prctKuwait);
*/

// _________________________________________




// _________________________________________
/*
LECTURE 4: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people, which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
*/

/*
const worldPopulation = 7900;
const percentageOfWorld1 = (population) => (population / worldPopulation) * 100;

const describePopulation = (country, population) => {
    const populationPercent = percentageOfWorld1(population);

    const str = `${country} has ${population} million people, which is about ${populationPercent}% of the world`;
    return str;
}

console.log(describePopulation("India", 1393.4));
*/

// _________________________________________




// _________________________________________
/*
LECTURE 5: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the
world population for these 4 population values. Use the function
'percentageOfWorld1' that you created earlier to compute the 4
percentage values
*/

/*
const worldPopulation = 7900;
const population = [1393.4, 35.84, 4, 84.68];
console.log(population.length === 4);
if (population.length === 4) {
    console.log(`The Array has ${population.length}  elements!`)
} else {
    console.log(`The Array has ${population.length} elements!`)
}

const calcPopulationPrcnt = (population) => (population / worldPopulation) * 100;


const percentages = [
    calcPopulationPrcnt(population[0]),
    calcPopulationPrcnt(population[1]),
    calcPopulationPrcnt(population[2]),
    calcPopulationPrcnt(population[3])
];
console.log(percentages);
*/

// _________________________________________





// _________________________________________
/*
LECTURE 6: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the index of the country in the 'neighbours' array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
*/

/*
const neighbours = [`Pakistan`, `Afghanistan`, `Nepal`];
neighbours.push(`Utopia`);
neighbours.pop();

// if (neighbours.includes(`Germany`)) {
//     console.log(`Probably a central European country`);
// } else {
//     console.log(`Probably not a central European country`)
// }
// OR
// if (neighbours.indexOf(`Germany`) === -1) {
//     console.log(`Probably not a central European country`)
// }
// OR
if (!neighbours.includes(`Germany`)) {
    console.log(`Probably not a central European country`)
}

neighbours[neighbours.indexOf(`Nepal`)] = `Bangladesh`;
console.log(neighbours);
*/

// _________________________________________





// _________________________________________
/*
LECTURE 7: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing properties 'country', 'capital', 'language', 'population' and
'neighbours' (an array like we used in previous assignments)
*/

/*
const myCountry = {
    country: `India`,
    capital: `Delhi`,
    language: `Hindi`,
    population: 1393.4,
    neighbours: [`Bangladesh`, `Pakistan`, `Afghanistan`, `Nepal`, `Bhutan`]
};
console.log(myCountry);
*/

// _________________________________________





// _________________________________________
/*
LECTURE 8: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.
*/

/*
const myCountry = {
    country: `India`,
    capital: `Delhi`,
    language: `Hindi`,
    population: 1393.4,
    neighbours: [`Bangladesh`, `Pakistan`, `Afghanistan`, `Nepal`, `Bhutan`]
};
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
*/

// _________________________________________




// _________________________________________
/*
LECTURE 9: Object Methods
1. Add a method called 'describe' to the 'myCountry' object. This method
will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
2. Call the 'describe' method
3. Add a method called 'checkIsland' to the 'myCountry' object. This
method will set a new property on the object, called 'isIsland'.
'isIsland' will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property
*/

/*
const myCountry = {
    country: `India`,
    capital: `Delhi`,
    language: `Hindi`,
    population: 1393.4,
    neighbours: [`Bangladesh`, `Pakistan`, `Afghanistan`, `Nepal`, `Bhutan`],

    describe: function () {
        console.log(`${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`)
    },

    checkIsIsland: function () {
        this.isIsland = this.neighbours.length === 0 ? true : false;
    }
};
myCountry.describe();
myCountry.checkIsIsland();
console.log(myCountry);
*/

// _________________________________________




// _________________________________________
/*
LECTURE 10: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'
*/

/*
for (let voterNo = 1; voterNo <= 50; voterNo++) {
    console.log(`Voter number ${voterNo} is currently voting`);
}
*/

// _________________________________________




// _________________________________________
/*
LECTURE 11: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the
percentages of the world population for the 4 population values. Use the
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the
'percentages' array that we created manually in the previous assignment,
and reflect on how much better this solution is
*/

/*
const population = [1393.4, 35.84, 4, 84.68];
const percentages2 = [];
const worldPopulation = 7900;

for (let i = 0; i < population.length; i++) {
    percentages2[i] = population[i] / worldPopulation * 100;
}
console.log(percentages2);
*/

// _________________________________________




// _________________________________________
/*
LECTURE 12: The while Loop
1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', but this time using a while loop (call the array 'percentages3')
2. Reflect on what solution you like better for this task: the for loop or the while loop?
*/

/*
const population = [1393.4, 35.84, 4, 84.68];
const percentage = [];
const worldPopulation = 7900;

let i = 0;
while (i < population.length) {
    // percentage[i] = population[i] / worldPopulation * 100;
    percentage.push(population[i] / worldPopulation * 100);
    i++;
}
console.log(percentage);
*/

// _________________________________________




