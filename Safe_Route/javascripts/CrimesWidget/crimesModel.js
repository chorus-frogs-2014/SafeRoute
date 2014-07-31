SafeRoute.CrimesModel = {
  requestCrimes: function(controller){
    $('#fountainG').show();
    $('#loading').addClass('animated zoomIn');
    $.ajax({
      url: 'http://sanfrancisco.crimespotting.org/crime-data?format=json&dstart=2006-01-01&count=3500&type=AA,Mu,Ro,SA,Al,Th',
      type: 'GET',
      dataType: 'jsonp'
    }).done(function(data){
      $('#locations').addClass('flex')
      $('#loading').hide();
      $('#loadingImage').hide();
      $(this).trigger('collectCrimes', [data])
    }.bind(this))
  }
}
