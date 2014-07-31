SafeRoute.MapsModel = {
    request: function(self, start, end, event) {
        event.preventDefault();
        $('#locations').hide();
        $('#contact').show();
        $('#directionsPanel').show();
        self.model.collect(start, end)
    },
    collect: function(start, end) {
        var mapsData = [start, end];
        SafeRoute.MasterController.collectMapData(mapsData);
    }
}