SafeRoute.MapsModel = {
    initialize: function(directionsService) {
        this.directionsService = directionsService;
    },
    requestRoutes: function(self, start, end) {
        self.model.collect(start, end)
    },
    collect: function(start, end) {
        var mapsData = [start, end];
        SafeRoute.MasterController.collectMapData(mapsData);
    },
    getGeoLocation: function() {
      var self = this
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(self.getPositonSuccess, SafeRoute.MapsView.renderError)
        } else {
            SafeRoute.MapsView.renderError();
        }
    },
    getPositonSuccess: function(position) {
        var geocoder = new google.maps.Geocoder()
        geocoder.geocode({
            'latLng': new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        }, SafeRoute.MapsModel.geocoderStatus)
    },
    geocoderStatus: function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            SafeRoute.MapsController.collectCurrentLocation(results);
        } else {
            SafeRoute.MapsView.renderError();
      }
    }
}