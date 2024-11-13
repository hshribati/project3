function initMap() {
  var location = {lat: 41.8781, lng: -87.6298};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: location,
    zoomControl: false
  });

  document.getElementById('zoom-in').addEventListener('click', function() {
    var currentZoom = map.getZoom();
    map.setZoom(currentZoom + 1);
  });

  document.getElementById('zoom-out').addEventListener('click', function() {
    var currentZoom = map.getZoom();
    map.setZoom(currentZoom - 1);
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
    setTimeout(animateMarker, 150);
  }

  animateMarker();
}

const images = [
    "images/slide1.jpg",
    "images/slide2.jpg",
    "images/slide3.jpg"
];

let currentIndex = 0;

function showSlide(index) {
    const sliderWrapper = document.getElementById("slider-wrapper");
    const totalImages = images.length;
    const newTransformValue = -(index * 100) + '%';
    sliderWrapper.style.transform = `translateX(${newTransformValue})`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function previousSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000);
});
