//Assignment 1 - Variable and values

let country = "India";
let continent = "Asia";
let population = 1428.6;
console.log(country);
console.log(continent);
console.log(population);

//Assignment 2 - Data types

let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);



//Assignment 3 - let, const, var

language = "hindi";
const languageKerala = "Malayalam";
//languageKerala = "malayalam"; // assignment to const variable
console.log(languageKerala);


//Assignment 4 - Basic Operators

let countrySplitHalf = population / 2;
console.log("The half of the population in India: ", Math.round(countrySplitHalf) + " million");
population = population + 1;
console.log(population);
let populationFinland = 6;
if (populationFinland > population) {
    console.log("Finland has higher population ");
} else {
    console.log("India has higher population");
}
let avgPopulation = 33;
if (avgPopulation > population) {
    console.log("India had lesser population than average population")
} else {
    console.log("India has higher than the average population")
}
const description = country + " is in " + continent + " , and its " + population + " million people speak " + language;

console.log(description);

//Assignment 5 - Strings and Template literals

const descriptionTemplateLiteral = `${country} + " is in " + ${continent} + " , and its " + ${population} + " million people speak " + ${language};`

console.log(description);

//Asisgnment 6 - Taking decisions:if/else statements

const diffInAvgPopulatio = avgPopulation - population;
if (population > avgPopulation) {
    console.log(country + "'s population is above average");
} else {
    console.log(country + "'s population is " + diffInAvgPopulatio + "million below average");
}

//Assignment 7 - Type Conversion and Coercion

console.log('9' - '5'); //4
console.log('19' - '13' + '17'); //617
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2);//1143

//Assignment 8 - Equality Operators == vs ===


const numNeighbours = 1;
console.log("How many neighbour countries does your country have?");
//const numNeighbours = Number(prompt('How many neighbour countries does your country have')
//);


if (numNeighbours === 1) {
    console.log("Only 1 border");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No borders");
}


//Assigment 9 LOgical Operators

if (language == "english" && population < 50 && !isIsland) {
    console.log("You shoild live in " + country);
}
else {
    console.log(country + " does not meet your criteria");
}

//Assignment 10 Switch statement

switch (language) {
    case 'chinese':
    // console.log("MOST number of native speakers");
    //break;
    case 'mandarin':
        console.log("MOST number of native speakers");
        break;
    case 'spanish':
        console.log("2nd place in number of native speakers ");
        break;
    case 'english':
        console.log("3rd place");
        break;
    case 'hindi':
        console.log("Number 4");
        break;
    case 'arabic':
        console.log("5th most spoken language");
        break;

    default:
        console.log("Great language too :D");
        break;
}


//Assignment 11 The conditional ternary operator 
console.log(population > 33 ? `${country}'s population is above average` : `${country}'s population is below average`);



//Challenge 1, 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
let markHigherBMI = false;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
if (BMIMark > BMIJohn) {
    markHigherBMI = true;
}


console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI);

if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})!`);
} else {
    console.log(`John's BMI(${BMIJohn}) is higher than Mark's(${BMIMark})!`);
}


//Challenge 3


let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy");
}

//Challenge 4

let tip;
const bill = 275;

((bill > 50) && (bill < 300)) ? tip = (15 / 100) * bill : tip = (20 / 100) * bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


