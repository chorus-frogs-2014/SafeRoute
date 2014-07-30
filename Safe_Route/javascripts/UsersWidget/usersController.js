SafeRoute.UsersController = {
    initialize: function(model, view) {
        this.model = model;
        this.view = view;
    },
    fetch: function() {
        this.model.location(this);
    },
    collect: function(results) {
        this.view.render(results);
    },
    notify: function(){
      SafeRoute.UsersView.failure();
    }
}