SafeRoute.MapsModel = {
    request: function(start, end, event) {
        event.preventDefault();
        $('#locations').hide();
        $('#contact').show();
        $('#directionsPanel').show();
        this.model.collect(start, end)
    },
    collect: function(start, end) {
        var mapsData = [start, end];
        SafeRoute.MasterController.collectMapData(mapsData);
    }
}