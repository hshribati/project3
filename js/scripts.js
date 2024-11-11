// Initialize the map when the API is loaded
function initMap() {
  var location = {lat: -34.397, lng: 150.644};  // Change this to your desired location
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
