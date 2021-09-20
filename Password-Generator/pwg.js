//gets a random lowercase letter
//String.fromCharCode gets the letter's Code.
// letter 'a' starts at 97, 'z' is 122
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  //uppercase A starts at 65
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  //the number 0 starts at 48
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
