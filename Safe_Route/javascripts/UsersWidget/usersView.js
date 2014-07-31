SafeRoute.UsersView = {
    render: function(results) {
        $('input').eq(0).val(results[0].formatted_address);
    },
    failure: function() {
        alert("Sorry! I Couldn't find your current location.")
    },
    listen: function(controller){
     $('#contact').on('submit', controller.collectEmail.bind(this));
  },


}


