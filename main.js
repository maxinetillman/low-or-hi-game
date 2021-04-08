// Store the start game button in a variable (selecting DOM elements, variables):

let startGameButton = document.querySelector(".startGameButton");

// Add event to start game button (adding event listeners):

startGameButton.addEventListener("onClick", addNumberToList);

// Add a number to our list (numbers, variables, selecting DOM elements, innerHTML):

let numberList = document.querySelector(".numberList");

let randomNumber = Math.floor(Math.random() * 10) + 1;

numberList.innerHTML = `<li>${randomNumber}</li>`;
