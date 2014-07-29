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





// var getPositonSuccess = function(position) {
//     var currentLatLng = this.locationObject(position.coords.latitude, position.coords.longitude);
//     geocoder.geocode({
//         'latLng': currentLatLng
//     }, geocoderCB)
// }

// var geocoderCB = function(results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//             showAddress(results);
//         } else {
//             showError();
//         }
//     }
// var showAddress = function(results) {
//     $('input').eq(0).val(results[0].formatted_address)
// }

// var showError = function() {
//     alert("Sorry! Couldn't get your current location.")
// }






//     collectCoords: function() {
//         var self = SafeRoute.MapsController
//         event.preventDefault();
//         var start = $(event.target).serializeArray()[0].value
//         var end = $(event.target).serializeArray()[1].value
//         self.model.requestRoutes(self, start, end)
//     }
// }