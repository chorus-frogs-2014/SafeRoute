SafeRoute.RoutesModel = {
  initialize: function(directionsService, directionsDisplay){
    this.directionsService = directionsService;
    this.directionsDisplay = directionsDisplay;
    this.heatMapData = [];
  },
  parseData: function(controller, mapsData, crimesData){
    for (var crime = 0; crime < crimesData.features.length; crime++){
      
      
      SafeRoute.RoutesModel.heatMapData.push({location: new google.maps.LatLng(crimesData.features[crime].geometry.coordinates[1], crimesData.features[crime].geometry.coordinates[0]), weight: Math.random()*100})
    }
    var start = mapsData[0];
    var end = mapsData[1];
    this.createRoutes(controller, start, end, crimesData);
  },
  createRoutes: function(controller, start, end, data) {
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    }
    this.routesAlgorithm(controller, data, request, this.directionsService, this.directionsDisplay)
  },
  routesAlgorithm: function(controller, data, request, directionsService, directionsDisplay){
    var self = this
    directionsService.route(request, function(result, status){
      if (status == google.maps.DirectionsStatus.OK) {
        var routes = []
        var crimeSpots = []
        self.collectAllRoutes(self, result, routes);
        self.populateCrimeSpots(crimeSpots, data);
        self.evaluatePath(routes, crimeSpots, self, result);
        result.routes.sort(function(a,b){
          if (a.score < b.score){return -1} else if (a.score > b.score){return 1} else {return 0}
        })

        controller.sendRoutesToView(SafeRoute.RoutesModel.heatMapData, result, directionsDisplay);
      }
    })
  },
  closeCrimeFinder: function(lat, lon, crimeCoord){
    return Math.abs(lat - crimeCoord[1]) < .0005 && Math.abs(lon - crimeCoord[0]) < .0005
  },
  collectAllRoutes: function(self, result, routes){
    for (var routeIndex = 0; routeIndex <result.routes.length; routeIndex++) {
      self.addPathToRoute(result, routeIndex, route = []);
      routes.push(route)
    }
  },
  addPathToRoute: function(result, index, route){
    for (var j = 0; j < result.routes[index].overview_path.length; j++) {
      route.push([result.routes[index].overview_path[j].k, result.routes[index].overview_path[j].B])
    }
  },
  populateCrimeSpots:function(crimeSpots, data){
    for (var crimeIndexNumber = 0; crimeIndexNumber < data.features.length; crimeIndexNumber++) {
      crimeSpots.push([data.features[crimeIndexNumber].geometry.coordinates])
    }
  },
  evaluatePath:function(routes, crimeSpots, self, result){
    for (var path = 0; path < routes.length; path++) {
      var absoluteCrimeScore = 0
      self.evaluateCoord(absoluteCrimeScore, routes, path, crimeSpots, self)

      result.routes[path].score = absoluteCrimeScore/routes[path].length;
    }
  },
  evaluateCoord: function(absoluteCrimeScore, routes, path, crimeSpots, self){
    for(var coord = 0; coord < routes[path].length; coord++) {
      self.checkForLocalCrimes(absoluteCrimeScore, routes, path, crimeSpots, self, coord);
    }
  },
  checkForLocalCrimes: function(absoluteCrimeScore, routes, path, crimeSpots, self, coord){
    for(var crime = 0; crime<crimeSpots.length; crime++) {
      if(self.closeCrimeFinder(routes[path][coord][0], routes[path][coord][1], crimeSpots[crime][0])){
        absoluteCrimeScore++
      }
    }
  }
}