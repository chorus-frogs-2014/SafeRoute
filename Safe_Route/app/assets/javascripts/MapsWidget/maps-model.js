SafeRoute.MapsModel = {
  request: function(controller, start, end, directionsDisplay, directionsService){
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        controller.collectCoords(result, directionsDisplay)
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