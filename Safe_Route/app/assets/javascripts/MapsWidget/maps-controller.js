var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view, directionsService, directionsDisplay){
    var sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.model = model
    this.view = view;
    this.view.render(directionsDisplay, sanFranGoogleObj);
  }
}



