var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view){
		this.model = model;
		this.view = view;
	},
	analyzeCrimeAndRouteData: function(data, result, start, end){
		this.model.renderRoutes(data, result, start, end)
	},
	render: function(result, directionsDisplay){
		this.view.populateMap(result, directionsDisplay)
	}
}