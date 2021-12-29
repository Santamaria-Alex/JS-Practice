const OPEN_WEATHER_APPID = "6d7e5c317c7a39094e4ccf1e9b2d9297";
const coordinates = document.getElementById("coordinates");

const form = document.getElementById("form");
const search = document.getElementById("search");

const date = document.getElementById("date");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const desc = document.getElementById("desc");
const humi = document.getElementById("humi");
const wind = document.getElementById("wind");
const pres = document.getElementById("pres");

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

  //request for san antonio weather
  $.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    q: `${inputValue}`,
    units: "imperial",
  }).done(function (data) {
    console.log(data);
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    $.get("http://api.openweathermap.org/data/2.5/onecall", {
      APPID: OPEN_WEATHER_APPID,
      lat: `${lat}`,
      lon: `${lon}`,
      units: "imperial",
    }).done(function (data) {
      console.log("The entire response:", data);
      //   console.log("Diving in - here is current information: ", data.current);
      //   console.log("A step further - information for tomorrow: ", data.daily[1]);
      //   console.log(data);

      temp.innerHTML = `Temperature: ${data.current.temp}\u00B0 F`;
      const weatherIcon = data.current.weather[0].icon;

      icon.innerHTML = `<img
      src="http://openweathermap.org/img/w/${weatherIcon}.png"
      alt=""
      />`;
      desc.innerHTML = `Description: ${data.current.weather[0].description}`;
      humi.innerHTML = `Humidity: ${data.current.humidity}`;
      wind.innerHTML = `Wind Speed: ${data.current.wind_speed}`;
      pres.innerHTML = `Pressure: ${data.current.pressure}`;
    });
  });

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
