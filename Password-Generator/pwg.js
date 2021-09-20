const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; // the '+' converts string to number
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;

  //filter out false values based on whether 'checked' or not.
  //if not checked, value = false
  //Object.values() Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
  const typesArray = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  //get a blank if everything is unchecked
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArray.forEach((type) => {
      const funcName = Object.keys(type)[0]; //Object.keys() returns the property names, in this case from typesArray (lower, upper, number, symbol).

      //append to generatedPassword randomFunction object where each property value = the propert name being called in funcName.
      generatedPassword += randomFunction[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length); //returns eveything from index 0 to max password length set by user
  console.log(finalPassword);

  return finalPassword;
}

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

//copy to clipboard
clipboardEl.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;

  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard!");
});
