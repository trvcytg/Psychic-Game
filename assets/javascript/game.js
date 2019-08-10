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

// function for user to choose number of tries
function tryHard() {
  let tries = prompt("How many tries would you like?", `${10}`);
  tries = parseInt(tries, 10);
  if (Number.isInteger(tries) > 0) {
    triesText.textContent = tries;
    return tries;
  } else if (isNaN(tries)) {
    tries = 10;
    triesText.textContent = tries;
    console.log(`default ${tries}`);
    return tries;
  } else {
    alert(`That's not a number!`);
    tryHard();
  }
}

// create variables and their reference points in the html.
let wins = 0;
let losses = 0;
let tries = 10;
// let tries = 10;
// let tries = prompt("How many tries would you like?", `${10}`);

let guessed = [];

let winsText = document.getElementById("wins");
let lossesText = document.getElementById("losses");
let triesText = document.getElementById("tries");
let guessedText = document.getElementById("guessed");

// Call function for user to determine number of tries
tries = tryHard();

// function to determine Computer's letter choice
function compChoice() {
  computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log(`Computer chose: ${computerGuess}`);
}

// function to start new game upon completion of old game
function newGame() {
  compChoice();
  tries = tryHard();
  guessedText.textContent = "Make your first guess!";
  lossesText.textContent = losses;
  guessed.length = 0;
}
// determining Computer's initial letter choice
compChoice();

// function to determine whether user input matches Computer choice and make appropriate changes to win, loss, chances left, and letters picked
document.onkeyup = function playGame(event) {
  let userGuess = event.key.toLocaleLowerCase();
  console.log(`you pressed: ${userGuess}`);
  if (alphabet.includes(userGuess)) {
    if (userGuess == computerGuess) {
      wins++;
      console.log(`winner winner, chicken dinner`);
      alert(`Winner!! Congrats, you clairvoyant fool.`);
      newGame();
      guessedText.textContent = guessed;
    } else {
      console.log(`wrong.`);
      tries--;
      triesText.textContent = tries;
      guessed.push(` ${userGuess}`);
      console.log(`You've already guessed: ${guessed}`);
      guessedText.textContent = guessed;
    }
    console.log(`Number of tries remaining: ${tries}`);
    if (tries == 0) {
      losses++;
      console.log(`well, I guess you tried, still a loser though.`);
      alert(
        `Well.. I wouldn't recommend trying the lottery anytime soon. You lost.`
      );
      newGame();
      guessedText.textContent = guessed;
    }
  } else if (
    userGuess == `meta` ||
    userGuess == `shift` ||
    userGuess == `capslock`
  ) {
  } else {
    alert(`That's not even a letter.... you wasted one of your guesses..`);
    tries--;
    triesText.textContent = tries;
    guessed.push(` ${userGuess}`);
    console.log(`You've already guessed: ${guessed}`);
    guessedText.textContent = guessed;
  }

  winsText.textContent = wins;
  lossesText.textContent = losses;
};
