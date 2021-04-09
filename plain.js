// RANDOM BETWEEN 1 AND 10 -> SET AS x

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

let x = getRandomNumber();

// PRINT x

function print(thing) {
  console.log(thing);
}

print(x);

// USER INPUT guess (“higher” OR “lower”)

function getUserInput(message) {
  return prompt(message);
}

let guess = getUserInput("Enter 'higher' or 'lower'");

while (guess !== "higher" && guess !== "lower") {
  guess = getUserInput("You can only enter 'higher' or 'lower'...");
}

// RANDOM BETWEEN 1 AND 10 -> SET AS y

let y = getRandomNumber();

// PRINT y

print(y);

// IF x > y AND guess EQUALS “lower” OR IF x < y AND guess EQUALS “higher”

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
