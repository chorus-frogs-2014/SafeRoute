SafeRoute.CrimesController = {
  initialize: function(model){
    this.model = model;
  },
  request: function(){
    this.model.requestCrimes(this)
  }
  // collect: function(data){
  //   crimesData = [];
  //   crimesData.push(data);
  // $(this).trigger('collectCrimes', [crimesData]).bind(this);
  // }
}