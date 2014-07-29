var SafeRoute = SafeRoute || {}
SafeRoute.MasterController = {
  initialize: function(MapsController, CrimesController, RoutesController, directionsDisplay){
    this.sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.MapsController = MapsController;

    this.CrimesController = CrimesController;
    this.RoutesController = RoutesController;
    this.directionsDisplay = directionsDisplay;
    this.run();
  },
  run: function(){
      this.bindListeners();
      alert("I work!")
    },
  bindListeners: function(){
   $('#locations').on('submit', this.MapsController.collectCoords);
  },
  collectMapData: function(mapsData){
    this.mapsData = mapsData
    this.CrimesController.request();
  },
  collectCrimeData: function(crimesData){
    this.crimesData = crimesData
    this.RoutesController.collectMapAndCrimeData(this.mapsData, this.crimesData)
  }
}