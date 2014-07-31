SafeRoute.MapsController = {
    initialize: function(model, view) {
        this.model = model;
        this.view = view;
    },
    fetch: function() {
        var start = $(event.target).serializeArray()[0].value
        var end = $(event.target).serializeArray()[1].value
        this.model.request(start, end, event)
    }
}