$(document)
    .ready(function() {
        var inChar = '';
        var ans = '';
        var log = '';

        // Function to take the input on the click of a button
        $("button")
            .click(function() {
                inChar = $(this)
                    .attr("value");
                console.log(inChar);
                $("#log")
                    .html(inChar);
                $("#answer")
                    .text(inChar);

            });
    });
