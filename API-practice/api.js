const container = document.getElementById("container");
const btn = document.getElementById("btn");
const search = document.getElementById("search");

const test = document.getElementById("test");

function dictionary() {
  fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const info = data[0].meanings[0].definitions[0].definition;

      console.log(info);
    });
}

dictionary();
