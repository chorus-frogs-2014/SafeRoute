var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model){
		this.model = model;
	},
	crimeApiCall: function(){
		this.model.crimeDataGrabber(this)
	},
	sendToRoutes: function(data){
		SafeRoute.RoutesController.analyzeCrimeAndRouteData(data);
	}
}