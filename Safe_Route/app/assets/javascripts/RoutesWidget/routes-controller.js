var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view){
		this.model = model;
		this.view = view;
		this.view.listenForSubmit(this);
	},
	analyzeCrimeAndRouteData: function(data){
		this.model.renderRoutes(data, this)
	},
	submitPoints: function(){
		event.preventDefault();
		this.model.definePoints(this, $(event.target).serializeArray()[0].value, $(event.target).serializeArray()[1].value);
	}, 
	requestCrimeData: function(){
		SafeRoute.CrimesController.crimeApiCall();
	},
	sendRoutesToView: function(result, directionsDisplay){
		this.view.populateMap(result, directionsDisplay)
	},
	submitContacts: function(directions){
		event.preventDefault();
		this.model.storeContacts(directions, $(event.target).serializeArray()[0].value, $(event.target).serializeArray()[1].value);
	}
}