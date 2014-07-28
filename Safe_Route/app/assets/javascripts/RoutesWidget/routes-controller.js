var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view, MapsController, MapsView, CrimesController, directionsDisplay){
		this.model = model;
		this.view = view;
		this.MapsController = MapsController;
		this.MapsView = MapsView;
		this.CrimesController = CrimesController;
		this.directionsDisplay = directionsDisplay;
		this.sanFranGoogleObj = this.MapsController.sanFranGoogleObj;
		this.start();
	},
	  bindListeners: function(){
  	var self = this
 	 $('#locations').on('submit', function(){
    this.next();
    })
	},
	start: function(){
			this.bindListeners();
			this.MapsView.render(this.directionsDisplay, this.sanFranGoogleObj);
		},
	next: function(){
			var dataINeedAboutMaps = this.MapsController.createCoords();
			console.log(dataINeedAboutMaps);
		},
	analyzeCrimeAndRouteData: function(result, start, end, data){
		this.model.renderRoutes(result, start, end, data)
	},
	render: function(result, directionsDisplay){
		this.view.populateMap(result, directionsDisplay)
	}
}