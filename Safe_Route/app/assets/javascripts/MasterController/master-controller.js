var SafeRoute = SafeRoute || {}
SafeRoute.MasterController = {
  initialize: function(MapsController, MapsView, CrimesController, RoutesController, directionsDisplay){
    this.sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.MapsController = MapsController;
    this.MapsView = MapsView;
    this.CrimesController = CrimesController;
    this.RoutesController = RoutesController;
    this.directionsDisplay = directionsDisplay;
    this.run();
  },
  run: function(){
      this.bindListeners();
      this.MapsView.render(this.directionsDisplay, this.sanFranGoogleObj);
    },
  bindListeners: function(){
   $('#locations').on('submit', this.MapsController.collectCoords);
  },
  collectMapData: function(mapsData){
    this.mapsData = mapsData
    this.CrimesController.request();
  },
  collectCrimeData: function(crimeData){
    this.crimeData = crimeData
    console.log(this.crimeData)
    console.log(this.mapsData)

  }
  // analyzeCrimeAndRouteData: function(result, start, end, data){
  //   this.model.renderRoutes(result, start, end, data)
  // },
  // render: function(result, directionsDisplay){
  //   this.view.populateMap(result, directionsDisplay)
  // }
}