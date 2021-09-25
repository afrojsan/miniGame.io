const startButton = document.querySelector("#startButton");
const color = document.querySelector("#color");

let square1 = document.querySelector("#square1");
let square2 = document.querySelector("#square2");
let square3 = document.querySelector("#square3");
let square4 = document.querySelector("#square4");

const squareStyle1 = document.querySelector(".square1");
const squareColor1 = getComputedStyle(squareStyle1);
const squareBackgroundColor1 = squareColor1.backgroundColor;

const squareStyle2 = document.querySelector(".square2");
const squareColor2 = getComputedStyle(squareStyle2);
const squareBackgroundColor2 = squareColor2.backgroundColor;

const squareStyle3 = document.querySelector(".square3");
const squareColor3 = getComputedStyle(squareStyle3);
const squareBackgroundColor3 = squareColor3.backgroundColor;

const squareStyle4 = document.querySelector(".square4");
const squareColor4 = getComputedStyle(squareStyle4);
const squareBackgroundColor4 = squareColor4.backgroundColor;


const red = 'red';
const blue = 'blue';
const green = 'green';
const yellow = 'yellow';


function randomColorTextGenerator() {
    const random = Math.floor(Math.random() * 4)
        if(random === 0){
            color.innerHTML = blue;
        }else if(random === 1){
            color.innerHTML = red;
        }else if(random === 2){
            color.innerHTML = green;
        }else if(random === 3){
            color.innerHTML = yellow;
        }
}

// set up game status win or lose
function win(status) {
    if(status === 'win' ) {
        startButton.innerHTML = "You win play again?"
    }else if(status === 'lose') {
        startButton.innerHTML = "You lose play again?"
    }
}


// set up only click once
function isClicked() {
    if(startButton.innerHTML === "You win play again?" || 
    startButton.innerHTML === "You lose play again?" || 
    startButton.innerHTML === "Game Start!"){
        return false;
    }else{
        return true;
    }
}

// set box randomColor 
function randomColor() {
    const random = Math.floor(Math.random() * 4)
        if(random === 0) {
            square1 = document.querySelector('#square1').style.backgroundColor = blue;
            square2 = document.querySelector('#square2').style.backgroundColor = red;
            square3 = document.querySelector('#square3').style.backgroundColor = green;
            square4 = document.querySelector('#square4').style.backgroundColor = yellow;
            randomColorTextGenerator()
            startButton.innerHTML = "Good Luck!!"
            console.log(color.innerHTML);
        }else if(random === 1) {
            square1 = document.querySelector('#square1').style.backgroundColor = red;
            square2 = document.querySelector('#square2').style.backgroundColor = blue;
            square3 = document.querySelector('#square3').style.backgroundColor = yellow;
            square4 = document.querySelector('#square4').style.backgroundColor = green;
            randomColorTextGenerator()
            console.log(color.innerHTML);
            startButton.innerHTML = "Good Luck!!"
        }else if(random === 2) {
            square1 = document.querySelector('#square1').style.backgroundColor = green;
            square2 = document.querySelector('#square2').style.backgroundColor = yellow;
            square3 = document.querySelector('#square3').style.backgroundColor = red;
            square4 = document.querySelector('#square4').style.backgroundColor = blue;
            randomColorTextGenerator()
            startButton.innerHTML = "Good Luck!!"
            console.log(color.innerHTML);
        }else if(random === 3){
            square1 = document.querySelector('#square1').style.backgroundColor = yellow;
            square2 = document.querySelector('#square2').style.backgroundColor = green;
            square3 = document.querySelector('#square3').style.backgroundColor = blue;
            square4 = document.querySelector('#square4').style.backgroundColor = red;
            randomColorTextGenerator()
            startButton.innerHTML = "Good Luck!!"
            console.log(color.innerHTML);
        } 
}

// game Start button
startButton.onclick = () => {
    randomColor()
}


// set cant play when the square backgroundColor is white

square1.onclick = () => {
    if(document.querySelector('#square1').style.backgroundColor === color.innerHTML) {
        win('win');
    }else if (!isClicked()){
        false
    }else if(document.querySelector('#square1').style.backgroundColor !== color.innerHTML){
        win('lose');
    }
}
    
square2.onclick = () => {
    if(document.querySelector('#square2').style.backgroundColor === color.innerHTML) {
        win('win');
    }else if (!isClicked()){
        false
    }else if(document.querySelector('#square2').style.backgroundColor !== color.innerHTML){
        win('lose');
    }
}
    
square3.onclick = () => {
    if(document.querySelector('#square3').style.backgroundColor === color.innerHTML) {
        win('win');
    }else if (!isClicked()){
        false
    }else if(document.querySelector('#square3').style.backgroundColor !== color.innerHTML){
        win('lose');
    }
}
    
square4.onclick = () => {
    if(document.querySelector('#square4').style.backgroundColor === color.innerHTML) {
        win('win');
    }else if (!isClicked()){
        false
    }else if(document.querySelector('#square4').style.backgroundColor !== color.innerHTML){
        win('lose');
    }
}


