SafeRoute.UsersController = {
    initialize: function(model, view) {
        this.model = model;
        this.view = view;
    },
    fetch: function() {
        this.model.location(this);
    },
    collectLocation: function(results) {
        this.view.render(results);
    },
    notify: function(){
      SafeRoute.UsersView.failure();
    },

    collectEmail: function(event) {
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