$(document).ready(function() {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;
  initialize();

function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var SanFransisco = new google.maps.LatLng(37.7833, -122.4167);
    var mapOptions = {
      zoom:11,
      center: SanFransisco
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  }





  function calcRoute(start, end) {
    var start = start;
    var end = end;
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {

        directionsDisplay.setDirections(result)
      }
    });
  }


  $('#locations').on('submit', function(event){

    event.preventDefault();
    $.ajax({
      url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=1000',
      type: 'GET',
      dataType: 'json'
    }).done(function(response){
      console.log(response)
    })
    var start = $(event.target).serializeArray()[0].value
    var end = $(event.target).serializeArray()[1].value
    calcRoute(start, end);
    
  })
  initialize();

})

