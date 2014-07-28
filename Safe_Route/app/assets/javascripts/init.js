$(document).ready(function(){
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();

  SafeRoute.MasterController.initialize(SafeRoute.RoutesModel, SafeRoute.RoutesView, SafeRoute.MapsController, SafeRoute.MapsView, SafeRoute.CrimesController, directionsDisplay);

  SafeRoute.MapsController.initialize(SafeRoute.MapsModel, SafeRoute.MapsView);
  SafeRoute.MapsModel.initialize(directionsService, SafeRoute.MasterController);

  SafeRoute.CrimesController.initialize(SafeRoute.CrimesModel);


});
