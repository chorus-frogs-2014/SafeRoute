var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
  initialize: function(model){
    this.model = model;
    $(this.model).on('change', function(e, data) {
      this.collect(data);
    }.bind(this))
  },
  request: function(){
    this.model.requestCrimes()
  },
  collect: function(data){
    var crimesData = [];
    crimesData.push(data);
    SafeRoute.MasterController.collectCrimeData(crimesData[0])
  }
}
