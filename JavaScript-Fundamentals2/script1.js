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

