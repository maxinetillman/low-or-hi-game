// RANDOM BETWEEN 1 AND 10 -> SET AS x

// Search: 'get random number js', 'save number in js', 'mdn js how to use same code'

// let x = Math.floor(Math.random() * 10) + 1;

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

let x = getRandomNumber();

// PRINT x

// Search 'how to print in console'

function print(thing) {
  console.log(thing);
}

print(x);

// USER INPUT BOX guess (“higher” OR “lower”)

// Search 'get user input box'

function getUserInput(message) {
  return prompt(message);
}

let guess = getUserInput("Enter 'higher' or 'lower'");

while (guess !== "higher" && guess !== "lower") {
  guess = getUserInput("You can only enter 'higher' or 'lower'...");
}

// RANDOM BETWEEN 1 AND 10 -> SET AS y

// repeated logic

let y = getRandomNumber();

// PRINT y

// repeated logic

print(y);

// IF x > y AND guess EQUALS “lower” OR IF x < y AND guess EQUALS “higher”

// search 'if one thing or another thing js'

if (x > y && guess === "lower") {
  print("winner");
}

if (x < y && guess === "higher") {
  print("winner");
}

// y -> SET AS x

y = x;

// GO TO 3
// STOP
