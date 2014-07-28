SafeRoute.RoutesView = {
  initialize: function(sanFranGoogleObj){
    this.sanFranGoogleObj = sanFranGoogleObj;
  },
  createMap: function(sanFranGoogleObj){
    return new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
  },
  setMapOptions: function(sanFranGoogleObj){
    var mapOptions = {
      zoom:13,
      center: sanFranGoogleObj
    }
      return mapOptions
  },
  render:function(result, directionsDisplay){
    directionsDisplay.setMap(this.createMap(this.sanFranGoogleObj));
    directionsDisplay.setDirections(result);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  }
}