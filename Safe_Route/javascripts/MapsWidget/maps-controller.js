var SafeRoute = SafeRoute || {}

SafeRoute.MapsController = {
    initialize: function(model, view) {
        this.model = model;
        this.view = view;
    },
    getGeoLocation: function(locationObject, geoCoder) {
        this.locationObject = locationObject;
        this.geoCoder = geoCoder;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getPositonSuccess, this.showError);
        } else {
            showError();
        }
    },
    getPositonSuccess: function(postition) {
        var currentLatLng = this.locationObject(position.coords.latitude, position.coords.longitude);
        this.geoCoder.geocode({
            'latLng': currentLatLng
        }, checkAddress)
    },
    checkAddress: function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            showAddress(results);
        } else {
            showError();
        }
    },
    showAddress: function(results) {
        $('input').eq(0).val(results[0].formatted_address)
    },
    showError: function(){
      alert("Sorry! Please enter your address again.")
    }
}



