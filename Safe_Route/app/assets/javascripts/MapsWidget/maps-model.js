SafeRoute.MapsModel = {
  initialize: function(directionsService) {
    this.directionsService = directionsService;
  },
  requestRoutes: function(self, start, end){
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    };
    this.directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        self.model.collect(result, start, end)
      }
    });
  },
    collect: function(result, start, end){
      var mapsData = [];
      mapsData.push(result, start, end);
      SafeRoute.MasterController.collectMapData(mapsData);
  }
}