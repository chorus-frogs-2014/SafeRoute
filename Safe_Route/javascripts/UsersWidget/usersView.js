SafeRoute.UsersView = {
    render: function(results) {
        $('input').eq(0).val(results[0].formatted_address)
    },
    failure: function() {
        alert("Sorry! I Couldn't find your current location.")
    }
}