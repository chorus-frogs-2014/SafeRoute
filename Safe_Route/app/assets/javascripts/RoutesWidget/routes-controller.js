var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view){
		this.model = model;
		this.view = view;
	},
	analyze: function(result, start, end, data){
		this.model.createRoutes(result, start, end, data)
	},
	pass: function(result, directionsDisplay){
		this.view.render(result, directionsDisplay)
	}
}