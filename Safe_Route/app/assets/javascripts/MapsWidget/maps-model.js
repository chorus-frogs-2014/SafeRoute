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

