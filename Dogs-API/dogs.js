const image = document.getElementById("dog");

function getDogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      // jokeEl.innerHTML = data.joke;
      console.log(data);

      const dogImage = data.message;

      console.log(dogImage);
    });
}

getDogs();
