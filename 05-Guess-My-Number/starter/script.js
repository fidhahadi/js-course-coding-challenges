'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector(".message").textContent = 'Correct number';


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value); 
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = "no number";
    }
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct number';
        document.querySelector('body').style.backgroundColor = `#60b347`;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

    }
    else if (guess < secretNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low, try a higher number';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }

    }
    else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high, try a higher number';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You lost the game';
            document.querySelector('.score').textContent = 0;
        }
    }
});