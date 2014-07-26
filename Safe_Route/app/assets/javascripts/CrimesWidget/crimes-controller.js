var SafeRoute = SafeRoute || {}
SafeRoute.CrimesController = {
	initialize: function(model){
		this.model = model;
    this.request();
	},
	request: function(){
		this.model.requestCrimes(this)
	},
	collect: function(data){
    var crimesData = [];
    crimesData.push(data);
    return crimesData[0].features
	}
}