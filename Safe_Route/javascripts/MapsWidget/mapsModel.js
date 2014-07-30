SafeRoute.MapsModel = {
    initialize: function(directionsService) {
        this.directionsService = directionsService;
    },
    requestCoords: function(self, start, end) {
        self.model.collectCoords(start, end)
    },
    collectCoords: function(start, end) {
        var mapsData = [start, end];
        SafeRoute.MasterController.collectMapData(mapsData);
    }
}