// _________________________________________
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/


/*
// FUNCTION TO CALCULATE AVERAGE SCORE OF BOTH TEAMS IN TEST DATA 1 & 2
const calcAverage = (teams1GameScore1, teams1GameScore2, teams1GameScore3) => (teams1GameScore1 + teams1GameScore2 + teams1GameScore3) / 3;


// FUNCTION TO CHECK WHICH TEAM WON THE GAME
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= (avgKoalas * 2)) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= (avgDolphins * 2)) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`Nobody won (${avgDolphins} vs. ${avgKoalas})!`);
    }
}

// AVERAGE OF BOTH TEAM IN TEST DATA 1
const avgDolphins1TestData = calcAverage(44, 23, 71);
const avgKoalas1TestData = calcAverage(65, 54, 49);

// AVERAGE OF BOTH TEAM IN TEST DATA 2
const avgDolphins2TestData = calcAverage(85, 54, 41);
const avgKoalas2TestData = calcAverage(23, 34, 27);

// SENDING AVERAGE OF BOTH TEAMS TO THE FUNCTION TO LOG WHO WON!
const winnerOf1TestData = checkWinner(avgDolphins1TestData, avgKoalas1TestData);
const winnerOf2TestData = checkWinner(avgDolphins2TestData, avgKoalas2TestData);
*/


// _________________________________________




// _________________________________________
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data below
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
*/

/*
// Total Value = Bill Value + Tip Value
const calcTip = function (billValue) {
    return (billValue >= 50) && (billValue <= 300) ? tip = 15 / 100 * billValue : tip = 20 / 100 * billValue;
}
// OR
// const calcTip = billValue => (billValue >= 50) && (billValue <= 300) ?
//     tip = 15 / 100 * billValue : tip = 20 / 100 * billValue;

const calcTip2 = function (billValue) {
    if ((billValue >= 50) && (billValue <= 300)) {
        tip = 15 / 100 * billValue;
        totalValue = billValue + tip;
        return totalValue;
    } else {
        tip = 20 / 100 * billValue;
        totalValue = billValue + tip;
        return totalValue;
    }
}

let tip, totalValue;
const bills = [125, 555, 44];


// TIPS
// let tip1 = calcTip(bills[0]);
// let tip2 = calcTip(bills[1]);
// let tip3 = calcTip(bills[2]);
// console.log(tip1, tip2, tip3);

// OR

const tips = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];



// TOTAL
const total = [
    calcTip2(bills[0]),
    calcTip2(bills[1]),
    calcTip2(bills[2])
];

// OR

// let total1 = calcTip2(bills[0]);
// let total2 = calcTip2(bills[1]);
// let total3 = calcTip2(bills[2]);
// console.log(total1, total2, total3);

// OR

// const total2 = [
//     bills[0] + tips[0],
//     bills[1] + tips[1],
//     bills[2] + tips[2]
// ];
// console.log(total2);



console.log(bills, tips);
console.log(bills, tips, total2);
*/


// _________________________________________




// _________________________________________
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark  Miller's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.
*/

/*
const mark = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.marksBMI = this.mass / (this.height ** 2);
        return this.marksBMI;
    }
};
const john = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,

    calcBMI: function () {
        this.johnsBMI = this.mass / (this.height ** 2);
        return this.johnsBMI;
    }
};

mark.calcBMI();
john.calcBMI();
console.log(mark.calcBMI(), john.calcBMI());

// USING TERNARY OPERATOR
// mark.marksBMI > john.johnsBMI ? console.log(`${mark.fullName}'s BMI (${mark.marksBMI}) is higher than ${john.fullName}'s (${john.johnsBMI})!`) : console.log(`${john.fullName}'s BMI (${john.johnsBMI}) is higher than ${mark.fullName}'s (${mark.marksBMI})!`);

// USING IF-ELSE STATEMENT
if ((mark.marksBMI) > (john.johnsBMI)) {
    console.log(`${mark.fullName}'s BMI (${mark.marksBMI}) is higher than ${john.fullName}'s (${john.johnsBMI})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.johnsBMI}) is higher than ${mark.fullName}'s (${mark.marksBMI})!`);
}
*/
// _________________________________________





// _________________________________________
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(bills) {
    return (bills >= 50) && (bills <= 300) ? 15 / 100 * bills : 20 / 100 * bills;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}
console.log(bills);
console.log(tips);
console.log(totals);


// BONUS CHALLENGE
const arr = [10, 20];

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    // console.log(sum);
    return sum / arr.length;
}
console.log(calcAverage(arr));
console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
*/

// _________________________________________