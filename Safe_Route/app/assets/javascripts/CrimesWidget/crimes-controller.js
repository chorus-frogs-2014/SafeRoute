var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model, directionsService, directionsDisplay){
    	this.model = model;
  },
  	crimeApiCall: function(start, end, directionsService, directionsDisplay){
  		this.model.crimeDataGrabber(start, end, directionsService, directionsDisplay)
  	}
}