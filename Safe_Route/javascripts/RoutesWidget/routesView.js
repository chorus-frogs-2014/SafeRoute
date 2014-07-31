SafeRoute.RoutesView = {
  initialize: function(sanFranGoogleObj){
    this.sanFranGoogleObj = sanFranGoogleObj;
  },
  createMap: function(sanFranGoogleObj){
    this.map = new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
return this.map
  },
  setMapOptions: function(sanFranGoogleObj){

    var mapOptions = {

      zoom:13,

      center: sanFranGoogleObj,

      disableDefaultUI: true
    }

    return mapOptions
  },

  render:function(heatMapData, result, directionsDisplay){
    directionsDisplay.setMap(this.createMap(this.sanFranGoogleObj));

    directionsDisplay.setDirections(result);
    // debugger
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatMapData,
      radius: 100,
      opacity: .5,
      maxIntensity: .9
    });
    heatmap.setMap(this.map)
  }
}
