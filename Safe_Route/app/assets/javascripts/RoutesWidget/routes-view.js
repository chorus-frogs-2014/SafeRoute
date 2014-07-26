SafeRoute.RoutesView = {
	populateMap:function(result, directionsDisplay){
		console.log(directionsDisplay)
		directionsDisplay.setDirections(result);
	}
}