// DOM variables

const startButton = document.querySelector(".startGameButton");

const numberList = document.querySelector(".numberList");

const higherButton = document.querySelector(".higherButton");
const lowerButton = document.querySelector(".lowerButton");

const guessResult = document.querySelector(".guessResult");

// Game variables

let currentNumber = 0;

// 1. PUT(RANDOM NUMBER BETWEEN 1 AND 10) === start button

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// 2. SET AS X

// 3. PRINT X === show x on webpage

function printNumber(number) {
  let listItem = document.createElement("li");
  listItem.innerText = number;
  numberList.appendChild(listItem);
}

function startGame() {
  numberList.innerHTML = "";
  currentNumber = getRandomNumber();
  printNumber(currentNumber);
}

startButton.addEventListener("click", startGame);

// 4. PRINT "HIGHER OR LOWER?"
// 5. PUT USER INPUT "HIGHER OR LOWER" === press button higher or lower

// 6. SET AS guess
// 7. IF guess EQUALS "HIGHER OR LOWER", continue
// 8. IF guess doesnt EQUAL "HIGHER OR LOWER", GO TO step 4

function checkHigher() {
  // 9.  PUT(RANDOM NUMBER BETWEEN 1 AND 10)
  // 10. SET AS Y
  let newNumber = getRandomNumber();
  let previousNumber = numberList.lastElementChild.innerText;
  // 11. PRINT Y
  printNumber(newNumber);

  // 12. IF X GREATER THAN Y AND guess EQUALS "LOWER" OR IF X IS LESS THAN Y AND guess EQUALS "HIGHER"
  //      a. PRINT "WINNER"
  //      b. PUT Y
  //      c. SET AS X
  //      d. GO TO LINE 4
  if (newNumber > previousNumber) {
    guessResult.innerText = "Winner!";
  } else {
    guessResult.innerText = "Loser!";
  }
}

higherButton.addEventListener("click", checkHigher);

function checkLower() {
  let newNumber = getRandomNumber();
  let previousNumber = numberList.lastElementChild.innerText;
  // 11. PRINT Y
  printNumber(newNumber);

  if (newNumber < previousNumber) {
    guessResult.innerText = "Winner!";
  } else {
    guessResult.innerText = "Loser!";
  }
}

lowerButton.addEventListener("click", checkLower);

// 13. STOP
