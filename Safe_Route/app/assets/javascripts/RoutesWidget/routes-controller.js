var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view){
		this.model = model;
		this.view = view;
	},
	analyzeCrimeAndRouteData: function(result, start, end, data){
		this.model.renderRoutes(result, start, end, data)
	},
	render: function(result, directionsDisplay){
		this.view.populateMap(result, directionsDisplay)
	}
}