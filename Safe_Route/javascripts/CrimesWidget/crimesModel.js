SafeRoute.CrimesModel = {
  requestCrimes: function(controller){
    $('#fountainG').show();
     $.ajax({
<<<<<<< HEAD
      url: "http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2006-01-01&count=3500&type=AA,Mu,Ro,SA,Al,Th",
=======
      url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2006-01-01&count=3500&type=AA,Mu,Ro,SA,Al,Th',
>>>>>>> master
      type: 'GET',
      dataType: 'jsonp'
    }).done(function(data){
      $('#locations').show()
      controller.collect(data)
    })
  }
}

