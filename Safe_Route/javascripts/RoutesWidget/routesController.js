SafeRoute.RoutesController = {
  initialize: function(model, view){
    this.model = model;
    this.view = view;
  },
  collectMapAndCrimeData: function(mapsData, crimesData){
    console.log(mapsData)
    console.log(crimesData)
    this.model.parseData(this, mapsData, crimesData);
  },
  sendRoutesToView: function(result, directionsDisplay, heatPoints){
    console.log(result)
    this.view.render(result, directionsDisplay, heatPoints);
  }
}
$(document).on('testChange', function(e, data) {
    if (SafeRoute.RoutesModel.globalCounter == 6) {
      var finalroutes = SafeRoute.RoutesModel.checkRoutes(data);
      console.log(finalroutes)
      SafeRoute.RoutesModel.EVERYTHING.routes = finalroutes
      SafeRoute.RoutesView.render(SafeRoute.RoutesModel.heatMapData, SafeRoute.RoutesModel.EVERYTHING, SafeRoute.RoutesModel.directionsDisplay)
    }
})
