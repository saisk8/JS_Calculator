$(document)
    .ready(function() {
        var inChar = '';
        var ans = '';
        var log = '';
        var exp = '';
        var index = 0;
        var last = '';

        // Function to take the input on the click of a button
        $("button")
            .click(function() {
                inChar = $(this)
                    .attr("value");
                //console.log(inChar);
                if (isNaN(inChar)) {
                    if (inChar === "ac") {
                        log = '';
                        exp = '';
                        ans = '';
                    }

                    if (inChar === 'ce') {

                        ans = '';
                    }

                    if (inChar === '*') {
                        last = inChar;
                        log += 'x';
                        index += 1;
                        exp += inChar;
                    }

                    if (inChar === '/') {
                        last = inChar;
                        log += "&divide;";
                        index += 1;
                        exp += inChar;
                    }

                    if (inChar === '=') {
                        last = inChar;
                        ans = eval(exp);
                        log = ans;
                    }
                } else {
                    last = inChar;
                    log += inChar;
                    exp += inChar;
                    console.log(log);
                }
                $("#log")
                    .html(log);
                $("#answer")
                    .html(ans);
            });
    });
