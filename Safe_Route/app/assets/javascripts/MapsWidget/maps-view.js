SafeRoute.MapsView = {

setMapOptions: function(sanFranGoogleObj){
    var mapOptions = {
      zoom:13,
      center: sanFranGoogleObj
    }
      return mapOptions
  },
collect: function(mapOptions){
    var map = new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions());
    return map
  }
}