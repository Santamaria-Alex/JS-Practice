const container = document.getElementById("container");

const cards = [
  {
    id: 1,
    name: "El Gallo",
  },
  {
    id: 2,
    name: "El Diablito",
  },
  {
    id: 3,
    name: "La Dama",
  },
  {
    id: 4,
    name: "El Catrin",
  },
  {
    id: 5,
    name: "El Paraguas",
  },
];

function random_item(cards) {
  return cards[Math.floor(Math.random() * cards.length)];
}

// var items = [254, 45, 212, 365, 2543];
console.log(random_item(cards));

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(4, 4);
