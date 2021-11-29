const container = document.getElementById("container");
const btn = document.getElementById("btn");
const search = document.getElementById("search");

const test = document.getElementById("test");

container.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchDictionary = search.value;

  console.log(searchDictionary);

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchDictionary}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const info = data[0].meanings[0].definitions[0].definition;
      const partOfSpeech = data[0].meanings[0].partOfSpeech;

      console.log(partOfSpeech);

      console.log(info);

      test.innerText = `${partOfSpeech}. ${info}`;
    });
});
