var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view){
		this.model = model;
		this.view = view;
		this.view.listenForSubmit(this);
	},
	analyzeCrimeAndRouteData: function(start, end, data){
		this.model.renderRoutes(start, end, data)
	},
	render: function(result, directionsDisplay){
		this.view.populateMap(result, directionsDisplay)
	},
	gatherCrimeData: function(start, end){
		event.preventDefault();
		var start = $(event.target).serializeArray()[0].value;
		var end = $(event.target).serializeArray()[1].value;
		SafeRoute.CrimesController.crimeApiCall(start, end);
	}
}