var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model){
    this.model = model;
  },
  collectCoords: function(){
  var self = SafeRoute.MapsController
  event.preventDefault();
  var start = $(event.target).serializeArray()[0].value
  var end = $(event.target).serializeArray()[1].value
  self.model.requestRoutes(self, start, end)
  }
}