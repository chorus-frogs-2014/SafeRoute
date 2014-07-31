var SafeRoute = SafeRoute || {}
SafeRoute.MasterController = {
    initialize: function(MapsController, MapsView, CrimesController, CrimesModel, RoutesController, RoutesModel, RoutesView, UsersController, UsersModel, UsersView) {
        this.sanFranGoogleObj = new google.maps.LatLng(37.7583, -122.4367);
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();
        this.MapsController = MapsController;
        this.MapsView = MapsView;
        this.CrimesController = CrimesController;
        this.CrimesModel = CrimesModel;
        this.RoutesController = RoutesController;
        this.RoutesModel = RoutesModel;
        this.RoutesView = RoutesView;
        this.UsersController = UsersController;
        this.UsersModel = UsersModel;
        this.UsersView = UsersView;
        this.MapsController.initialize(this.MapsView);
        this.CrimesController.initialize(this.CrimesModel);
        this.RoutesController.initialize(this.RoutesModel, this.RoutesView);
        this.RoutesModel.initialize(this.directionsService, this.directionsDisplay);
        this.RoutesView.initialize(this.sanFranGoogleObj);
        this.UsersController.initialize(this.UsersModel, this.UsersView);
        this.run();
    },
    run: function() {
        this.listen();
        this.MapsView.animate();
        this.MapsView.listen(this.MapsController);
        this.MapsView.render(this.directionsDisplay, this.sanFranGoogleObj);
        this.UsersController.fetch();
        this.CrimesController.request();
    },

    listen: function() {
        $(document).on('collectCoords', function(e, mapsData) {
            this.RoutesController.collectMapAndCrimeData(mapsData, this.crimesData).bind(this);
        }.bind(this));

        $(document).on('collectCrimes', function(e, crimesData) {
            this.crimesData = crimesData;
        }.bind(this));
    },

    prepareEmailData: function() {
        var email = this.fetchEmail();
        var directionHTML = this.formatDirectionText(this.fetchDirectionText());
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
                'subject': 'SafeRoute Directions!'
            }
        }
    },
    fetchEmail: function() {
        return $(event.target).serializeArray()[0].value
    },
    fetchDirectionText: function() {
        //htmlFormattedDirection = $('.adp')[0].innerText.replace(/(?:\r\n|\r|\n)/g, '<br />');
        return $('.adp')[0].innerText.split("\n");
    },
    formatDirectionText: function(directionText) {
        directionText.pop()
        directionText.pop()
        directionText.shift()
        directionText[0] = 'Start:' + directionText[0]
        directionText[1] = 'Total Time:' + directionText[1]
        directionText[directionText.length - 1] = 'End:' + directionText[directionText.length - 1]
        var directionHTML = '<b>Here is your direction. Arrive Safely!</b><br /><br />' + directionText.shift() + '<br /><br/>'
        directionHTML += directionText.shift() + '<br /><br/>'
        for (var i = 0; i < directionText.length - 1; i++) {
            directionHTML += directionText[i] + ' (' + directionText[i + 1] + ')' + '<br/><br />'
            i++
        }
        directionHTML += directionText.pop()
        return directionHTML
    },
    sendEmail: function(event) {
        event.preventDefault();
        var emailData = this.prepareEmailData();
        $.ajax({
            url: 'https://mandrillapp.com/api/1.0/messages/send.json',
            type: 'POST',
            dataType: "json",
            data: emailData
        }).done(function(data) {
            console.log('Emai was sent to ' + emailData.message.to[0].email + '!')
        })
    }
}