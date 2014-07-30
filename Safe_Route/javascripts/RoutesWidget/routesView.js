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

      center: sanFranGoogleObj,

      disableDefaultUI: true
    }

    return mapOptions
  },

  render:function(result, directionsDisplay){

    console.log(result)

    directionsDisplay.setMap(this.createMap(this.sanFranGoogleObj));

    directionsDisplay.setDirections(result);

    directionsDisplay.setPanel(document.getElementById("directionsPanel"));

  }
}
