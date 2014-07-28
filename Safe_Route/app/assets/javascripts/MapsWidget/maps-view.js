SafeRoute.MapsView = {
  renderMap: function(controller, directionsDisplay, sanFranGoogleObj){
    directionsDisplay.setMap(new google.maps.Map(document.getElementById("map-canvas"), {
      zoom:13,
      center: sanFranGoogleObj,
      disableDefaultUI: true
    }));
  }
}