$(document).ready(function(){
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  SafeRoute.MapsController.initialize(SafeRoute.MapsModel, SafeRoute.MapsView, directionsService, directionsDisplay);
  SafeRoute.MapsModel.initialize(directionsService);
  SafeRoute.MapsView.initialize(directionsDisplay);

  SafeRoute.CrimesController.initialize(SafeRoute.CrimesModel);

  SafeRoute.RoutesController.initialize(SafeRoute.RoutesModel, SafeRoute.RoutesView, SafeRoute.MapsController, SafeRoute.MapsView, SafeRoute.CrimesController, directionsDisplay);
  SafeRoute.RoutesModel.initialize(directionsService, directionsDisplay);
});
