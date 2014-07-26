SafeRoute.CrimesModel = {
	crimeDataGrabber: function(controller, start, end, directionsService, directionsDisplay){
		$.ajax({
			url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=1000',
			type: 'GET',
			dataType: 'jsonp',
			success:function(data){
				controller.sendToRoutes(data, start, end, directionsService, directionsDisplay)
				// SafeRoute.RoutesModel.renderRoutes(data, start, end, directionsService, directionsDisplay);
			}
		})
	}
}