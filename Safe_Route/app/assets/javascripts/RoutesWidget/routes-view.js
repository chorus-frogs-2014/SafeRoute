SafeRoute.RoutesView = {
	listenForSubmit: function(controller){
		$('#locations').on('submit', function(){
			controller.submitPoints();
		})
		$('#contact_info').on('submit', function(){
			var directions = document.getElementsByClassName('adp')[0].innerText;
			controller.submitContacts(directions);
		})
	}, 
	populateMap: function(result, directionsDisplay){
		directionsDisplay.setDirections(result);
		directionsDisplay.setPanel(document.getElementById('directionsPanel'));
	}
}