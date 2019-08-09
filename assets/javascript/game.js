// create array of letters for computer to choose from
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Wins: id= `wins`
// Losses: id= `losses`
// Guesses Left: id= `tries`
// Letters Guessed: id= `guessed`

// create variables and their reference points in the html.
let wins = 0;
let losses = 0;
let tries = -10;
let guessed = [];

let winsText = document.getElementById("wins");
let lossesText = document.getElementById("losses");
let triesText = document.getElementById("tries");
let guessedText = document.getElementById("guessed");

// function to determine Computer's letter choice
function compChoice() {
  const computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(`Compute chose '${computerGuess}'`);
}

// function to start new game upon completion of old game
function newGame() {
  compChoice();
  let tries = -10;
  triesText = tries;
  guessedText.textContent = "Make your first guess!";
  let guessed = [];
}
// determining Computer's initial letter choice
compChoice();

// function to determine whether user input matches Computer choice
document.onkeyup = function playGame(event) {
  let userGuess = event.key;
  if (tries == 0) {
    newGame();
    losses++;
  } else if (userGuess == computerGuess) {
    wins++;
    console.log(`winner winner, chicken dinner`);
  } else {
    console.log(`wrong.`);
    tries++;
    triesText.textContent = -tries;
    guessed.push(` ${userGuess}`);
  }
  guessedText.textContent = guessed.toString;
  //   document.getElementById("#guessed") = guessed.toString;
  winsText.textContent = wins;
  lossesText.textContent = losses;
};
