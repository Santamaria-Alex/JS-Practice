const container = document.querySelector(".container");
const unsplashURL = "https://source.unsplash.com/random/";
const rows = 4;
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  for (let i = 0; i < rows; i++) {
    const img = document.createElement("img");
    img.src = `${unsplashURL}${getRandomSize()}`;
    container.appendChild(img);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300;
  }

  function getRandomSize() {
    return `${getRandomNumber()}x${getRandomNumber()}`;
  }

  console.log(getRandomSize());
});
