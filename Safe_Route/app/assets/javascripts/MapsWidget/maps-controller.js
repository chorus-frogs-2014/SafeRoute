var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
  initialize: function(model, view){
    this.model = model;
    this.view = view;
  },

  collectCoords: function(){
    event.preventDefault();
    var start = $(event.target).serializeArray()[0].value
    var end = $(event.target).serializeArray()[1].value
    this.model.requestRoutes(start, end);
  }
}
