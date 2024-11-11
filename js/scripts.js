function initMap() {
  var location = {lat: -34.397, lng: 150.644};  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: location,
    zoomControl: false  // Disable the default zoom controls
  });

  // Custom zoom-in button
  document.getElementById('zoom-in').addEventListener('click', function() {
    var currentZoom = map.getZoom();
    map.setZoom(currentZoom + 1);  // Zoom in
  });

  // Custom zoom-out button
  document.getElementById('zoom-out').addEventListener('click', function() {
    var currentZoom = map.getZoom();
    map.setZoom(currentZoom - 1);  // Zoom out
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map,
    icon: {
      url: 'images/arrow-icon.png',
      scaledSize: new google.maps.Size(20, 20),
      anchor: new google.maps.Point(10, 20)
    }
  });

  var offset = 0;
  var direction = 1;

  function animateMarker() {
    var newLat = location.lat + (offset * 0.0015);
    marker.setPosition({lat: newLat, lng: location.lng});
    offset += direction;
    if (offset > 10 || offset < -10) {
      direction *= -1;
    }
    setTimeout(animateMarker, 70);
  }

  animateMarker();
}
