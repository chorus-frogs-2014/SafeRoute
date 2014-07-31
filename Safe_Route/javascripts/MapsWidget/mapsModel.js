SafeRoute.MapsModel = {
    request: function(start, end, event) {
        event.preventDefault();
        $('#locations').hide();
        $('#contact').show();
        $('#directionsPanel').show();
        this.collect(start, end)
    },
    collect: function(start, end) {
        var mapsData = [start, end];
        $(document).trigger('collectCoords', [mapsData]);
        // $(document).trigger('dataReady', []);
    }
  }

        // SafeRoute.MasterController.collectMapData(mapsData);
