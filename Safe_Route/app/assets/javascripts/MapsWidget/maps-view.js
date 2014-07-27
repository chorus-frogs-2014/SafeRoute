SafeRoute.MapsView = {
  renderMap: function(controller, directionsDisplay, sanFranGoogleObj){
    directionsDisplay.setMap(new google.maps.Map(document.getElementById("map-canvas"), {
      disableDefaultUI: true,
      zoom:13,
      center: sanFranGoogleObj
    }));
  }
}