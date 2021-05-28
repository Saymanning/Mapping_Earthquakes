// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([47.4, -98.2], 4);

// Get data from cities.js
let cityData = cities;


// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
  console.log(city)
  L.circleMarker(city.location, {
    radius: (city.population-200000)/100000,
    color: 'orange',
    weight: 10
  })
.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
.addTo(map);
});

// add a circleMarker alternative in pixel (resize with zoom)
  // L.circleMarker([37.3541, -121.9552], {
  // radius: 30,
  // color: 'black',
  // fillColor: '#ffffa1'
  // }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
accessToken: API_KEY
});
// styles available here: https://docs.mapbox.com/api/maps/styles/

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);