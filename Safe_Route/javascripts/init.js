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
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPositonSuccess, showError);
  } else {
    showError();
  }

$(document).ready(function(){
  var directionsService = new google.maps.DirectionsService();
  var directionsDisplay = new google.maps.DirectionsRenderer();
  SafeRoute.MasterController.initialize(SafeRoute.MapsController, SafeRoute.MapsModel, SafeRoute.MapsView, SafeRoute.CrimesController, SafeRoute.RoutesController, SafeRoute.RoutesView, directionsDisplay);
  SafeRoute.MapsModel.initialize(directionsService);
  SafeRoute.CrimesController.initialize(SafeRoute.CrimesModel);
  SafeRoute.RoutesController.initialize(SafeRoute.RoutesModel, SafeRoute.RoutesView);
  SafeRoute.RoutesModel.initialize(directionsService, directionsDisplay);
});
