var getPositonSuccess = function(position){
    var currentLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng': currentLatLng}, geocoderCB)
  }

  var geocoderCB = function(results, status){
    if (status == google.maps.GeocoderStatus.OK){
      showAddress(results);
    } else {
      showError();
    }
  }

  var showAddress = function(results){
    $('input').eq(0).val(results[0].formatted_address)
  }

  var showError = function(){
    alert("Sorry! Couldn't get your current location." )
  }


$(document).ready(function(){
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPositonSuccess, showError);
  } else {
    showError();
  }
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
  SafeRoute.MasterController.initialize(SafeRoute.MapsController, SafeRoute.MapsView, SafeRoute.CrimesController, SafeRoute.RoutesController, directionsDisplay);
  SafeRoute.MapsController.initialize(SafeRoute.MapsModel, SafeRoute.MapsView);
  SafeRoute.MapsModel.initialize(directionsService);
  SafeRoute.CrimesController.initialize(SafeRoute.CrimesModel);
  SafeRoute.RoutesController.initialize(SafeRoute.RoutesModel, SafeRoute.RoutesView);
  SafeRoute.RoutesModel.initialize(directionsService, directionsDisplay);
  SafeRoute.RoutesView.initialize(sanFranGoogleObj);
});
