var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view, directionsService, directionsDisplay){
    var sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.model = model;
    this.view = view;
    this.view.renderMap(directionsDisplay, sanFranGoogleObj);
    this.view.bindListeners(this, directionsDisplay, directionsService);
  },
    fetchCoords: function(start, end, directionsDisplay, directionsService){
      this.model.request(this, start, end, directionsDisplay, directionsService)
  },
    collectCoords: function(result, directionsDisplay){
      this.view.renderRoutes(result, directionsDisplay);
    }
}


