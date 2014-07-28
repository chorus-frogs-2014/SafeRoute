var SafeRoute = SafeRoute || {}
SafeRoute.MasterController = {
  initialize: function(model, view, MapsController, MapsView, CrimesController, directionsDisplay){
    this.sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
    this.model = model;
    this.view = view;
    this.MapsController = MapsController;
    this.MapsView = MapsView;
    this.CrimesController = CrimesController;
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
  collectMapData: function(mapData){
    this.mapsData = mapData
  },
  collectCrimeData: function(crimeData){
    this.crimesData = crimeData
    console.log(this.crimesData)
    console.log(this.mapsData)

  }
  // analyzeCrimeAndRouteData: function(result, start, end, data){
  //   this.model.renderRoutes(result, start, end, data)
  // },
  // render: function(result, directionsDisplay){
  //   this.view.populateMap(result, directionsDisplay)
  // }
}