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

//show song and artist in DOM
function showData(data) {
  let output = "";

  data.data.forEach((song) => {
    output += `
        <li>
            <span><strong>${song.artist.name}</strong> - ${song.title}</span>
            <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
        </li>
        `;
  });

  result.innerHTML = `
  <ul class="songs">
    ${output}
  </ul>
  `;
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
