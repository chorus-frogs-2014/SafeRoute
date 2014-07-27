SafeRoute.RoutesModel = {
  initialize: function(directionsService, directionsDisplay){
    this.directionsService = directionsService;
    this.directionsDisplay = directionsDisplay;
  },
  renderRoutes: function(start, end, data) {
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    }
    this.routesAlgorithm(this, data, request, this.directionsService, this.directionsDisplay)
  },
  routesAlgorithm: function(model, data, request, directionsService, directionsDisplay){
    directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result)
        var routes = []
        var crimesSpots = []
        model.collectAllRoutes(model, result, routes);
        for (var crimeIndexNumber = 0; crimeIndexNumber < data.features.length; crimeIndexNumber++) {
          crimesSpots.push([data.features[crimeIndexNumber].geometry.coordinates])
        }
        for (var path = 0; path < routes.length; path++) { 
          var absoluteCrimeScore = 0
          for(var coord = 0; coord < routes[path].length; coord++) {
            for(var crime = 0; crime<crimesSpots.length; crime++) {
              if(model.closeCrimeFinder(routes[path][coord][0], routes[path][coord][1], crimesSpots[crime][0])){
                absoluteCrimeScore++
              }
            }
          }
          result.routes[path].score = absoluteCrimeScore/routes[path].length;
        }
        result.routes.sort(function(a,b){
          if (a.score < b.score){return -1} else if (a.score > b.score){return 1} else {return 0}
        })
        directionsDisplay.setDirections(result)
        directionsDisplay.setPanel(document.getElementById('directionsPanel'))
      }
    })
  }, 
  closeCrimeFinder: function(lat, lon, crimeCoord){
    return Math.abs(lat - crimeCoord[1]) < .0005 && Math.abs(lon - crimeCoord[0]) < .0005
  },
  collectAllRoutes: function(model, result, routes){
    for (var routeIndex = 0; routeIndex <result.routes.length; routeIndex++) {
      model.addPathToRoute(result, routeIndex, route = []);
      routes.push(route)
    }
  },
  addPathToRoute: function(result, index, route){
    for (var j = 0; j < result.routes[index].overview_path.length; j++) {
      route.push([result.routes[index].overview_path[j].k, result.routes[index].overview_path[j].B])
    }
  }
} 