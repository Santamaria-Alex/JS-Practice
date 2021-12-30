const OPEN_WEATHER_APPID = "6d7e5c317c7a39094e4ccf1e9b2d9297";
const coordinates = document.getElementById("coordinates");

const form = document.getElementById("form");
const search = document.getElementById("search");
const city = document.getElementById("city");
const hideIcon = document.getElementById("hideIcon");
const hideContainer = document.getElementById("hideContainer");
const container = document.getElementById("container");

const date = document.getElementById("date");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const desc = document.getElementById("desc");
const humi = document.getElementById("humi");
const wind = document.getElementById("wind");
const pres = document.getElementById("pres");

const days = 5;

// let currentDate = new Date().toString().split(" ").splice(0, 4).join(" ");
// console.log(currentDate);

//loop through CONST DAYS to get 5 total dates
for (i = 0; i < days; i++) {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + i);
  console.log(currentDate.toString().split(" ").splice(0, 4).join(" "));
}

const accessToken =
  "pk.eyJ1Ijoic2FudGFtYXJpYTkzIiwiYSI6ImNrd3kzZjdlMTBoN2Qyb210MTJmMHQ5cW8ifQ.J9P4CmlfsCXpKL0QdRM6nw";

mapboxgl.accessToken = accessToken;

//displays map to page
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  zoom: 10,
  center: [-98.4916, 29.4252],
});

function geocode(search, token) {
  var baseUrl = "https://api.mapbox.com";
  var endPoint = "/geocoding/v5/mapbox.places/";
  return fetch(
    baseUrl +
      endPoint +
      encodeURIComponent(search) +
      ".json" +
      "?" +
      "access_token=" +
      token
  )
    .then(function (res) {
      return res.json();
      // to get all the data from the request, comment out the following three lines...
    })
    .then(function (data) {
      return data.features[0].center;
    });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = search.value;
  console.log(inputValue);

  for (let i = 0; i < days; i++) {
    //get 5 total days
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + i);

    //request for san antonio weather
    $.get("http://api.openweathermap.org/data/2.5/weather", {
      APPID: OPEN_WEATHER_APPID,
      q: `${inputValue}`,
      units: "imperial",
    }).done(function (data) {
      console.log(data);
      const lat = data.coord.lat;
      const lon = data.coord.lon;
      city.innerHTML = `${data.name}`;
      hideContainer.classList.remove("hideContainer");
      const tempH = data.main.temp_max;
      const tempL = data.main.temp_max;
      //   temp.innerHTML = `H:${data.main.temp_max}\u00B0F / L:${data.main.temp_min}\u00B0F`;

      $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_APPID,
        lat: `${lat}`,
        lon: `${lon}`,
        units: "imperial",
      }).done(function (data2) {
        console.log("The entire response:", data2);
        //   console.log("Diving in - here is current information: ", data.current);
        console.log(
          "A step further - information for tomorrow: ",
          data2.daily[1]
        );
        //   console.log(data);
        const description = data2.current.weather[0].description;

        // date.innerHTML = `${currentDate}`;
        const weatherIcon = data2.current.weather[0].icon;
        //     icon.innerHTML = `<img
        //   src="http://openweathermap.org/img/w/${weatherIcon}.png"
        //   alt=""
        //   />`;
        const desc2 = `${description
          .charAt(0)
          .toUpperCase()}${description.slice(1)}`;
        // desc.innerHTML = `${description
        //   .charAt(0)
        //   .toUpperCase()}${description.slice(1)}`;
        const humi2 = data2.current.humidity;
        // humi.innerHTML = `Humidity: ${data.current.humidity}`;
        const wind2 = data2.current.wind_speed;
        // wind.innerHTML = `Wind Speed: ${data.current.wind_speed}`;
        const pres2 = data2.current.pressure;
        // pres.innerHTML = `Pressure: ${data.current.pressure}`;

        const weatherInnerHtml = `
        <h3 id="date" class="date">${currentDate
          .toString()
          .split(" ")
          .splice(0, 4)
          .join(" ")}</h3>
        <div class="info-container">
          <p id="temp" class="temp">H:${tempH}\u00B0F / L:${tempL}\u00B0F</p>
          <div class="hideIcon" id="hideIcon">
            <img id="icon" class="icon" src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="">
          </div>
          <p id="desc" class="desc">${desc2}</p>
          <p id="humi">Humidity:${humi2}</p>
          <p id="wind">Wind:${wind2}</p>
          <p id="pres">Pressure:${pres2}</p>
        </div>
        `;

        const weatherEl = document.createElement("div");
        weatherEl.innerHTML = weatherInnerHtml;

        container.appendChild(weatherEl);
      });
    });
  }

  function placeMarkerAndPopup(info, token, map) {
    geocode(`${inputValue}`, token).then(function (coordinates) {
      var popup = new mapboxgl.Popup().setHTML(`${inputValue}`);
      var marker = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map)
        .setPopup(popup);
      //   popup.addTo(map);
      map.setCenter(coordinates);
      map.setZoom(8);

      console.log(coordinates);
    });
  }

  placeMarkerAndPopup(`${inputValue}`, accessToken, map);
  // });

  geocode(`${inputValue}`, accessToken).then(function (result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(9);
  });
});
