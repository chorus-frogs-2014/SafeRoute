SafeRoute.UsersModel = {
    location: function(controller) {
        this.controller = controller
        var self = this
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(self.success, this.controller.notify)
        } else {
            this.controller.notify();
        }
    },
    success: function(position) {
        var geocoder = new google.maps.Geocoder()
        geocoder.geocode({
            'latLng': new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
        }, SafeRoute.UsersModel.status)
    },
    status: function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            SafeRoute.UsersController.collectLocation(results);
        } else {
            this.controller.notify();
      }
    },
    prepareEmail: function() {
        var email = this.view.collectEmail();
        var directionHTML = this.formatDirectionText(this.view.collectDirections());
        return {
            'key': "kw7GF1wkNIN7P2ZVseK9JQ",
            'message': {
                'html': directionHTML,
                'from_email': 'SafeRoute@SafeRoute.com',
                'to': [{
                    'email': email,
                    'name': 'SafeRoute',
                    'type': 'to'
                }],
                'autotext': 'true',
                'subject': 'Your SafeRoute Directions!'
            }
        }
    },
    formatDirectionText: function(directionText) {
        directionText.pop()
        directionText.pop()
        directionText.shift()
        directionText[0] = 'Start:' + directionText[0]
        directionText[1] = 'Total Time:' + directionText[1]
        directionText[directionText.length - 1] = 'End:' + directionText[directionText.length - 1]
        var directionHTML = '<b>Here are your SafeRoute directions. As always, arrive safely.</b><br /><br />' + directionText.shift() + '<br /><br/>'
        directionHTML += directionText.shift() + '<br /><br/>'
        for (var i = 0; i < directionText.length - 1; i++) {
            directionHTML += directionText[i] + ' (' + directionText[i + 1] + ')' + '<br/><br />'
            i++
        }
        directionHTML += directionText.pop()
        return directionHTML
  }
}