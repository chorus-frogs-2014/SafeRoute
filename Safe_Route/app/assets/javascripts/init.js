$(document).ready(function(){
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  SafeRoute.MasterController.initialize(SafeRoute.MapsController, SafeRoute.MapsView, SafeRoute.CrimesController, SafeRoute.RoutesController, directionsDisplay);
  SafeRoute.MapsController.initialize(SafeRoute.MapsModel, SafeRoute.MapsView);
  SafeRoute.MapsModel.initialize(directionsService);
  SafeRoute.CrimesController.initialize(SafeRoute.CrimesModel);
  SafeRoute.RoutesController.initialize(SafeRoute.RoutesModel, SafeRoute.RoutesView);
  SafeRoute.RoutesModel.initialize(directionsService, directionsDisplay);
});
