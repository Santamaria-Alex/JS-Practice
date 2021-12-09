const coordinates = document.getElementById("coordinates");

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FudGFtYXJpYTkzIiwiYSI6ImNrd3kzZjdlMTBoN2Qyb210MTJmMHQ5cW8ifQ.J9P4CmlfsCXpKL0QdRM6nw";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  zoom: 10,
  center: [-98.4916, 29.4252],
});

var marker = new mapboxgl.Marker({
  color: "red",
  draggable: true,
})
  .setLngLat([-98.4916, 29.426])
  .addTo(map);

function onDragEnd() {
  const lngLat = marker.getLngLat();
  coordinates.style.display = "block";
  coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

marker.on("dragend", onDragEnd);

//POPUP
var popup = new mapboxgl.Popup()
  .setLngLat([-98.489615, 29.426827])
  .setHTML("<p>Codeup Rocks!</p>")
  .addTo(map);
