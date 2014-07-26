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
    this.directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        controller.gatherCrimeData(result, start, end)
      }
    });

  }
}

// SafeRoute.MapsModel = {
//   request: function(controller, start, end, directionsDisplay, directionsService){
//     var request = {
//       origin:start,
//       destination:end,
//       travelMode: google.maps.TravelMode.WALKING,
//       provideRouteAlternatives: true
//     };
//     directionsService.route(request, function(result, status) {
//       if (status == google.maps.DirectionsStatus.OK) {
//         controller.collectCoords(result, directionsDisplay)
//       }
//     });

//   }
// }

//    collectCoords: function(result, directionsDisplay){
//       this.view.renderRoutes(result, directionsDisplay);
//     }
