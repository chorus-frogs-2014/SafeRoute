SafeRoute.CrimesModel = {
  requestCrimes: function(controller){
    $('#fountainG').show();
     $.ajax({
      url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2006-01-01&count=500&type=AA,Mu,Ro,SA,Al,Th',
      type: 'GET',
      dataType: 'jsonp'
    }).done(function(data){
      $('#locations').show();
      controller.collect(data)
    })
  }
}

