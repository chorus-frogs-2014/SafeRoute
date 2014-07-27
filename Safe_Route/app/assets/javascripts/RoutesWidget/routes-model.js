// function routeObj(index, coords, score){
//   this.index = index,
//   this.coords = coords,
//   this.score = score
// }
SafeRoute.RoutesModel = {
  initialize: function(directionsService, directionsDisplay){
    this.directionsService = directionsService;
    this.directionsDisplay = directionsDisplay;
  },

  renderRoutes: function(result, start, end, data) {
    var start = start;
    var end = end;
    var request = {
      origin:start,
      destination:end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    }
    this.newFunction(data, start, end, request, this.directionsService, this.directionsDisplay)
  },

  newFunction: function(data, start, end, request, directionsService, directionsDisplay){
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
        for (var crimeIndexNumber = 0; crimeIndexNumber < data.features.length; crimeIndexNumber++) {
          crimesSpots.push([data.features[crimeIndexNumber].geometry.coordinates])
        }
        for (var path = 0; path < routes.length; path++) { 
          var absoluteCrimeScore = 0
          for(var coord = 0; coord < routes[path].length; coord++) {
            for(var crime = 0; crime<crimesSpots.length; crime++) {
              if(SafeRoute.RoutesModel.closeCrime(routes[path][coord][0], routes[path][coord][1], crimesSpots[crime][0])){
                absoluteCrimeScore += 1
              }
            }
          }
          result.routes[path].score = absoluteCrimeScore/routes[path].length;
        }
        function compare(a,b) {
          if (a.score < b.score){
            return -1;
          } else if (a.score > b.score){
            return 1;
          } else {
            return 0;
          }
        }
        result.routes.sort(compare)
        directionsDisplay.setDirections(result)
        directionsDisplay.setPanel(document.getElementById('directionsPanel'))
      }
    });
}, closeCrime: function(lat, lon, crimeCoord){
  return Math.abs(lat - crimeCoord[1]) < .0005 && Math.abs(lon - crimeCoord[0]) < .0005
}
} 