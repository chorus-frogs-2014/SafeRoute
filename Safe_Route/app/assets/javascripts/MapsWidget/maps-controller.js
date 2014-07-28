var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view, directionsService, directionsDisplay){
    this.sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.model = model;
    this.view = view;
    // this.view.render(directionsDisplay, sanFranGoogleObj);
    // this.view.bindListeners(this);
  },

createCoords: function(){
  event.preventDefault();
  var start = $(event.target).serializeArray()[0].value
  var end = $(event.target).serializeArray()[1].value
  return this.model.requestRoutes(this, start, end)
  }
}