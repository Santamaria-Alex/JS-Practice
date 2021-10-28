const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Hate Programming";
let index = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
  //gets the letter from 0 to index, index keeps increasing so we get the full text bc we keep calling writeText() with setTimeout
  textEl.innerHTML = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 1;
  }

  setTimeout(writeText, speed);
}

speedEl.addEventListener(
  "input",
  (event) => (speed = 300 / event.target.value)
);
