const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

//search by song or artist
// function searchSongs(term) {
//   fetch(`${apiURL}/suggest/${term}`)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

//async await formula
async function searchSongs(term) {
  const res = await fetch(`${apiURL}/suggest/${term}`);
  const data = await res.json();

  showData(data);
}

//event listener
form.addEventListener("submit", (e) => {
  e.preventDefault(); //should always have when submitting form

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("You haven't typed anything.");
  } else {
    searchSongs(searchTerm);
  }
});
