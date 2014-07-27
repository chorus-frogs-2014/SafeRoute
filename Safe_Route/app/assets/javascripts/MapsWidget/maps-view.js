SafeRoute.MapsView = {
initialize: function(directionsDisplay) {
    this.directionsDisplay = directionsDisplay
},
bindListeners: function(controller){
  var self = this
  $('#locations').on('submit', function(){
    self.collectCoords(controller);
  })
},
collectCoords: function(controller){
  event.preventDefault();
  var start = $(event.target).serializeArray()[0].value
  var end = $(event.target).serializeArray()[1].value
  controller.request(start, end);
},
setMapOptions: function(sanFranGoogleObj){
    var mapOptions = {
      zoom:13,
      center: sanFranGoogleObj
    }
      return mapOptions
  },
collectMap: function(sanFranGoogleObj){
    var map = new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
    return map
  },
renderMap: function(directionsDisplay, sanFranGoogleObj){
  directionsDisplay.setMap(this.collectMap(sanFranGoogleObj));
  }
}