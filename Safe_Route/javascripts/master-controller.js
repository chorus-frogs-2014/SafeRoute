var SafeRoute = SafeRoute || {}
SafeRoute.MasterController = {
    initialize: function(MapsController, MapsModel, MapsView, CrimesController, CrimesModel, RoutesController, RoutesModel, RoutesView) {
        this.sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();
        this.MapsController = MapsController;
        this.MapsModel = MapsModel;
        this.MapsView = MapsView;
        this.CrimesController = CrimesController;
        this.CrimesModel = CrimesModel;
        this.RoutesController = RoutesController;
        this.RoutesModel = RoutesModel;
        this.RoutesView = RoutesView;
        this.MapsController.initialize(this.MapsModel, this.MapsView);
        this.MapsModel.initialize(this.directionsService);
        this.CrimesController.initialize(this.CrimesModel);
        this.RoutesController.initialize(this.RoutesModel, this.RoutesView);
        this.RoutesModel.initialize(this.directionsService, this.directionsDisplay);
        this.RoutesView.initialize(this.sanFranGoogleObj);
        this.run();
    },
    run: function() {
        this.bindListeners();
        this.MapsView.render(this.directionsDisplay, this.sanFranGoogleObj);
    },
    bindListeners: function() {
        $('#locations').on('submit', this.MapsController.collectCoords);
    },
    collectMapData: function(mapsData) {
        this.mapsData = mapsData
        this.CrimesController.request();
    },
    collectCrimeData: function(crimesData) {
        this.crimesData = crimesData
        this.RoutesController.collectMapAndCrimeData(this.mapsData, this.crimesData)
    }
}