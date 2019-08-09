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
console.log(alphabet);

// Wins: id= `wins`
// Losses: id= `losses`
// Guesses Left: id= `tries`
// Letters Guessed: id= `guessed`

function game(event) {
  let computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
}
