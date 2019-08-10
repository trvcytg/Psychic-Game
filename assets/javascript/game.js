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
  computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(`Computer chose: ${computerGuess}`);
}

// function to start new game upon completion of old game
function newGame() {
  compChoice();
  tries = -10;
  triesText.textContent = -tries;
  guessedText.textContent = "Make your first guess!";
  lossesText.textContent = losses;
  guessed.length = 0;
}
// determining Computer's initial letter choice
compChoice();

// function to determine whether user input matches Computer choice
document.onkeyup = function playGame(event) {
  let userGuess = event.key.toLocaleLowerCase();
  console.log(`you pressed: ${userGuess}`);
  if (alphabet.includes(userGuess)) {
    if (userGuess == computerGuess) {
      wins++;
      console.log(`winner winner, chicken dinner`);
      newGame();
      guessedText.textContent = guessed;
    } else {
      console.log(`wrong.`);
      tries++;
      triesText.textContent = -tries;
      guessed.push(` ${userGuess}`);
      console.log(`You've already guessed: ${guessed}`);
      guessedText.textContent = guessed;
    }
    console.log(`Number of tries remaining: ${-tries}`);
    if (tries == 0) {
      losses++;
      newGame();
      guessedText.textContent = guessed;
    }
    // } else if (userGuess == `meta`) {
    //   alert(`Did you just refresh? We'll give you grace this time.`);
  } else if (
    userGuess == "meta" ||
    userGuess == `shift` ||
    userGuess == `capslock`
  ) {
  } else {
    alert(`That's not even a letter.... you wasted one of your guesses..`);
    tries++;
    triesText.textContent = -tries;
    guessed.push(` ${userGuess}`);
    console.log(`You've already guessed: ${guessed}`);
    guessedText.textContent = guessed;
  }

  winsText.textContent = wins;
  lossesText.textContent = losses;
};

// if (userGuess) {
// }
