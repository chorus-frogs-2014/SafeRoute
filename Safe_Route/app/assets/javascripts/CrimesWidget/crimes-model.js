SafeRoute.CrimesModel = {
	crimeDataGrabber: function(crimeDataResult){
			var self = this
		 $.when( $.ajax({
			url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=3500',
			type: 'GET',
			dataType: 'jsonp'
			}
		})
	).done
},
	crimeDataResult: function(data){
			var data = data
			// console.log(data)
			return data
	}
}

$.when( doAjax(), doMoreAjax() )
  .done(function() {
    console.log( 'I fire once BOTH ajax requests have completed!' );
  })