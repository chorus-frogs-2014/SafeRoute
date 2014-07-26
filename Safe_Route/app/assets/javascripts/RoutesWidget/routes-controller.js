var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view, MapsController, CrimesController){
		this.model = model;
		this.view = view;
		this.MapsController = MapsController;
		this.CrimesController = CrimesController;
	},
	analyzeCrimeAndRouteData: function(result, start, end, data){
		this.model.renderRoutes(result, start, end, data)
	},
	render: function(result, directionsDisplay){
		this.view.populateMap(result, directionsDisplay)
	}
}