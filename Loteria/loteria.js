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
  {
    id: 6,
    name: "La Sirena",
  },
  {
    id: 7,
    name: "La Escalera",
  },
  {
    id: 8,
    name: "La Botella",
  },
  {
    id: 9,
    name: "El Barril",
  },
  {
    id: 10,
    name: "El Arbol",
  },
  {
    id: 11,
    name: "El Melon",
  },
  {
    id: 12,
    name: "El Valiente",
  },
  {
    id: 13,
    name: "El Gorrito",
  },
  {
    id: 14,
    name: "La Muerte",
  },
  {
    id: 15,
    name: "La Pera",
  },
  {
    id: 16,
    name: "La Bandera",
  },
  {
    id: 17,
    name: "El Bandolon",
  },
  {
    id: 18,
    name: "El Violencello",
  },
  {
    id: 19,
    name: "La Garza",
  },
  {
    id: 20,
    name: "El Pajaro",
  },
  {
    id: 21,
    name: "La Mano",
  },
  {
    id: 22,
    name: "La Bota",
  },
  {
    id: 23,
    name: "La Luna",
  },
  {
    id: 24,
    name: "El Cotorro",
  },
  {
    id: 25,
    name: "El Borracho",
  },
  {
    id: 26,
    name: "El Negrito",
  },
  {
    id: 27,
    name: "El Corazon",
  },
  {
    id: 28,
    name: "La Sandia",
  },
  {
    id: 29,
    name: "El Tambor",
  },
  {
    id: 30,
    name: "El Camaron",
  },
  {
    id: 31,
    name: "Las Jaras",
  },
  {
    id: 32,
    name: "El Musico",
  },
  {
    id: 33,
    name: "La Arana",
  },
  {
    id: 34,
    name: "El Soldado",
  },
  {
    id: 35,
    name: "La Estrella",
  },
  {
    id: 36,
    name: "El Cazo",
  },
  {
    id: 37,
    name: "El Mundo",
  },
  {
    id: 38,
    name: "El Apache",
  },
  {
    id: 39,
    name: "El Nopal",
  },
  {
    id: 40,
    name: "El Alacran",
  },
  {
    id: 41,
    name: "La Rosa",
  },
  {
    id: 42,
    name: "La Calavera",
  },
  {
    id: 43,
    name: "La Campana",
  },
  {
    id: 44,
    name: "El Cantarito",
  },
  {
    id: 45,
    name: "El Venado",
  },
  {
    id: 46,
    name: "El Sol",
  },
  {
    id: 47,
    name: "La Corona",
  },
  {
    id: 48,
    name: "La Chalupa",
  },
  {
    id: 49,
    name: "El Pino",
  },
  {
    id: 50,
    name: "El Pescado",
  },
  {
    id: 51,
    name: "La Palma",
  },
  {
    id: 52,
    name: "La Maceta",
  },
  {
    id: 53,
    name: "El Arpa",
  },
  {
    id: 54,
    name: "La Rana",
  },
];

function random_item(cards) {
  return cards[Math.floor(Math.random() * cards.length)];
}

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
