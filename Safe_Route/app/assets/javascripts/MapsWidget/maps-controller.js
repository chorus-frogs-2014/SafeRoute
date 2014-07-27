var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view, directionsService, directionsDisplay){
    var sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.model = model;
    this.view = view;
    this.view.renderMap(directionsDisplay, sanFranGoogleObj);
    this.view.bindListeners(this);
  },
    fetchCoords: function(start, end){
      this.model.request(this, start, end)
  },
    gatherCrimeData: function(start, end){
      SafeRoute.CrimesController.crimeApiCall(start, end)
  }
}