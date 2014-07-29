

// var getPositonSuccess = function(position){
//     var currentLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
//     geocoder = new google.maps.Geocoder();
//     geocoder.geocode({'latLng': currentLatLng}, geocoderCB)
//   }

//   var geocoderCB = function(results, status){
//     if (status == google.maps.GeocoderStatus.OK){
//       showAddress(results);
//     } else {
//       showError();
//     }
//   }
//   var showAddress = function(results){
//     $('input').eq(0).val(results[0].formatted_address)
//   }

//   var showError = function(){
//     alert("Sorry! Couldn't get your current location." )
//   }





//     if(navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(getPositonSuccess, showError);
//   } else {
//     showError();
//   }