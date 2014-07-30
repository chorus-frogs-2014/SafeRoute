SafeRoute.MapsView = {
    setMapOptions: function(sanFranGoogleObj) {
        var mapOptions = {
            zoom: 13,
            center: sanFranGoogleObj
        }
        return mapOptions
    },
    createMap: function(sanFranGoogleObj) {
        return new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
    },
    renderMap: function(directionsDisplay, sanFranGoogleObj) {
        directionsDisplay.setMap(this.createMap(sanFranGoogleObj));
    },

    renderCurrentLocation: function(results) {
        $('input').eq(0).val(results[0].formatted_address)
    },

    renderError: function() {
        alert("Sorry! I Couldn't find your current location.")
    }
}