SafeRoute.MapsModel = {
  request: function(controller, start, end, directionsService, directionsDisplay){
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    };
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        controller.gatherCrimeData(result, start, end, directionsService, directionsDisplay)
      }
    });

  }
}

