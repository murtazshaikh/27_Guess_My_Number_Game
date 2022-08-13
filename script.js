"use strict";

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const body = document.querySelector("body");
const numberDisp = document.querySelector(".number");
const highScoreDisp = document.querySelector(".highscore");
const messageDisp = document.querySelector(".message");
const scoreDisp = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;

let highscore = 0;

const checkBtnHandler = () => {
    const guess = Number(document.querySelector(".guess").value);

    if(guess < 1 || guess > 21){
        messageDisp.textContent = "Number only between 1 and 20";
    }else if(!guess){
        messageDisp.textContent = "No Number!";
    }else if(guess === secretNumber){
        messageDisp.textContent = "Correct Number";
        body.style.backgroundColor = "#60b347";
        numberDisp.style.width = "30rem";
        numberDisp.textContent = secretNumber;

        if(score > highscore){
            highscore = score;
            highScoreDisp.textContent = highscore;
        }

    }else if(guess !== secretNumber){
        if(score > 0){
            messageDisp.textContent = guess > secretNumber ? "Too High!" : "Too Low!";
            scoreDisp.textContent = --score;
        }else{
            messageDisp.textContent = "You lost the game!";
            scoreDisp.textContent = 0;
        }
    }
};

const againBtnHandler = () => {
    secretNumber = Math.trunc(Math.random()*20) + 1;
    scoreDisp.textContent = 10;
    messageDisp.textContent = "Start guessing....";
    numberDisp.textContent = "?";
    document.querySelector(".guess").value = "";
    body.style.backgroundColor = "#222";
    numberDisp.style.width = "15rem";
};

checkBtn.addEventListener("click", checkBtnHandler);

againBtn.addEventListener("click", againBtnHandler);