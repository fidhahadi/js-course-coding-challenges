'use strict';



//Selecting elements

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');




score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling the dice functionality
btnRoll.addEventListener('click', function () {
    //1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. display the dice
    diceEl.classList.remove('hidden');
    //manipulating src attribute using js
    diceEl.src = `dice-${dice}.png`;
    //3. check for a rolled 1..
    if (dice !== 1) {
        //Add dice to currentscore
        currentScore += dice;
        current0El.textContent = currentScore;

    } else {
        //if true => switch to next player
    }
})