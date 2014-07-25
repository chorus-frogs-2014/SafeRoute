$(document).ready(function() {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;

  function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var chicago = new google.maps.LatLng(41.850033, -87.6500523);
    var mapOptions = {
      zoom:7,
      center: chicago
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    directionsDisplay.setMap(map);
  }

  function calcRoute(start, end) {
    var start = start;
    var end = end;
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        console.log(result)
        directionsDisplay.setDirections(result);
      }
    });
  }

  initialize();

  $('#locations').on('submit', function(event){
    event.preventDefault();
    var start = $(event.target).serializeArray()[0].value
    var end =$(event.target).serializeArray()[1].value
    calcRoute(start, end);
  })
})

// <script type="text/javascript"
//       src="https://maps.googleapis.com/maps/api/js?key=API_KEY">
// </script>


// var directionsRequest = new google.maps.DirectionsRequest({
//   origin: "@123213",
//   destination: LatLng | String,
//   travelMode: TravelMode,
// })

// var directionsService = new google.maps.DirectionsService

// directionsService.route(directionsRequest)