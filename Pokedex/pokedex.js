const poke_container = document.getElementById("poke-container");
const pokemon_count = 150;

//set each pokemon type to a color
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

//makes the colors into an object with properties
//returns the keys (fire, grass, etc..)
const main_types = Object.keys(colors);
console.log(main_types);

//gets pokemon data
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  createPokemonCard(data);
  console.log(data);
};

const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  //to uppercase the first letter
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  //makes the id 3 digits, if the id is single char, will add 0 in front
  //ex: 001, 010, 100
  const id = pokemon.id.toString().padStart(3, "0");

  //get all the types of the pokemon
  //some have more than one type
  //types is an object, type is the key, name is the property
  const poke_types = pokemon.types.map((types) => types.type.name);
  //   console.log(poke_types);

  //get the type
  //The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
  //check to see if the indexOf is > (-1) bc if there isn't a match, indexOf returns a (-1)
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  //   console.log(type);

  //color of the card based on type
  const color = colors[type]; //colors come from the object we created
  pokemonEl.style.backgroundColor = color;

  const pokemonInnerHTML = `
    <div class="img-container">
        <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
        alt=""
        />
  </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
    `;

  pokemonEl.innerHTML = pokemonInnerHTML;

  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
