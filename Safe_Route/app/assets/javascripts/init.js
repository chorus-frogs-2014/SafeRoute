$(document).ready(function(){
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  SafeRoute.MapsController.initialize(SafeRoute.MapsModel, SafeRoute.MapsView, directionsService, directionsDisplay);
  SafeRoute.CrimesController.initialize(SafeRoute.CrimesModel, directionsService, directionsDisplay);
  SafeRoute.RoutesController.initialize(SafeRoute.RoutesModel, SafeRoute.RoutesView);
});


