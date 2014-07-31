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
      zoom:12,
      center: sanFranGoogleObj,
       styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#333739"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#1fa856"}]},{"featureType":"poi","stylers":[{"color":"#1fa856"},{"lightness":-7}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#1fa856"},{"lightness":-28}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#1fa856"},{"visibility":"on"},{"lightness":-15}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#1fa856"},{"lightness":-8}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#1fa856"},{"lightness":-34}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#333739"},{"weight":0.8}]},{"featureType":"poi.park","stylers":[{"color":"#1fa856"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#333739"},{"weight":0.3},{"lightness":10}]}],
      streetViewControl: false,
      disableDefaultUI: true
    }
    return mapOptions
  },
  render:function(heatMapData, result, directionsDisplay){
    directionsDisplay.setMap(this.createMap(this.sanFranGoogleObj));
    directionsDisplay.setDirections(result);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatMapData,
      radius: 120,
      opacity: .5,
      maxIntensity: .15
    });
    heatmap.setMap(this.map)
  }
}
