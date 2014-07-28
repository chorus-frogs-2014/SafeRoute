SafeRoute.RoutesModel = {
  // initialize: function(directionsService, directionsDisplay){
  //   this.directionsService = directionsService;
  //   this.directionsDisplay = directionsDisplay;
  // },
  // renderRoutes: function(result, start, end, data) {
  //   var start = start;
  //   var end = end;
  //   var request = {
  //     origin:start,
  //     destination:end,
  //     travelMode: google.maps.TravelMode.WALKING,
  //     provideRouteAlternatives: true
  //   }
  //   this.newFunction(data, start, end, request, this.directionsService, this.directionsDisplay)
  // },
  //   newFunction: function(data, start, end, request, directionsService, directionsDisplay){
  //     directionsService.route(request, function(result, status) {
  //     if (status == google.maps.DirectionsStatus.OK) {
  //       directionsDisplay.setDirections(result)


  //       // lat and long of
  //       // result.routes[0].overview_path[0].k
  //       var routes = []
  //       for (var i = 0; i <result.routes.length; i++) {
  //         var route = []
  //         for (var j = 0; j <result.routes[i].overview_path.length; j++) {
  //           route.push([result.routes[i].overview_path[j].k, result.routes[i].overview_path[j].B])
  //         }
  //         routes.push(route)
  //       }
  //       // routes has three paths
  //       //Each path has 35-40 equi-distant coordinates
  //       // console.log(routes)


  //       // data.features[3].geometry.coordinates -- gets coords
  //       //data.features[15].properties.crime_type  -- gets crime
  //       console.log("+++++++++++++")
  //       console.log(data)
  //       console.log("+++++++++++++")
  //       var crimesSpots = []
  //       for (var d = 0; d < data.features.length; d++) {
  //         crimesSpots.push([data.features[d].geometry.coordinates])
  //       }
  //       console.log(crimesSpots)

  //       // Safety ranking algorith PSEUDOCODE
  //       //Iterate through each of the three proposed paths
  //       //Iterate through each coordinate
  //       //For each coordinate, iterate through each crime spot
  //       //if the distnce beween the the coordinate and the crime is less than 1 city block, add one point to a "crime-count"
  //       //Take this crime count, and divide by the number ofcoordinates in the path
  //       // return the path with the lowest score
  //       //.0005 is 50 yards


  //       var minPath = 0
  //       var minScore = 0
  //       for (var path=0; path < routes.length; path++) {
  //         var absoluteCrimeScore = 0
  //         for(var coord=0; coord < routes[path].length; coord++) {
  //           for(var crime=0; crime<crimesSpots.length; crime++) {
  //             // debugger
  //             if (Math.abs(routes[path][coord][0] - crimesSpots[crime][0][1]) < .0005 && Math.abs(routes[path][coord][1] - crimesSpots[crime][0][0]) < .0005) {
  //                 absoluteCrimeScore += 1
  //             }
  //           }
  //         }
  //         var scaledCrime = absoluteCrimeScore/routes[path].length
  //         console.log(scaledCrime)
  //         if (minScore == 0) {
  //           minScore = scaledCrime
  //         }
  //         else {
  //           if (scaledCrime < minScore) {
  //             minScore = scaledCrime
  //             minPath = path
  //           }
  //         }
  //       }
  //       result.routes = [result.routes[minPath]]

  //       console.log(result)

  //       console.log(minPath)
  //       console.log(minScore)




  //       directionsDisplay.setDirections(result)
  //       // debugger
  //     }
  //   });
  // }
}