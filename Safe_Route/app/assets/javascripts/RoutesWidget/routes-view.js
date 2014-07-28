SafeRoute.RoutesView = {
  render:function(result, directionsDisplay){
    directionsDisplay.setDirections(result);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  }
}