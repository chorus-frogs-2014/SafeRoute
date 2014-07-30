var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view) {
        this.model = model;
        this.view = view;
    },
    fetchCoords: function() {
        var self = SafeRoute.MapsController
        event.preventDefault();
        var start = $(event.target).serializeArray()[0].value
        var end = $(event.target).serializeArray()[1].value
        self.model.requestCoords(self, start, end)
    },
    fetchCurrentLocation: function(){
        this.model.getGeoLocation();
    },
    collectCurrentLocation: function(results){
        this.view.renderCurrentLocation(results);
    }
}