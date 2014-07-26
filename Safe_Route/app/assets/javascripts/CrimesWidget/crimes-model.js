SafeRoute.CrimesModel = {
	crimeDataGrabber: function(){
		return $.ajax({
			url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=3500',
			type: 'GET',
			dataType: 'jsonp',
			success:function(data){	
			}
		})
	},
	crimeDataResult: function(){
		return this.crimeDataGrabber();
	}
}