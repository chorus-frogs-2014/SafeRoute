SafeRoute.MapsModel = {
  initialize: function(directionsService) {
    this.directionsService = directionsService;
  },
  request: function(controller, start, end){
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    };
    controller.gatherCrimeData(start, end)
  }
}