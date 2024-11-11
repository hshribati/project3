function initMap() {
  var location = {lat: -34.397, lng: 150.644};  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: location
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: {
      url: 'images/arrow-icon.png',  // Path to your arrow image
      scaledSize: new google.maps.Size(20, 20),
      anchor: new google.maps.Point(10, 20)
    }
  });

  var offset = 0;
  var direction = 1;

  function animateMarker() {
    // Adjust marker's vertical position to create the movement
    var newLat = location.lat + (offset * 0.0001);  // Adjust the multiplier to change the movement range

    marker.setPosition({lat: newLat, lng: location.lng});

    // Toggle the direction
    offset += direction;
    if (offset > 10 || offset < -10) {
      direction *= -1;  // Change direction when the marker moves too far up or down
    }

    // Call this function again after 50ms for continuous movement
    setTimeout(animateMarker, 50);
  }

  // Start the animation
  animateMarker();
}
