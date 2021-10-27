const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

generateJoke();

//must label function as async when using await inside that function
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const response = await fetch("https://icanhazdadjoke.com", config);

  const data = await response.json();

  jokeEl.innerHTML = data.joke;

  // function generateJoke() {
  //   const config = {
  //     headers: {
  //       Accept: "application/json",
  //     },
  //   };

  //   fetch("https://icanhazdadjoke.com", config)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       jokeEl.innerHTML = data.joke;
  //     });
}

jokeBtn.addEventListener("click", generateJoke);
