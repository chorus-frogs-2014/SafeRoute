var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view){
		this.model = model;
		this.view = view;
	},
	analyzeCrimeAndRouteData: function(data, start, end, directionsService, directionsDisplay){
		this.model.renderRoutes(data, start, end, directionsService, directionsDisplay)
	},
	render: function(result, directionsDisplay){
		this.view.populateMap(result, directionsDisplay)
	}
}