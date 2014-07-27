var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model){
		this.model = model;
	},
	crimeApiCall: function(result, start, end){
		this.model.crimeDataGrabber(this, result,start, end)
	},
	sendToRoutes: function(result, start, end, data){
		SafeRoute.RoutesController.analyzeCrimeAndRouteData(result, start, end, data);
	}
}