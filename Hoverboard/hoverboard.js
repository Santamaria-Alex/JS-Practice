const container = document.getElementById("container");
// const colors = ["red", "yellow", "green", "blue", "purple"];
const colors =
  "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
console.log(colors);
const SQUARES = 666;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square"); //adding the class of square that we first styled in css

  container.appendChild(square);

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
}

function setColor(element) {
  console.log(element);
  const color = getRandomColor();
  element.style.background = colors;
  element.style.boxShadow = `0 0 2px ${colors}, 0 0 10px ${colors}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

//get random color from colors array
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

console.log(getRandomColor());
