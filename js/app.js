$(document)
    .ready(function() {
        var inChar = '';
        var ans = '';
        var log = '';
        var exp = '';
        var last = '';

        // Function to take the input on the click of a button
        $("button")
            .click(function() {
                inChar = $(this)
                    .attr("value");
                //console.log(inChar);
                if (isNaN(inChar)) {
                    if (last === '=') {
                        log = ans;
                        ans = '';
                    }

                    if (inChar === "ac") {
                        log = '';
                        exp = '';
                        ans = '';
                    }

                    if (inChar === 'ce') {
                        var i = -1;
                        //console.log(last);
                        switch (last) {
                            case '*':
                                i = log.indexOf('x');
                                if (i != -1)
                                    log = log.substring(0, i);
                                exp = exp.substring(0, exp.length - 1);
                                console.log(exp);
                                break;
                            case '/':
                                i = log.indexOf('&divide;');
                                if (i != -1)
                                    log = log.substring(0, i);
                                exp = exp.substring(0, exp.length - 1);
                                console.log(exp);
                                break;
                            case '=':
                                log = '';
                                exp = '';
                                break;
                            default:
                                log = log.substring(0, log.length - 1);
                                console.log(log);
                                exp = exp.substring(0, exp.length - 1);
                                console.log(exp);
                        }
                        ans = '';
                    }

                    if (inChar === '*') {
                        last = inChar;
                        log += 'x';
                        exp += inChar;
                    }

                    if (inChar === '/') {
                        last = inChar;
                        log += "&divide;";
                        exp += inChar;
                    }

                    if (inChar === '=') {
                        last = inChar;
                        ans = eval(exp);
                    }

                    if (inChar === '+' || inChar === '-' || inChar === '%') {
                        last = inChar;
                        log += inChar;
                        exp += inChar;
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
