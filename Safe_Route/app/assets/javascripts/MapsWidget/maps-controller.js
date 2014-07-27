var SafeRoute = SafeRoute || {}
SafeRoute.MapsController = {
  initialize: function(view, directionsService, directionsDisplay){
    var sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.view = view;
    this.view.renderMap(this, directionsDisplay, sanFranGoogleObj);
  }
}