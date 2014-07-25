var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view){
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer();
    this.model = model(this, directionsService)
    this.view = view(this, directionsDisplay)
  }
}



