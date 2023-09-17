'use strict';


//Assignment 1 - Functions

function describeCountry(country, population, capitalCity) {
    console.log(country + " has " + population + " million people and its capital city is " + capitalCity);
}
const desIndia = describeCountry("India", 1467.8, "New Delhi");
const desFinland = describeCountry("Finland", 6, "Helsinki");
const desUAE = describeCountry("UAE", 9.365, "Abu Dhabi");

console.log(desIndia, desFinland, desUAE);


//Assignment 2 Function Declrations vs Expressions

function percentageOfWorld1(country, population) {
    let percentage = (population / 7900) * 100;
    console.log(`The population of ${country} is ${percentage} of the total population`)
}
const percentage = percentageOfWorld1("India", 1468.9);

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
};
const percentageChina = percentageOfWorld1(1435);
console.log(percentageChina);

//Assignment 3 Arrow functions

const percentageOfWorld3 = (population) => {
    return population / 7900 * 100;
};

const percentEthipia = percentageOfWorld3(4);
console.log(percentEthipia);

//Assignment 4 Function calling other functions

const describePopulation = (country, population) => {
    const percentage = percentageOfWorld2(population);
    console.log(`${country} has ${population} million people, which is about ${percentage} of the world`);
};
const describePopIndia = describePopulation("India", 1456);
console.log(describePopIndia);


//Assignment 5 - INtroduction to arrays

const populations = [1343, 23, 56, 8];
console.log(populations.length === 4);
const percentages = [
    percentageOfWorld2(populations[0]),
    percentageOfWorld2(populations[1]),
    percentageOfWorld2(populations[2]),
    percentageOfWorld2(populations[3])];

console.log(percentages);

//Assignment 6 Basic Array Operations

const neighbours = ["Nepal", "Bhutan", "China", "Pakistan", "Afghanistan", "Sri Lanka"];
neighbours.push("Utopia"); //added utopia at the end
console.log(neighbours);
neighbours.pop(); //removed utopia from the end
console.log(neighbours);
if (!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}

neighbours[neighbours.indexOf("Bhutan")] = "Taiwan";
console.log(neighbours);


//Assignment 7 Introduction to Objects

const myCountry = {
    country: "India",
    capital: "New Delhi",
    language: "hindi",
    population: "1487.9",
    neighbours: ["Pakistan", "Taiwan"],
    describe: function () {
        console.log(`${this.country} has ${this.population} million
${this.language}-speaking people,
${this.neighbours.length} neighbouring countries and a
capital called ${this.capital}.`
        );
    },
    checkIsland: function () {
        this.island = this.neighbours.length === 0 ? true : false;
    }
};
console.log(myCountry);


//Assignment 8 Dot vs Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

//Assignment 9 Object Methods

// wrongggg...........myCountry['describe'] = describe;
console.log(myCountry.checkIsland);


//Challenge 1 

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
};
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins > avgKoalas && avgDolphins === 2 * avgKoalas) {
        console.log(`Dolphins win ( ${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgDolphins < avgKoalas && avgKoalas === 2 * avgDolphins) {
        console.log(`Koalas win ( ${avgKoalas} vs. ${avgDolphins})`);
    }
    else if (avgDolphins === avgKoalas) {
        console.log("No team wins...");
    }
};
console.log(checkWinner(scoreDolphins, scoreKoalas));

//Arrays

const friends = ['Bob', 'Adam', 'Eve'];
console.log(friends[2]);
const newlength = friends.push('Jay');//returns new length of the array
console.log(newlength);

//Challenge 2 

const calcTip = (bill) => {
    let tip;
    ((bill > 50) && (bill < 300)) ? tip = (15 / 100) * bill : tip = (20 / 100) * bill;
    return tip;
}

calcTip(100);
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips);
console.log(totals);


//Objects

const jonas = {
    firstName: "Jonas",
    lastName: "Rafeeque",
    birthYear: 1995,
    job: "teacher",
    friends: ['Michael', 'Steve', 'Bob'],
    hasDriversLicense: true,
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    hasLicence: function () {
        if (this.hasDriversLicense) {
            return "a";
        } else {
            return "no";
        }
    }
};

const name1 = 'Name';
console.log(jonas['first' + name1]);
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`);


//Object Methods

console.log(`${jonas.firstName} is a ${jonas.calcAge()} year old ${jonas.job} and he has ${jonas.hasLicence()} drivers license`);

//Challenge 3 
const mark = {
    // firstName: "Mark",
    // lastName: "Miller",
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass) / (this.height * this.height);
        return mark.bmi;

    }
};
const john = {
    // firstName: "John",
    // lastName: "Smith",
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass) / (this.height * this.height);
        return john.bmi;

    }
};
console.log(john.calcBMI());

((john.calcBMI() > mark.calcBMI())) ? console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`) : console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);



for (let rep = 24; rep <= 100; rep++) {
    console.log("Lifting weights repetition " + rep);
}


//Looping through arrays

const jonasArray = [
    'Jonas',
    'smith',
    2037 - 1991,
    'teacher',
    ['Michael', 'Steve', 'Bob']
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);
    types[i] = typeof jonasArray[i];
    console.log(types);
}



//Challenge 4

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = (bill) => {
//     let tip;
//     ((bill > 50) && (bill < 300)) ? tip = (15 / 100) * bill : tip = (20 / 100) * bill;
//     return tip;
// }

// for (let i = 0; i < 10; i++) {
//     tips.push(calcTip(bills[i]));
// }
// console.log(tips);
// for (let j = 0; j < 10; j++) {
//     totals.push((bills[j] + tips[j]));
// }
// console.log(totals);


//while loop
//dice rolls

let dice = Math.trunc(Math.random() * 6 + 1);

while (dice !== 6) {
    console.log(`You rolled ${dice}`)
    dice = Math.trunc(Math.random() * 6 + 1);
}

//Problem

const calcAmplitude = function (t1, t2) {

    const temps = t1.concat(t2);


    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== 'number') continue;

        if (curTemp > max) max = temps[i];
        if (curTemp < min) min = temps[i];
    }
    console.log(max, min);
    return max - min;

};

const amplitudeNew = calcAmplitude([3, 5, 6, 7, 9, 18], [23, 54, 67, 8, 7, 34, 56]);
console.log(amplitudeNew);

//Problem 2 - Coding challenge 1
//Exapmle : [17,21,23] will print "...17 in 1 days...21 in 2 days...23 in 3 days"

const printForecast = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`...${arr[i]} in ${i + 1} days`);
    }
}

printForecast([17, 21, 23]);


//coding ninjas
// function reverseInPlace(str) {
//     var words = [];
//     words = str.split("\s+");
//     var result = "";
//     for (var i = 0; i < words.length; i++) {
//         return result += words[i].split('').reverse().join('');
//     }
// }
// console.log(reverseInPlace("Hello world"))


//split function in javascript

let str = 'Hello world how are you';
let splitted = str.split(' ');
let reversed = splitted.reverse();
let stringed = String(reversed);
let newstr = stringed.replaceAll(',', ' ');
console.log(newstr);


//optimized solution
let str1 = String(str.split(" ").reverse()).replaceAll(',', ' ');
console.log(str1);


