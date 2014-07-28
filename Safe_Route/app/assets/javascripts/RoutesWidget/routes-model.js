SafeRoute.RoutesModel = {
  initialize: function(directionsService, directionsDisplay){
    this.directionsService = directionsService;
    this.directionsDisplay = directionsDisplay;
  },
  definePoints: function(controller, start, end){
    this.start = start;
    this.end = end
    controller.requestCrimeData();
  },
  renderRoutes: function(data, controller) {
    var request = {
      origin:this.start,
      destination:this.end,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    }
    this.routesAlgorithm(controller, this, data, request, this.directionsService, this.directionsDisplay)
  },
  routesAlgorithm: function(controller,model, data, request, directionsService, directionsDisplay){
    // console.log(data)
    directionsService.route(request, function(result, status){
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(result)
        var routes = []
        var crimeSpots = []
        model.collectAllRoutes(model, result, routes);
        model.populateCrimeSpots(crimeSpots, data);
        model.evaluatePath(routes, crimeSpots, model, result);
        result.routes.sort(function(a,b){
          if (a.score < b.score){return -1} else if (a.score > b.score){return 1} else {return 0}
        })
        controller.sendRoutesToView(result, directionsDisplay);
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
  },
  populateCrimeSpots:function(crimeSpots, data){
    for (var crimeIndexNumber = 0; crimeIndexNumber < data.features.length; crimeIndexNumber++) {
      crimeSpots.push([data.features[crimeIndexNumber].geometry.coordinates])
    }
  },
  evaluatePath:function(routes, crimeSpots, model, result){
    for (var path = 0; path < routes.length; path++) { 
      var absoluteCrimeScore = 0
      for(var coord = 0; coord < routes[path].length; coord++) {
        for(var crime = 0; crime<crimeSpots.length; crime++) {
          if(model.closeCrimeFinder(routes[path][coord][0], routes[path][coord][1], crimeSpots[crime][0])){
            absoluteCrimeScore++
          }
        }
      }
      result.routes[path].score = absoluteCrimeScore/routes[path].length;
    }
  },
  storeContacts: function(directions, phone, email){
    this.phone = phone;
    this.email = email;
    this.sendText(this.phone)
    this.sendEmail(directions, this.email)
  },
  sendText: function(phone){

  },
  sendEmail: function(directions, email){
     $.ajax({
      url: 'https://mandrillapp.com/api/1.0/messages/send.json',
      type: 'POST',
      data: {
      'key': "kw7GF1wkNIN7P2ZVseK9JQ",
      'message':{
        'text': directions,
        'from_email': 'SafeRoute@SafeRoute.com',
        'to':[
          {
            'email': email,
            'name': 'Austin',
            'type': 'to'
          }
        ],
        'autotext':'true',
        'subject':'Your subject here!'
      }
    }
    }).done(function(data){
      // console.log("hey")
    })
  }

} 