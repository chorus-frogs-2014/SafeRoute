SafeRoute.MapsView = {
setMapOptions: function(sanFranGoogleObj){
    var mapOptions = {
      zoom:13,
      center: sanFranGoogleObj
    }
      return mapOptions
  },
createMap: function(sanFranGoogleObj){
    var map = new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
    return map
  },
render: function(directionsDisplay, sanFranGoogleObj){
  directionsDisplay.setMap(this.createMap(sanFranGoogleObj));
  }
}