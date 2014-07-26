var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model){
		this.model = model;
	},
	request: function(result, start, end){
		this.model.requestCrimes(this, result,start, end)
	},
	pass: function(result, start, end, data){
		SafeRoute.RoutesController.analyzeCrimeAndRouteData(result, start, end, data);
	}
}