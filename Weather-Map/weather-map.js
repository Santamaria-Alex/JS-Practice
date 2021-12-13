const OPEN_WEATHER_APPID = "6d7e5c317c7a39094e4ccf1e9b2d9297";
const coordinates = document.getElementById("coordinates");

const date = document.getElementById("date");
const temp = document.getElementById("temp");
const icon = document.getElementById("icon");
const description = document.getElementById("desc");
const humidty = document.getElementById("humi");
const wind = document.getElementById("wind");
const pressure = document.getElementById("pres");

const days = 5;

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

//request for san antonio weather
$.get("http://api.openweathermap.org/data/2.5/weather", {
  APPID: OPEN_WEATHER_APPID,
  q: "San Antonio, US",
  units: "imperial",
}).done(function (data) {
  console.log(data);
});

$.get("http://api.openweathermap.org/data/2.5/onecall", {
  APPID: OPEN_WEATHER_APPID,
  lat: 29.423017,
  lon: -98.48527,
  units: "imperial",
}).done(function (data) {
  console.log("The entire response:", data);
  console.log("Diving in - here is current information: ", data.current);
  console.log("A step further - information for tomorrow: ", data.daily[1]);
  console.log(data.date);

  //   date.innerHTML = data.
});
