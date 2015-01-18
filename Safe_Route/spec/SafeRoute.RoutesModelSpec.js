describe("SafeRoute.RoutesModel", function(){

  describe("officialPathEvaluator", function(){

    describe("if a crime was reported at any point on the path", function(){
      it("raises the crime score by 1 ", function(){
        routeObject = {overview_path: [{k: 23.0000, B: 42.0000}]}
        SafeRoute.RoutesModel.crimesSpots = [ [ [42.0001, 23.0002] ] ]
        var scoredRouteObj = SafeRoute.RoutesModel.officialPathEvaluator(routeObject)
        expect(routeObject.score).toEqual(1)
      })
    })

    describe("if a crime was reported at any point on the path", function(){
      it("does not raise the crime score", function(){
        routeObject = {overview_path: [{k: 25.0000, B: 45.0000}]}
        SafeRoute.RoutesModel.crimesSpots = [ [ [23.0001, 78.0002] ] ]
        var scoredRouteObj = SafeRoute.RoutesModel.officialPathEvaluator(routeObject)
        expect(routeObject.score).toEqual(0)
      })
    })

  })

  describe("algorithm", function(){
    beforeEach(function(){
      result = {
        routes: [
            { legs:
              [
                {
                  start_location: {B: -122.39662629999998, k: 37.7843627},
                  end_location: {B: -122.4311447, k: 37.7840601}
                }
              ]
            }
        ]
      }
    })

    it("returns six waypoints coordinates in an array", function(){
      var waypoints = SafeRoute.RoutesModel.algorithm(result)
      expect(waypoints.length).toEqual(6)
    })
    describe("waypoints", function(){
      beforeEach(function(){
        waypoints = SafeRoute.RoutesModel.algorithm(result)
        startLocationLat = result.routes[0].legs[0].start_location.k
        startLocationLng = result.routes[0].legs[0].start_location.B
        endLocationLat = result.routes[0].legs[0].end_location.k
        endLocationLng = result.routes[0].legs[0].end_location.B
        R = 6371
      })

      describe("the first waypoint", function(){
        it("creates a direction whose distace is no longer than 1.5 times of the original distance.", function(){

          var waypointLat = waypoints[0][0]
          var waypointLng = waypoints[0][1]
          // calculate teh distance between start and waypoint
          var dLat = startLocationLat - waypointLat;
          var dLon = startLocationLng - waypointLng;
          var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(waypointLat) * Math.cos(startLocationLat) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var dBtwStartAndWay = R * c;

          // calculate teh distance between end and waypoint
          var dLat = endLocationLat - waypointLat;
          var dLon = endLocationLng - waypointLng;
          var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(waypointLat) * Math.cos(endLocationLat) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var dBtwEndAndWay = R * c;

          // calculate teh distance between start and end
          var dLat = endLocationLat - startLocationLat;
          var dLon = endLocationLng - startLocationLng;
          var a =
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(startLocationLat) * Math.cos(endLocationLat) *
          Math.sin(dLon/2) * Math.sin(dLon/2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
          var dBtwStartAndEnd = R * c;

          var ratio = (dBtwStartAndWay + dBtwEndAndWay)/dBtwStartAndEnd
          expect(ratio).toBeLessThan(1.5)
        })
      })

      describe("the second waypoint", function(){
        it("creates a direction whose distace is no longer than 1.5 times of the original disatance.", function(){

          var waypointLat = waypoints[1][0]
          var waypointLng = waypoints[1][1]
          // calculate teh distance between start and waypoint
            var dLat = startLocationLat - waypointLat;
            var dLon = startLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(startLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndWay = R * c;

          // calculate teh distance between end and waypoint
            var dLat = endLocationLat - waypointLat;
            var dLon = endLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwEndAndWay = R * c;

          // calculate teh distance between start and end
            var dLat = endLocationLat - startLocationLat;
            var dLon = endLocationLng - startLocationLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(startLocationLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndEnd = R * c;

            var ratio = (dBtwStartAndWay + dBtwEndAndWay)/dBtwStartAndEnd
            expect(ratio).toBeLessThan(1.5)
        })
      })

      describe("the third waypoint", function(){
        it("creates a direction whose distace is no longer than 1.5 times of the original disatance.", function(){

          var waypointLat = waypoints[2][0]
          var waypointLng = waypoints[2][1]
          // calculate teh distance between start and waypoint
            var dLat = startLocationLat - waypointLat;
            var dLon = startLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(startLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndWay = R * c;

          // calculate teh distance between end and waypoint
            var dLat = endLocationLat - waypointLat;
            var dLon = endLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwEndAndWay = R * c;

          // calculate teh distance between start and end
            var dLat = endLocationLat - startLocationLat;
            var dLon = endLocationLng - startLocationLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(startLocationLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndEnd = R * c;

            var ratio = (dBtwStartAndWay + dBtwEndAndWay)/dBtwStartAndEnd
            expect(ratio).toBeLessThan(1.5)
        })
      })

      describe("the fourth waypoint", function(){
        it("creates a direction whose distace is no longer than 1.5 times of the original disatance.", function(){

          var waypointLat = waypoints[3][0]
          var waypointLng = waypoints[3][1]
          // calculate teh distance between start and waypoint
            var dLat = startLocationLat - waypointLat;
            var dLon = startLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(startLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndWay = R * c;

          // calculate teh distance between end and waypoint
            var dLat = endLocationLat - waypointLat;
            var dLon = endLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwEndAndWay = R * c;

          // calculate teh distance between start and end
            var dLat = endLocationLat - startLocationLat;
            var dLon = endLocationLng - startLocationLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(startLocationLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndEnd = R * c;

            var ratio = (dBtwStartAndWay + dBtwEndAndWay)/dBtwStartAndEnd
            expect(ratio).toBeLessThan(1.5)
        })
      })

      describe("the fifth waypoint", function(){
        it("creates a direction whose distace is no longer than 1.5 times of the original disatance.", function(){

          var waypointLat = waypoints[4][0]
          var waypointLng = waypoints[4][1]
          // calculate teh distance between start and waypoint
            var dLat = startLocationLat - waypointLat;
            var dLon = startLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(startLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndWay = R * c;

          // calculate teh distance between end and waypoint
            var dLat = endLocationLat - waypointLat;
            var dLon = endLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwEndAndWay = R * c;

          // calculate teh distance between start and end
            var dLat = endLocationLat - startLocationLat;
            var dLon = endLocationLng - startLocationLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(startLocationLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndEnd = R * c;

            var ratio = (dBtwStartAndWay + dBtwEndAndWay)/dBtwStartAndEnd
            expect(ratio).toBeLessThan(1.5)
        })
      })

      describe("the sixth waypoint", function(){
        it("creates a direction whose distace is no longer than 1.5 times of the original disatance.", function(){

          var waypointLat = waypoints[5][0]
          var waypointLng = waypoints[5][1]
          // calculate teh distance between start and waypoint
            var dLat = startLocationLat - waypointLat;
            var dLon = startLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(startLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndWay = R * c;

          // calculate teh distance between end and waypoint
            var dLat = endLocationLat - waypointLat;
            var dLon = endLocationLng - waypointLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(waypointLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwEndAndWay = R * c;

          // calculate teh distance between start and end
            var dLat = endLocationLat - startLocationLat;
            var dLon = endLocationLng - startLocationLng;
            var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(startLocationLat) * Math.cos(endLocationLat) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var dBtwStartAndEnd = R * c;

            var ratio = (dBtwStartAndWay + dBtwEndAndWay)/dBtwStartAndEnd
            expect(ratio).toBeLessThan(1.5)
        })
      })

    })

  })

})