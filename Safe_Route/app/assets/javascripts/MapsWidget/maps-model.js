SafeRoute.MapsModel = {
  initialize: function(directionsService) {
    this.directionsService = directionsService;
  },
  requestRoutes: function(controller, start, end){
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

// if (status == google.maps.DirectionsStatus.OK) {
//             for (var i = 0, len = response.routes.length; i < len; i++) {
//                 new google.maps.DirectionsRenderer({
//                     map: mapObject,
//                     directions: response,
//                     routeIndex: i
//                 });
//             }
//         } else {
//             $("#error").append("Unable to retrieve your route<br />");
//         }
