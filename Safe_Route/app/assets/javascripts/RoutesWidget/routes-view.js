SafeRoute.RoutesView = {
	listenForSubmit: function(controller){
		$('#locations').on('submit', function(){
			controller.gatherCrimeData();
		})
	}
}