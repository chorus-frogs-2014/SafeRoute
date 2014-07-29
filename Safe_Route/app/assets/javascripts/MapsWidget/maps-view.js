SafeRoute.MapsView = {
  setMapOptions: function(sanFranGoogleObj){
    var mapOptions = {
      zoom:13,
      center: sanFranGoogleObj
    }
    return mapOptions
  },
  createMap: function(sanFranGoogleObj){
    return new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
  },
  render: function(directionsDisplay, sanFranGoogleObj){
    directionsDisplay.setMap(this.createMap(sanFranGoogleObj));
  }
}
