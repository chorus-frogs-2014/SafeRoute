SafeRoute.RoutesController = {
  initialize: function(model, view){
    this.model = model;
    this.view = view;
  },
  collectMapAndCrimeData: function(mapsData, crimesData){
    this.model.parseData(this, mapsData, crimesData);
  },
  sendRoutesToView: function(heatMapData, result, directionsDisplay){
    this.view.render(heatMapData, result, directionsDisplay);
  }
}