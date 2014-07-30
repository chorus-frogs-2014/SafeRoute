SafeRoute.MapsModel = {
    request: function(self, start, end) {
        self.model.collect(start, end)
    },
    collect: function(start, end) {
        var mapsData = [start, end];
        SafeRoute.MasterController.collectMapData(mapsData);
    }
}