const coordinates = document.getElementById("coordinates");
const search = document.getElementById("search");
const form = document.getElementById("form");
const accessToken =
  "pk.eyJ1Ijoic2FudGFtYXJpYTkzIiwiYSI6ImNrd3kzZjdlMTBoN2Qyb210MTJmMHQ5cW8ifQ.J9P4CmlfsCXpKL0QdRM6nw";

mapboxgl.accessToken = accessToken;

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  zoom: 10,
  center: [-98.4916, 29.4252],
});

// var marker = new mapboxgl.Marker({
//   color: "red",
//   draggable: true,
// })
//   .setLngLat([-98.4916, 29.426])
//   .addTo(map);

function onDragEnd() {
  const lngLat = marker.getLngLat();
  coordinates.style.display = "block";
  coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
}

// marker.on("dragend", onDragEnd);

//POPUP
// var popup = new mapboxgl.Popup()
//   .setLngLat([-98.489615, 29.426827])
//   .setHTML("<p>Codeup Rocks!</p>")
//   .addTo(map);

var alamoPopup = new mapboxgl.Popup()
  .setHTML("<p>Remember The Alamo!</p>")
  .addTo(map);

//set the popup onto the marker defined above
// marker.setPopup(alamoPopup);

//////////////////////
//geocode//

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

// geocode("600 Navarro St #350, San Antonio, TX 78205", accessToken).then(
//   function (result) {
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(15);
//   }
// );

////////////REVERSE GEOCODING//////////////

//we need this function to be able to use geocode
function reverseGeocode(coordinates, token) {
  var baseUrl = "https://api.mapbox.com";
  var endPoint = "/geocoding/v5/mapbox.places/";
  return (
    fetch(
      baseUrl +
        endPoint +
        coordinates.lng +
        "," +
        coordinates.lat +
        ".json" +
        "?" +
        "access_token=" +
        token
    )
      .then(function (res) {
        return res.json();
      })
      // to get all the data from the request, comment out the following three lines...
      .then(function (data) {
        return data.features[0].place_name;
      })
  );
}

// reverseGeocode({ lng: -98.4861, lat: 29.426 }, accessToken).then(function (
//   results
// ) {
//   // logs the address for The Alamo
//   console.log(results);
// });

var alamoInfo = {
  address: "The Alamo San Antonio",
  popupHTML: "<p>Remember the Alamo!</p>",
};

// function placeMarkerAndPopup(info, token, map) {
//   geocode(info.address, token).then(function (coordinates) {
//     var popup = new mapboxgl.Popup().setHTML(info.popupHTML);
//     var marker = new mapboxgl.Marker()
//       .setLngLat(coordinates)
//       .addTo(map)
//       .setPopup(popup);
//     // popup.addTo(map);

//     console.log(info);
//   });
// }

// placeMarkerAndPopup(alamoInfo, accessToken, map);

///////////event listener
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const searchInput = search.value;

//   console.log(searchInput);

//   function placeMarkerAndPopup(info, token, map) {
//     geocode(`${searchInput}`, token).then(function (coordinates) {
//       var popup = new mapboxgl.Popup().setHTML(`${searchInput}`);
//       var marker = new mapboxgl.Marker()
//         .setLngLat(coordinates)
//         .addTo(map)
//         .setPopup(popup);
//       popup.addTo(map);
//       map.setCenter(coordinates);
//       map.setZoom(8);

//       console.log(coordinates);
//     });
//   }

//   placeMarkerAndPopup(`${searchInput}`, accessToken, map);
// });

// geocode(`${searchInput}`, accessToken).then(function (result) {
//   console.log(result);
//   map.setCenter(result);
//   map.setZoom(15);
// });

map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
  })
);
