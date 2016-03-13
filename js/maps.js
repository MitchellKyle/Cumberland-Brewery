function initMap() {
  var cumberland = {lat: 38.230884, lng: -85.705506};
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: cumberland,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.SATELLITE
      ],
      position: google.maps.ControlPosition.BOTTOM_LEFT
    }
  });


  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

  var widgetDiv = document.getElementById('directions-widget');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(widgetDiv);

  var saveWidget = new google.maps.SaveWidget(widgetDiv, {
    place: {
      placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
      location: cumberland
    },
    attribution: {
      source: 'Google Maps JavaScript API',
      webUrl: 'https://developers.google.com/maps/'
    },
  });

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler);
  document.getElementById('end').addEventListener('change', onChangeHandler);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var start = document.getElementById('start').value;
  var end = document.getElementById('end').value;
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

$(document).ready(function() {
  $("#calculate-route").submit(function(event) {
    event.preventDefault();
    calculateAndDisplayRoute($("#start").val(), $("#to").val());
  });
});
