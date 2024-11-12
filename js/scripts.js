// Initialize Google Map with custom zoom and animated marker
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
      scaledSize: new google.maps.Size(50, 50),
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
    setTimeout(animateMarker, 50);
  }

  // JavaScript picture slider

  // Array of image paths for the slider
  const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
  ];

  let currentIndex = 0;

  // Function to show the current slide image
  function showSlide(index) {
    const sliderImage = document.getElementById("slider-image");
    if (index >= 0 && index < images.length) {
      sliderImage.src = images[index];
    }
  }

  // Show the next slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  // Show the previous slide
  function previousSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  // Initialize the slider with the first image
  document.addEventListener("DOMContentLoaded", () => showSlide(currentIndex));

  animateMarker();
}
