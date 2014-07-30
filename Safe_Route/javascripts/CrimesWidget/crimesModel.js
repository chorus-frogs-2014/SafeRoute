SafeRoute.CrimesModel = {
  requestCrimes: function(controller){
    $('#fountainG').show();
     $.ajax({
<<<<<<< HEAD:Safe_Route/javascripts/CrimesWidget/crimes-model.js
      url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=10000',
=======
      url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2009-01-01&count=3500&features',
>>>>>>> master:Safe_Route/javascripts/CrimesWidget/crimesModel.js
      type: 'GET',
      dataType: 'jsonp'
    }).done(function(data){
      $('#locations').hide();
      $('#contact').show();
      $('#directionsPanel').show();
      controller.collect(data)
    })
  }
}

