const url = "{% url 'garazica' %}"
console.log(csrfToken);

$(document).ready(function() {
    // Event listener for a button click
    $('#up').click(function() {
        // Make an AJAX request to the Django view
        $.ajax({
            type: 'POST',  // or 'GET' depending on your view
            url: "/ajax_handler/",  // Replace with the actual URL of your Django view
            data: {
                csrfmiddlewaretoken: csrfToken
            },
            success: function(response) {
                // Handle the successful response from the server
                console.log('Success:', response);
            },
            error: function(error) {
                // Handle errors
                console.error('Error:', error);
            }
        });
    });
    $('#stop').click(function() {
        // Make an AJAX request to the Django view
        $.ajax({
            type: 'POST',  // or 'GET' depending on your view
            url: "/stop/",  // Replace with the actual URL of your Django view
            data: {
                csrfmiddlewaretoken: csrfToken
            },
            success: function(response) {
                // Handle the successful response from the server
                console.log('Success:', response);
            },
            error: function(error) {
                // Handle errors
                console.error('Error:', error);
            }
        });
    });
    $('#down').click(function() {
        // Make an AJAX request to the Django view
        $.ajax({
            type: 'POST',  // or 'GET' depending on your view
            url: "/down/",  // Replace with the actual URL of your Django view
            data: {
                csrfmiddlewaretoken: csrfToken
            },
            success: function(response) {
                // Handle the successful response from the server
                console.log('Success:', response);
            },
            error: function(error) {
                // Handle errors
                console.error('Error:', error);
            }
        });
    });

    
});

