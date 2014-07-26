var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model, directionsService, directionsDisplay){
		this.model = model;
	},
	crimeApiCall: function(start, end, directionsService, directionsDisplay){
		this.model.crimeDataGrabber(this,start, end, directionsService, directionsDisplay)
	},
	sendToRoutes: function(data, start, end, directionsService, directionsDisplay){
		SafeRoute.RoutesController.analyzeCrimeAndRouteData(data, start, end, directionsService, directionsDisplay)
	}
}