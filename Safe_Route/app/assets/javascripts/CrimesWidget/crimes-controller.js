var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model){
		this.model = model;
	},
	crimeApiCall: function(result, start, end){
		this.sendToRoutes(result, start, end, this.model.crimeDataGrabber())
	},
	sendToRoutes: function(result, start, end, data){
		console.log(data);
		// SafeRoute.RoutesController.analyzeCrimeAndRouteData(data, result, start, end)
	}
}