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
      scaledSize: new google.maps.Size(20, 20),  // Adjust the size (width, height)
      anchor: new google.maps.Point(10, 20)      // Adjust the anchor point (center of the image)
    }
  });
}
