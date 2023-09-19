'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector(".message").textContent = 'Correct number';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value); 
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


//creating a function for recurring statements

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = secretNumber;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if (!guess) {
        displayMessage('no number');
    }
    else if (guess === secretNumber) {
        displayMessage('Correct number');
        document.querySelector('body').style.backgroundColor = `#60b347`;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = (guess > secretNumber) ? `Too high, try a higher number` : `Too low, try a higher number`;
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing');
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = " ";
    // document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = `#222`;
    document.querySelector('.number').style.width = '15rem';
});