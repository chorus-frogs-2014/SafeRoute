SafeRoute.MapsView = {
initialize: function(directionsDisplay) {
    this.directionsDisplay = directionsDisplay
},
bindListeners: function(controller){
  var self = this
  $('#locations').on('submit', function(){
    self.createCoords(controller);
  })
},
createCoords: function(controller){
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
createMap: function(sanFranGoogleObj){
    var map = new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
    return map
  },
render: function(directionsDisplay, sanFranGoogleObj){
  directionsDisplay.setMap(this.createMap(sanFranGoogleObj));
  }
}
