var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model){
		this.model = model;
	},
	crimeApiCall: function(start, end){
		this.model.crimeDataGrabber(this,start, end)
	},
	sendToRoutes: function(data, start, end){
		SafeRoute.RoutesController.analyzeCrimeAndRouteData(data, start, end)
	}
}