$(document).ready(function() {
  var directionsDisplay;
  var directionsService = new google.maps.DirectionsService();
  var map;

  function initialize() {
    directionsDisplay = new google.maps.DirectionsRenderer();
    var SanFransisco = new google.maps.LatLng(37.7833, -122.4167);
    var mapOptions = {
      zoom:11,
      center: SanFransisco
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


  $('#locations').on('submit', function(event){

    event.preventDefault();
    $.ajax({
      url: 'http://www.bjs.gov:8080/bjs/ncvs/v2/personal/2010?format=json',
      type: 'GET',
      dataType: 'json'
    }).done(function(response){
      console.log(response)
    })
    var start = $(event.target).serializeArray()[0].value
    var end = $(event.target).serializeArray()[1].value
    calcRoute(start, end);
    
  })

})
  initialize();

