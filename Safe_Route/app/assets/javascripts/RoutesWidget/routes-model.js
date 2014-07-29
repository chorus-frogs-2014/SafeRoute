SafeRoute.RoutesModel = {
  initialize: function(directionsService, directionsDisplay){
    this.directionsService = directionsService;
    this.directionsDisplay = directionsDisplay;
  },
  parseData: function(controller, mapsData, crimesData){
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
    SafeRoute.RoutesModel.directionsService.route(request, function(result, status){
      var waypointsArr = SafeRoute.RoutesModel.algorithm(result);
      SafeRoute.RoutesModel.allResults = []
      SafeRoute.RoutesModel.caller(waypointsArr, controller, start, end, data)
    })
  },
  caller: function(waypointsArr,controller, start, end, data){

    for(var index = 0; index < waypointsArr.length; index++){
      var request = {
        origin:start,
        destination:end,
        waypoints: [{location:new google.maps.LatLng(waypointsArr[index][0], waypointsArr[index][1]), stopover:false}],
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true
      }
      this.routesAlgorithm(controller, data, request, this.directionsService, this.directionsDisplay)
    }
  },
  routesAlgorithm: function(controller, data, request, directionsService, directionsDisplay){
    var self = this
    directionsService.route(request, function(result,status){
      if (status == google.maps.DirectionsStatus.OK) {
        var routes = []
        var crimeSpots = []
        self.collectAllRoutes(self, result, routes);
        self.populateCrimeSpots(crimeSpots, data);
        self.evaluatePath(routes, crimeSpots, self, result);
        // result.routes.sort(function(a,b){
        //   if (a.score < b.score){return -1} else if (a.score > b.score){return 1} else {return 0}
        // })
        SafeRoute.RoutesModel.allResults.push(result);
        // console.log(SafeRoute.RoutesModel.allResults)
        // if(SafeRoute.RoutesModel.allResults.length == 6){
          controller.sendRoutesToView(SafeRoute.RoutesModel.allResults, SafeRoute.RoutesModel.directionsDisplay);
        // }
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
  },
  algorithm: function(result){
    var bearings = [.75, .666, .583]
    var waypoints = [];
    for (var counter = 0; counter < bearings.length; counter++){
     var lat1 = result.routes[0].legs[0].start_location.k
     var lon1 = result.routes[0].legs[0].start_location.B
     var lat2 = result.routes[0].legs[0].end_location.k
     var lon2 = result.routes[0].legs[0].end_location.B
     var φ1 = toRad(lat1)
     var φ2 = toRad(lat2)
     var λ1 = toRad(lon1)
     var λ2 = toRad(lon2)
     var Δφ = toRad(lat2-lat1)
     var Δλ = toRad(lon2-lon1)
     var R = 6371;
     function toRad(n) {
       return n * Math.PI / 180;
     };

     function toDeg(n) {
      return n * 180 / Math.PI;
    };
    function getDistanceFromLatLonInKm(φ1,λ1,φ2,λ2) {
      var dLat = φ2 - φ1;
      var dLon = λ2 - λ1;
      var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ;
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      var d = R * c;
      return d;
    }
    var distanceR = getDistanceFromLatLonInKm(φ1,λ1,φ2,λ2);

    function originalBearing(Δλ, φ1, φ2) {
      var y = Math.sin(Δλ) * Math.cos(φ2);
      var x = Math.cos(φ1)*Math.sin(φ2) - Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
      var brng = (Math.atan2(y, x)) * (180/Math.PI);
      return brng
    }
    var brng = originalBearing(Δλ, φ1, φ2)
    var adjacent = distanceR / 2
    var oposite = Math.sqrt((5 * (Math.pow(distanceR,2)))/16)
    var tangentd = toDeg(Math.atan(oposite/adjacent))
    function waypointbearingfinder(brng, tangentd) {
      if (brng > 0 && brng + tangentd > 180 ) {
        var total = tangentd + brng
        var overflow = total - 180
        var brngplus = -180 + overflow
        var brngminus = brng - tangentd
        return [brngplus, brngminus]
      }
      else if (brng < 0 && brng - tangentd < -180) {
        var total = brng - tangentd
        var overflow = Math.abs(180 + total)
        var brngminus = 180 - overflow
        var brngplus = brngplus + tangentd
        return [brngplus, brngminus]
      }
      else {
        var brngplus = brng + tangentd
        var brngminus = brng - tangentd
        return [brngplus, brngminus]
      }
    }
    var waypointBearings = waypointbearingfinder(brng, tangentd);
    function Waypoints(d, brng, φ1, λ1) {
      var waypointArray = []
      for (var i=0; i < brng.length; i++) {
        var φ2 = Math.asin( Math.sin(φ1)*Math.cos(d/R) + Math.cos(φ1)*Math.sin(d/R)*Math.cos(brng[i]) );
        var λ2 = λ1 + Math.atan2(Math.sin(brng[i])*Math.sin(d/R)*Math.cos(φ1),Math.cos(d/R)-Math.sin(φ1)*Math.sin(φ2));
        waypointArray.push([toDeg(φ2), toDeg(λ2)])
      }
      return waypointArray
    }

    var legdistance = distanceR * bearings[counter]
    var bearingarray = [toRad(waypointBearings[0]),toRad(waypointBearings[1])]
    waypoint = Waypoints(legdistance, bearingarray, φ1, λ1)
    waypoints.push(waypoint[0], waypoint[1])
  }
  return waypoints
}
}


