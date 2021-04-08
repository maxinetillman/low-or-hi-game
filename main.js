// Store the start game button in a variable:

let startGameButton = document.querySelector(".startGameButton");

// Add event to start game button:

startGameButton.addEventListener("onClick", addNumberToList);

// Add a number to our list:

let numberList = document.querySelector(".numberList");

let randomNumber = Math.floor(Math.random() * 10);
