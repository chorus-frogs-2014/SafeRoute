SafeRoute.MapsView = {
    options: function(sanFranGoogleObj) {
        var mapOptions = {
            zoom: 13,
            center: sanFranGoogleObj
        }
        return mapOptions
    },
    collect: function(sanFranGoogleObj) {
        return new google.maps.Map(document.getElementById("map-canvas"), this.options(sanFranGoogleObj));
    },
    render: function(directionsDisplay, sanFranGoogleObj) {
        directionsDisplay.setMap(this.collect(sanFranGoogleObj));
    }
}