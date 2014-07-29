SafeRoute.CrimesModel = {
  requestCrimes: function(controller){
     $.ajax({
      url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=3500',
      type: 'GET',
      dataType: 'jsonp'
    }).done(function(data){
      controller.collect(data)
    })
  }
}