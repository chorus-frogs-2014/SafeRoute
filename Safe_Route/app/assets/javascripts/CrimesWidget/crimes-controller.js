var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model){
		this.model = model;
	},
	crimeApiCall: function(start, end){
		this.model.crimeDataGrabber(this, start, end)
	},
	sendToRoutes: function(start, end, data){
		SafeRoute.RoutesController.analyzeCrimeAndRouteData(start, end, data);
	}
}