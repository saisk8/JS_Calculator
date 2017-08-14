$(document)
    .ready(function() {
        var inChar = '';
        var ans = '';
        var log = '';
        var exp = '';
        var last = '';
        var decimal = false;
        var invalid = false;
        var myNamespace = {};

        myNamespace.round = function(number, precision) {
            var factor = Math.pow(10, precision);
            var tempNumber = number * factor;
            var roundedTempNumber = Math.round(tempNumber);
            return roundedTempNumber / factor;
        };

        //Function to validate the expression
        function validate(exp) {
            console.log("exp = " + exp + " d = " + decimal + " i = " + invalid);
            if (decimal) {
                //decimal = false;
                return false;
            }
            if (invalid) {
                //invalid = false;
                return false;
            }
            return true;
        }

        // Function to take the input on the click of a button
        $("button")
            .click(function() {
                inChar = $(this)
                    .attr("value");

                if (log === '' && isNaN(inChar) && inChar !== '.' && inChar !== '^') {
                    log = '';
                    last = '';
                    return;
                }

                if (isNaN(inChar)) {
                    if (inChar === '.' && (isNaN(last) || last === '')) {
                        log += "0";
                        exp += "0";
                    }

                    if (inChar === '^') {
                        if (last === '-') {
                            log = log.substring(0, log.length - 1);
                            exp = exp.substring(0, exp.length - 1);
                            last = last.substring(0, last.length - 1);
                        } else {
                            log += '-';
                            exp += '-';
                            last = '-';
                        }
                    }

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
                        var j;
                        last = inChar;
                        if (validate(exp)) {
                            console.log("v1 = " + validate(exp));
                            ans = eval(exp);
                            ans = myNamespace.round(ans, 3);
                        } else {
                            console.log("v2 = " + validate(exp));
                            ans = "Error!";
                        }
                        console.log(ans);
                    }

                    if (inChar === '+' || inChar === '-' || inChar === '%' || inChar === '.') {
                        last = inChar;
                        log += inChar;
                        exp += inChar;
                        if (inChar === '.' && exp.indexOf('.') > -1) {
                            decimal = true;
                        }
                    }
                } else {
                    last = inChar;
                    log += inChar;
                    exp += inChar;
                    console.log(log);
                }

                if (log.length > 14) {
                    $("#log")
                        .html(log.substring(log.length - 14));
                    console.log(log.length - 14);
                } else {
                    $("#log")
                        .html(log);
                }
                $("#answer")
                    .html(ans);
            });
    });