var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view, directionsService, directionsDisplay){
    var sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.model = model;
    this.view = view;
    this.view.renderMap(directionsDisplay, sanFranGoogleObj);
    this.view.bindListeners(this);
  },
    request: function(start, end){
      this.model.requestCoords(this, start, end)
  },
    collect: function(result, start, end){
      SafeRoute.CrimesController.crimeApiCall(result, start, end)
  }
}