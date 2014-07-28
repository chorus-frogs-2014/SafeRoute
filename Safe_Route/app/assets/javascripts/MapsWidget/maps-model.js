SafeRoute.MapsModel = {
  initialize: function(directionsService) {
    this.directionsService = directionsService;
  },
  requestRoutes: function(start, end){
    this.collect(start, end)
  },
  collect: function(start, end){
    var mapsData = [start, end];
    SafeRoute.MasterController.collectMapData(mapsData);
  }
}
