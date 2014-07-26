SafeRoute.CrimesModel = {
	crimeDataGrabber: function(start, end, directionsService, directionsDisplay){
		$.ajax({
			url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=1000',
			type: 'GET',
			dataType: 'jsonp',
			success:function(data){
				SafeRoute.RoutesModel.renderRoutes(data, start, end, directionsService, directionsDisplay);
			}
		})
	}
}