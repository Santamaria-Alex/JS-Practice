const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile-img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="../img/guitar.jpg" alt="" />';

  title.innerHTML = "Lorem ipsum dolor sit amet.";

  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione?";

  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';

  name.innerHTML = "John Cena";

  date.innerHTML = "November 1, 2021";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_texts.forEach((text) => text.classList.remove("animated-bg-text"));
}
