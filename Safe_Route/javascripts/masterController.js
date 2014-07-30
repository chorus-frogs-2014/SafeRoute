var SafeRoute = SafeRoute || {}
SafeRoute.MasterController = {
    initialize: function(MapsController, MapsModel, MapsView, CrimesController, CrimesModel, RoutesController, RoutesModel, RoutesView, UsersController, UsersModel, UsersView) {
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
        this.UsersController = UsersController;
        this.UsersModel = UsersModel;
        this.UsersView = UsersView;
        this.MapsController.initialize(this.MapsModel, this.MapsView);
        this.CrimesController.initialize(this.CrimesModel);
        this.RoutesController.initialize(this.RoutesModel, this.RoutesView);
        this.RoutesModel.initialize(this.directionsService, this.directionsDisplay);
        this.RoutesView.initialize(this.sanFranGoogleObj);
        this.UsersController.initialize(this.UsersModel, this.UsersView);
        this.run();
    },
    run: function() {
        this.bindListeners();
        this.MapsView.render(this.directionsDisplay, this.sanFranGoogleObj);
        this.UsersController.fetch();
        this.CrimesController.request();
    },
    bindListeners: function() {
        $('#locations').on('submit', function(event){
            event.preventDefault();
        $('#locations').hide();
        $('#contact').show();
        $('#directionsPanel').show();
        SafeRoute.MapsController.fetch();
    })
},
collectMapData: function(mapsData) {
    this.mapsData = mapsData
    if (this.crimesData != undefined) {
        this.sendDataToRoutes();
    } else {
        alert("Just One Moment. Please Try Again")
    }
},
collectCrimeData: function(crimesData) {
    this.crimesData = crimesData
},
sendDataToRoutes: function() {
    this.RoutesController.collectMapAndCrimeData(this.mapsData, this.crimesData)
}
}