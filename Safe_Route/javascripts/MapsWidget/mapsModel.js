SafeRoute.MapsModel = {

    request: function(self, start, end, event) {
        event.preventDefault();
        $('#locations').fadeOut(2000, function(){
        $('#contact').show();
        });
        $('#directionsPanel').show();
        self.model.collect(start, end)
    },
    collect: function(start, end) {
        var mapsData = [start, end];
        SafeRoute.MasterController.collectMapData(mapsData);
    }
}

