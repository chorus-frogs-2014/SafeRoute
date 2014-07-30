var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
  initialize: function(model){
    this.model = model;
  },
  request: function(){
    this.model.requestCrimes(this)
  },
  collect: function(data){
    console.log(data)
    var crimesData = [];
    crimesData.push(data);
    console.log(crimesData)
    console.log(crimesData[0])
    SafeRoute.MasterController.collectCrimeData(crimesData[0])
  }
}