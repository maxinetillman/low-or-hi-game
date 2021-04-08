// Variables 

let startGameButton = document.querySelector(".startGameButton");
let numberList = document.querySelector('.numberList');

let higherButton = document.querySelector('.higherButton');
let lowerButton = document.querySelector('.lowerButton');

let guessResult = document.querySelector('.guessResult');

// Functions

function checkHigher(){
// get current number 
// get next number 
// compare if next number is greater than current, player wins 
// or else, player loses 
let currentNumber = numberList.lastElementChild.textContent; 
console.log(currentNumber)
let nextNumber = generateRandomNumber();
    addNumberToList(nextNumber);
if (nextNumber > currentNumber){
    console.log('user wins!')
    guessResult.innerText = "You win!"
    return
}
    console.log('wrong guess')
    guessResult.innerText = "You lose!"
    return
}

function checkLower(){
    // get current number 
    // get next number 
    // compare if next number is less than current, player wins 
    // or else, player loses 
    let currentNumber = numberList.lastElementChild.textContent; 
    console.log(currentNumber)
    let nextNumber = generateRandomNumber();
        addNumberToList(nextNumber);
    if (nextNumber < currentNumber){
        guessResult.innerText = "You win!"
        return
    }
        console.log('wrong guess')
        guessResult.innerText = "You lose!"
        return
    }

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    return randomNumber;
}

function addNumberToList(number){
    // generate a number
    // generate a list item 
    // put number in list item 
    // add list item to our unorder list 
    let listItem = document.createElement('li');
    listItem.innerText = number;
    numberList.appendChild(listItem)
}

function startGame(){
    // generate a number
    // generate a list item 
    // put number in list item 
    // add list item to our unorder list 
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    numberList.innerHTML = `<li>${randomNumber}</li>`;
}


// Event Listeners 

startGameButton.addEventListener("click", startGame);
higherButton.addEventListener("click", checkHigher);
lowerButton.addEventListener("click", checkLower);
