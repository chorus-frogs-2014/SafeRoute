var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model){
		this.model = model;
	},
	crimeApiCall: function(result, start, end){
		this.sendToRoutes(result, start, end, this.model.crimeDataResult())
	},
	sendToRoutes: function(result, start, end, data){
		SafeRoute.RoutesController.analyzeCrimeAndRouteData(data, result, start, end)
	}
}