SafeRoute.MapsController = {
    initialize: function(model, view) {
        this.model = model;
        this.view = view;
    },
    fetch: function(event) {
        var self = SafeRoute.MapsController
        // event.preventDefault();
        var start = $(event.target).serializeArray()[0].value
        var end = $(event.target).serializeArray()[1].value
        self.model.request(self, start, end, event)
    }
}