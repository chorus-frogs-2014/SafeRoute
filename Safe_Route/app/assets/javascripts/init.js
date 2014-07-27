$(document).ready(function(){
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer({polylineOptions: {
      strokeColor: "red"
  }
    });
  
  SafeRoute.MapsController.initialize(SafeRoute.MapsModel, SafeRoute.MapsView, directionsService, directionsDisplay);
  SafeRoute.MapsModel.initialize(directionsService);
  SafeRoute.MapsView.initialize(directionsDisplay);
  
  
  SafeRoute.CrimesController.initialize(SafeRoute.CrimesModel);
  
  SafeRoute.RoutesController.initialize(SafeRoute.RoutesModel, SafeRoute.RoutesView, directionsService, directionsDisplay);
  SafeRoute.RoutesModel.initialize(directionsService, directionsDisplay);
});
