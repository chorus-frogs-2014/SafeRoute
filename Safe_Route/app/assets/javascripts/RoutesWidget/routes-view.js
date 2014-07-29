SafeRoute.RoutesView = {
  initialize: function(sanFranGoogleObj){
    this.sanFranGoogleObj = sanFranGoogleObj;
  },
  createMap: function(sanFranGoogleObj){
    return new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
  },
  setMapOptions: function(sanFranGoogleObj){
    var mapOptions = {
      zoom:13,
      center: sanFranGoogleObj
    }
    return mapOptions
  },
  render:function(result, directionsDisplay){
    directionsDisplay.setMap(this.createMap(this.sanFranGoogleObj));
    directionsDisplay.setDirections(result);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    this.algorithm(result);
  },
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  algorithm: function(result){
    var bearings = [.75, .666, .583]
    var waypoints = [];
    for (var counter = 0; counter < bearings.length; counter++){
      var lat1 = result.routes[0].legs[0].start_location.k
      var lon1 = result.routes[0].legs[0].start_location.B
      var lat2 = result.routes[0].legs[0].end_location.k
      var lon2 = result.routes[0].legs[0].end_location.B
      console.log("Starting and ending coordinates")
      console.log([lat1, lon1])
      console.log([lat2, lon2])

      var φ1 = toRad(lat1)
      var φ2 = toRad(lat2)
      var λ1 = toRad(lon1)
      var λ2 = toRad(lon2)
      var Δφ = toRad(lat2-lat1)
      var Δλ = toRad(lon2-lon1)
  var R = 6371; // Radius of the earth in km

  function toRad(n) {
    return n * Math.PI / 180;
  };
  function toDeg(n) {
    return n * 180 / Math.PI;
  };
  //Calculating the stright-line distance(shortest path) in km between the starting and ending points

  function getDistanceFromLatLonInKm(φ1,λ1,φ2,λ2) {
    var dLat = φ2 - φ1;
    var dLon = λ2 - λ1;
    var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(φ1) * Math.cos(φ2) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  var distanceR = getDistanceFromLatLonInKm(φ1,λ1,φ2,λ2);
  console.log("Direct Path in Kilometers")
  console.log(distanceR)
  function originalBearing(Δλ, φ1, φ2) {
    var y = Math.sin(Δλ) * Math.cos(φ2);
    var x = Math.cos(φ1)*Math.sin(φ2) - Math.sin(φ1)*Math.cos(φ2)*Math.cos(Δλ);
    var brng = (Math.atan2(y, x)) * (180/Math.PI);
    return brng
  }

  var brng = originalBearing(Δλ, φ1, φ2)
  console.log("bearing")
  console.log(brng)

  var adjacent = distanceR / 2
  console.log("adjacent")
  console.log(adjacent)
  var hypoteneous = C
  var opposite = Math.sqrt(Math.pow(hypoteneous, 2) - (Math.pow(distanceR, 2) / 4))
  console.log('opposite')
  console.log(opposite)
  var tangentd = toDeg(Math.atan(oposite/adjacent))
  console.log("tangent in degrees")
  console.log(tangentd)

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
  console.log("waypointbearings")
  console.log(waypointBearings)

  function Waypoints(d, brng, φ1, λ1) {
    var waypointArray = []
    for (var i=0; i < brng.length; i++) {
      var φ2 = Math.asin( Math.sin(φ1)*Math.cos(d/R) + Math.cos(φ1)*Math.sin(d/R)*Math.cos(brng[i]) );
      var λ2 = λ1 + Math.atan2(Math.sin(brng[i])*Math.sin(d/R)*Math.cos(φ1),Math.cos(d/R)-Math.sin(φ1)*Math.sin(φ2));
      waypointArray.push([toDeg(φ2), toDeg(λ2)])
    }
    return waypointArray
  }

  var legdistance = distanceR * C
  console.log('legdistance')
  console.log(legdistance)

  waypoints.puish(toRad(waypointBearings[0]))
  waypoints.puish(toRad(waypointBearings[1]))
        // ,toRad(waypointBearings[1])]
        console.log("bearingarray")
        console.log(bearingarray)

        waypoint = Waypoints(legdistance, bearingarray, φ1, λ1)
        console.log("waypoint")
        console.log(waypoint)

      }
    }
  }
