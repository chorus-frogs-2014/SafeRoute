$(document).ready(function(){
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  
  SafeRoute.MapsController.initialize(SafeRoute.MapsView, directionsService, directionsDisplay);
  
  SafeRoute.CrimesController.initialize(SafeRoute.CrimesModel);
  
  SafeRoute.RoutesController.initialize(SafeRoute.RoutesModel, SafeRoute.RoutesView, directionsService, directionsDisplay);
  SafeRoute.RoutesModel.initialize(directionsService, directionsDisplay);
});
