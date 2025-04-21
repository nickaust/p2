/*
    CIT 281 Project 2
    Name: Nick Austin
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
  result += alphabet[getRandomInteger(1, alphabet.length - 1)];
}

console.log(getRandomString());

// Returns a single random lowercase letter
function getRandomLetter() {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(getRandomLetter());

// Returns the random length string
function getRandomString(minLength = 10, maxLength = 20) {
  const length =
    Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = "";
  for (let j = 0; j < length; j++) {
    result += getRandomLetter();
  }
  return result;
}

// Return a string in ascending order alphabetically
const getSortedString = string => string.split('').sort().join('');

console.log(getSortedString(getRandomString()));