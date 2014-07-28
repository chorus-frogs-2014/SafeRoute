SafeRoute.RoutesView = {
	listenForSubmit: function(controller){
		$('#locations').on('submit', function(){
			controller.submitPoints();
		})
	},
	populateMap: function(result, directionsDisplay){
		directionsDisplay.setDirections(result);
    directionsDisplay.setPanel(document.getElementById('directionsPanel'));
  }
}
