const container = document.getElementById("container");
const card_container = document.getElementById("card-container");
const card_details = document.getElementById("card-details");
const card_number = document.getElementById("card-number");
const card_name = document.getElementById("card-name");
const card_image = document.getElementById("card-image");

const nextCard = document.getElementById("next");

const deck_number = document.getElementById("deck-number");
const deck_name = document.getElementById("deck-name");
const deck_image = document.getElementById("deck-image");

let cards = [
  {
    id: 1,
    name: "El Gallo",
    photo: "../img/Gallo.jpg",
  },
  {
    id: 2,
    name: "El Diablito",
    photo: "../img/Diablito.jpg",
  },
  {
    id: 3,
    name: "La Dama",
    photo: "../img/Dama.jpg",
  },
  {
    id: 4,
    name: "El Catrin",
    photo: "../img/Catrin.jpg",
  },
  {
    id: 5,
    name: "El Paraguas",
    photo: "../img/Paraguas.jpg",
  },
  {
    id: 6,
    name: "La Sirena",
    photo: "../img/Sirena.jpg",
  },
  {
    id: 7,
    name: "La Escalera",
    photo: "../img/Escalera.jpg",
  },
  {
    id: 8,
    name: "La Botella",
    photo: "../img/Botella.jpg",
  },
  {
    id: 9,
    name: "El Barril",
    photo: "../img/Barril.jpg",
  },
  {
    id: 10,
    name: "El Arbol",
    photo: "../img/Arbol.jpg",
  },
  {
    id: 11,
    name: "El Melon",
    photo: "../img/Melon.jpg",
  },
  {
    id: 12,
    name: "El Valiente",
    photo: "../img/Valiente.jpg",
  },
  {
    id: 13,
    name: "El Gorrito",
    photo: "../img/Gorrito.jpg",
  },
  {
    id: 14,
    name: "La Muerte",
    photo: "../img/Muerte.jpg",
  },
  {
    id: 15,
    name: "La Pera",
    photo: "../img/Pera.jpg",
  },
  {
    id: 16,
    name: "La Bandera",
    photo: "../img/Bandera.jpg",
  },
  {
    id: 17,
    name: "El Bandolon",
    photo: "../img/Bandolon.jpg",
  },
  {
    id: 18,
    name: "El Violencello",
    photo: "../img/Violencello.jpg",
  },
  {
    id: 19,
    name: "La Garza",
    photo: "../img/Garza.jpg",
  },
  {
    id: 20,
    name: "El Pajaro",
    photo: "../img/Pajaro.jpg",
  },
  {
    id: 21,
    name: "La Mano",
    photo: "../img/Mano.jpg",
  },
  {
    id: 22,
    name: "La Bota",
    photo: "../img/Bota.jpg",
  },
  {
    id: 23,
    name: "La Luna",
    photo: "../img/Luna.jpg",
  },
  {
    id: 24,
    name: "El Cotorro",
    photo: "../img/Cotorro.jpg",
  },
  {
    id: 25,
    name: "El Borracho",
    photo: "../img/Borracho.jpg",
  },
  {
    id: 26,
    name: "El webDev",
    photo: "../img/WebDev.jpg",
  },
  {
    id: 27,
    name: "El Corazon",
    photo: "../img/Corazon.jpg",
  },
  {
    id: 28,
    name: "La Sandia",
    photo: "../img/Sandia.jpg",
  },
  {
    id: 29,
    name: "El Tambor",
    photo: "../img/Tambor.jpg",
  },
  {
    id: 30,
    name: "El Camaron",
    photo: "../img/Camaron.jpg",
  },
  {
    id: 31,
    name: "Las Jaras",
    photo: "../img/Jaras.jpg",
  },
  {
    id: 32,
    name: "El Musico",
    photo: "../img/Musico.jpg",
  },
  {
    id: 33,
    name: "La Arana",
    photo: "../img/Arana.jpg",
  },
  {
    id: 34,
    name: "El Soldado",
    photo: "../img/Soldado.jpg",
  },
  {
    id: 35,
    name: "La Estrella",
    photo: "../img/Estrella.jpg",
  },
  {
    id: 36,
    name: "El Cazo",
    photo: "../img/Cazo.jpg",
  },
  {
    id: 37,
    name: "El Mundo",
    photo: "../img/Mundo.jpg",
  },
  {
    id: 38,
    name: "El Apache",
    photo: "../img/Apache.jpg",
  },
  {
    id: 39,
    name: "El Nopal",
    photo: "../img/Nopal.jpg",
  },
  {
    id: 40,
    name: "El Alacran",
    photo: "../img/Alacran.jpg",
  },
  {
    id: 41,
    name: "La Rosa",
    photo: "../img/Rosa.jpg",
  },
  {
    id: 42,
    name: "La Calavera",
    photo: "../img/Calavera.jpg",
  },
  {
    id: 43,
    name: "La Campana",
    photo: "../img/Campana.jpg",
  },
  {
    id: 44,
    name: "El Cantarito",
    photo: "../img/Cantarito.jpg",
  },
  {
    id: 45,
    name: "El Venado",
    photo: "../img/Venado.jpg",
  },
  {
    id: 46,
    name: "El Sol",
    photo: "../img/Sol.jpg",
  },
  {
    id: 47,
    name: "La Corona",
    photo: "../img/Corona.jpg",
  },
  {
    id: 48,
    name: "La Chalupa",
    photo: "../img/Chalupa.jpg",
  },
  {
    id: 49,
    name: "El Pino",
    photo: "../img/Pino.jpg",
  },
  {
    id: 50,
    name: "El Pescado",
    photo: "../img/Pescado.jpg",
  },
  {
    id: 51,
    name: "La Palma",
    photo: "../img/Palma.jpg",
  },
  {
    id: 52,
    name: "La Maceta",
    photo: "../img/Maceta.jpg",
  },
  {
    id: 53,
    name: "El Arpa",
    photo: "../img/Arpa.jpg",
  },
  {
    id: 54,
    name: "La Rana",
    photo: "../img/Rana.jpg",
  },
];

