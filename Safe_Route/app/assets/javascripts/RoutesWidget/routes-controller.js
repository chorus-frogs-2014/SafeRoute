var SafeRoute = SafeRoute || {}
SafeRoute.RoutesController = {
	initialize: function(model, view, MapsController, MapsView, CrimesController, directionsDisplay){
    this.sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
		this.model = model;
		this.view = view;
		this.MapsController = MapsController;
		this.MapsView = MapsView;
		this.CrimesController = CrimesController;
		this.directionsDisplay = directionsDisplay;
		this.run();
	},
	run: function(){
			this.bindListeners();
			this.MapsView.render(this.directionsDisplay, this.sanFranGoogleObj);
		},
	bindListeners: function(){
 	 $('#locations').on('submit', this.MapsController.collectCoords);
	},
	collectMapData: function(mapData){
		console.log(mapData)
	},
	analyzeCrimeAndRouteData: function(result, start, end, data){
		this.model.renderRoutes(result, start, end, data)
	},
	render: function(result, directionsDisplay){
		this.view.populateMap(result, directionsDisplay)
	}
}