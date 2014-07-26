SafeRoute.RoutesModel = {
	renderRoutes: function(data, start, end, directionsService, directionsDisplay) {
		var start = start;
		var end = end;
		var request = {
			origin:start,
			destination:end,
			travelMode: google.maps.TravelMode.WALKING,
			provideRouteAlternatives: true
		};
		directionsService.route(request, function(result, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				directionsDisplay.setDirections(result)
				var routes = []
				for (var i = 0; i <result.routes.length; i++) {
					var route = []
					for (var j = 0; j <result.routes[i].overview_path.length; j++) {
						route.push([result.routes[i].overview_path[j].k, result.routes[i].overview_path[j].B])
					}
					routes.push(route)
				}
				var crimesSpots = []
				for (var d = 0; d < data.features.length; d++) {
					crimesSpots.push([data.features[d].geometry.coordinates])
				}
				var minPath = 0
				var minScore = 0
				for (var path=0; path < routes.length; path++) {
					var absoluteCrimeScore = 0
					for(var coord=0; coord < routes[path].length; coord++) {
						for(var crime=0; crime<crimesSpots.length; crime++) {
							if (Math.abs(routes[path][coord][0] - crimesSpots[crime][0][1]) < .0005 && Math.abs(routes[path][coord][1] - crimesSpots[crime][0][0]) < .0005) {
								absoluteCrimeScore += 1
							}
						}
					}
					var scaledCrime = absoluteCrimeScore/routes[path].length
					if (minScore == 0) {
						minScore = scaledCrime
					}
					else {
						if (scaledCrime < minScore) {
							minScore = scaledCrime
							minPath = path
						}
					}
				}
				result.routes = [result.routes[minPath]]
				directionsDisplay.setDirections(result)
			}
		});
}
}	