const randomItem = (cards) => {
  return cards[Math.floor(Math.random() * cards.length)];
};
console.log(randomItem(cards));

//to make loteria board
function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    // let cell = document.createElement("img");
    let cell = document.createElement("div");
    // cell.src = "../img/Gallo.jpg";
    // cell.innerText = c + 1;

    const { id, name, photo } = randomItem(cards);

    const card_block = `
<div class="card-container" id="card-container">
    <div class="card-details" id="card-details">
        <div class="number" id="card-number">${id}</div>
        <div class="card-name" id="card-name">${name}</div>
    </div>
    <img src=${photo} alt="loteria" id="card-image"/>
</div>
`;

    cell.innerHTML = card_block;

    // cell.innerHTML = `${id}. ${name}`;

    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(4, 4);

//to get next card from deck
// nextCard.addEventListener("click", () => {
//   if (!cards.length) return;
//   //   let newDeck = cards.splice(randomItem(cards), 1);
//   //   cards = cards.filter(card => person.name != 'John');
//   //   let newDeck = cards.filter(randomItem());

//   let cardRemoved = randomItem(cards);
//   let newDeck = cards.splice(cardRemoved, 1);

//   console.log(newDeck);

//   const { id, name, photo } = randomItem(cards);
//   deck_number.innerHTML = id;
//   deck_name.innerHTML = name;
//   deck_image.src = photo;
// });

nextCard.addEventListener("click", getNextCard);

function getNextCard() {
  if (!cards.length) return;
  const randomIndex = Math.floor(Math.random() * cards.length);

  for (var i = 0; i < cards.length; i++)
    if (cards[i].id === randomIndex) {
      cards.splice(i, 1);
      break;
    }

  console.log(cards);
  console.log(randomIndex);
}
// getNextCard();

// document.querySelector("button").addEventListener("click", getNextCard);

// const videoFns = Array.from(
//   { length: 5 },
//   (_, i) => () => console.log("video " + i)
// );
// function playNextVideo() {
//   if (!videoFns.length) return;
//   const randomIndex = Math.floor(Math.random() * videoFns.length);
//   const [videoFn] = videoFns.splice(randomIndex, 1);
//   videoFn();
// }
// document.querySelector("button").addEventListener("click", playNextVideo);
