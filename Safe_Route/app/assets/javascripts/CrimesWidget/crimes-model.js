SafeRoute.CrimesModel = {
	crimeDataGrabber: function(crimeDataResult){
			var self = this
		 $.ajax({
			url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=3500',
			type: 'GET',
			dataType: 'jsonp',
			success:function(data){	
				self.crimeDataResult(data)
			}
		})
	},
	crimeDataResult: function(data){
			var data = data
			// console.log(data)
			SafeRoute.RoutesController.analyzeCrimeAndRouteData(data, result, start, end)
			return data
	}
}


// function testAjax(handleData) {
//   $.ajax({
//     url:"getvalue.php",  
//     success:function(data) {
//       handleData(data); 
//     }
//   });
// }




// Call it like this:

// testAjax(function(output){
//   // here you use the output
// });