SafeRoute.MapsView = {

bindListeners: function(controller, directionsService, directionsDisplay){
  var self = this
  $('#locations').on('submit', function(){
    self.createCoords(controller, directionsService, directionsDisplay);
  })
},
createCoords: function(controller, directionsService, directionsDisplay){
  event.preventDefault();
  var start = $(event.target).serializeArray()[0].value
  var end = $(event.target).serializeArray()[1].value
  controller.fetchCoords(start, end, directionsService, directionsDisplay);
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
renderMap: function(directionsDisplay, sanFranGoogleObj){
  directionsDisplay.setMap(this.createMap(sanFranGoogleObj));
  },


}
