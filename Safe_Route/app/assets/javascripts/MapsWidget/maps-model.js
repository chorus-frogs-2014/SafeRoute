SafeRoute.MapsModel = {
  initialize: function(directionsService) {
    this.directionsService = directionsService;
  },
  requestCoords: function(controller, start, end){
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    };
    this.directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        controller.collect(result, start, end)
      }
    });
  }
}