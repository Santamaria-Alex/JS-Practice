const image = document.getElementById("dog");
const btn = document.getElementById("btn");

function getDogs() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      // jokeEl.innerHTML = data.joke;
      console.log(data);

      const dogImage = data.message;

      console.log(dogImage);

      const img = document.createElement("img");
      img.src = `${dogImage}`;
      image.appendChild(img);
    });
}

// getDogs();

btn.addEventListener("click", getDogs);

// btn.addEventListener("click", () => {
//     for (let i = 0; i < rows; i++) {
//       const img = document.createElement("img");
//       img.src = `${unsplashURL}${getRandomSize()}`;
//       container.appendChild(img);
//     }
