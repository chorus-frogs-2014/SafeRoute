var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view, directionsService, directionsDisplay){
    var sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.model = model;
    this.view = view;
    this.view.render(directionsDisplay, sanFranGoogleObj);
    this.view.bindListeners(this);
  },
    request: function(start, end){
      this.model.requestRoutes(this, start, end)
  },
    collect: function(result, start, end){
      var mapsData = [];
      mapsData.push(result, start, end);
      return mapsData;
  }
}