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
  //   let output = "";

  //   data.data.forEach((song) => {
  //     output += `
  //         <li>
  //             <span><strong>${song.artist.name}</strong> - ${song.title}</span>
  //             <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
  //         </li>
  //         `;
  //   });

  //   result.innerHTML = `
  //   <ul class="songs">
  //     ${output}
  //   </ul>
  //   `;

  //same result as above, but using map()
  result.innerHTML = `
    <ul class="songs">
        ${data.data
          .map(
            (song) => `<li>
        <span class="span"><strong>${song.artist.name}</strong> - ${song.title}<br> <div id="album">${song.album.title}</div></span>
        <button class="btn" data-artist="${song.artist.name}" data-songtitle="${song.title}">Get Lyrics</button>
    </li>`
          )
          .join("")}
    </ul>
  `;
  console.log(data);

  if (data.prev || data.next) {
    more.innerHTML = `
      ${
        data.prev
          ? `<button class="btn" onclick="getMoreSongs('${data.prev}')">Prev</button>`
          : ""
      }
      ${
        data.next
          ? `<button class="btn" onclick="getMoreSongs('${data.next}')">Next</button>`
          : ""
      }
    `;
  } else {
    more.innerHTML = "";
  }
}

//get prev and next songs
async function getMoreSongs(url) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
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

//get lyrics button
result.addEventListener("click", (e) => {
  const clickedEl = e.target;

  //only works if clicked on button
  if (clickedEl.tagName === "BUTTON") {
    const artist = clickedEl.getAttribute("data-artist");
    const songTitle = clickedEl.getAttribute("data-songtitle");

    getLyrics(artist, songTitle);
  }
});

// Get lyrics for song
async function getLyrics(artist, songTitle) {
  const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
  const data = await res.json();

  if (data.error) {
    result.innerHTML = data.error;
  } else {
    //this part replaces returns or lines breaks w <br>
    const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");

    result.innerHTML = `
              <h2><strong>${artist}</strong> - ${songTitle}</h2>
              <span>${lyrics}</span>
          `;
  }

  more.innerHTML = "";
}
