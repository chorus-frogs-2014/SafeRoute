SafeRoute.UsersModel = {
    location: function(controller) {
        this.controller = controller
        var self = this
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(self.success, this.controller.notify)
        } else {
            this.controller.notify();
        }
    },
    success: function(position) {
        var geocoder = new google.maps.Geocoder()
        geocoder.geocode({
            'latLng': new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        }, SafeRoute.UsersModel.status)
    },
    status: function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            SafeRoute.UsersController.collect(results);
        } else {
            this.controller.notify();
        }
    }
}