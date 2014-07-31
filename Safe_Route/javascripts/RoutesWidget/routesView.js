SafeRoute.RoutesView = {
  initialize: function(sanFranGoogleObj){
    this.sanFranGoogleObj = sanFranGoogleObj;
  },
  createMap: function(sanFranGoogleObj){
    this.map = new google.maps.Map(document.getElementById("map-canvas"), this.setMapOptions(sanFranGoogleObj));
    return this.map
  },
  setMapOptions: function(sanFranGoogleObj){
    var mapOptions = {
      // mapTypeId: google.maps.MapTypeId.SATELLITE,
      zoom:13,
      center: sanFranGoogleObj,
      styles: [{'featureType':'water','stylers':[{'color':'#021019'}]},{'featureType':'landscape','stylers':[{'color':'#08304b'}]},{'featureType':'poi','elementType':'geometry','stylers':[{'color':'#0c4152'},{'lightness':5}]},{'featureType':'road.highway','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'road.highway','elementType':'geometry.stroke','stylers':[{'color':'#0b434f'},{'lightness':2}]},{'featureType':'road.arterial','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'road.arterial','elementType':'geometry.stroke','stylers':[{'color':'#0b3d51'},{'lightness':16}]},{'featureType':'road.local','elementType':'geometry','stylers':[{'color':'#000000'}]},{'elementType':'labels.text.fill','stylers':[{'color':'#ffffff'}]},{'elementType':'labels.text.stroke','stylers':[{'color':'#000000'},{'lightness':13}]},{'featureType':'transit','stylers':[{'color':'#146474'}]},{'featureType':'administrative','elementType':'geometry.fill','stylers':[{'color':'#000000'}]},{'featureType':'administrative','elementType':'geometry.stroke','stylers':[{'color':'#144b53'},{'lightness':14},{'weight':1.4}]}],
      streetViewControl: false,
      disableDefaultUI: true
    }
    return mapOptions
  },
  render:function(heatMapData, result, directionsDisplay){
    directionsDisplay.setMap(this.createMap(this.sanFranGoogleObj));
    directionsDisplay.setDirections(result);
    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatMapData,
      radius: 120,
      opacity: .5,
      maxIntensity: .15
    });
    heatmap.setMap(this.map)
  }
}
