var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view, directionsService, directionsDisplay){
    var sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.model = model;
    this.view = view;
    this.view.renderMap(directionsDisplay, sanFranGoogleObj);
    this.view.bindListeners(this, directionsService, directionsDisplay);
  },
    fetchCoords: function(start, end, directionsService, directionsDisplay){
      this.model.request(this, start, end, directionsService, directionsDisplay)
  },
    gatherCrimeData: function(result, start, end, directionsService, directionsDisplay){
      SafeRoute.CrimesController.crimeApiCall(start, end, directionsService, directionsDisplay)
    }
}

