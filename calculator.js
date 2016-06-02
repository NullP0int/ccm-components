/**
 * Created by NullP0int on 31/05/2016.
 */

ccm.component({
    name: 'calculator',

    config: {
        style: [ ccm.load, 'styles/calculator.css' ],
    },
    
    Instance : function () {

        var self = this;


        this.render = function ( callback ) {

            var element = ccm.helper.element( self );

            element.html(
                '<div class="calculator">' +
                    '<textarea style="resize:none" readonly rows="4" id="result" cols="50"></textarea> <br>' +
                    '<div class="inputbuttons">' +
                        '<button class="sonstiges" id="clear">C</button><br>' +
                        '<button class="number" id="button7">7</button> ' +
                        '<button class="number" id="button8">8</button> ' +
                        '<button class="number" id="button9">9</button> ' +
                        '<button class="operation" id="buttonadd">+</button><br> ' +
                        '<button class="number" id="button4">4</button> ' +
                        '<button class="number" id="button5">5</button> ' +
                        '<button class="number" id="button6">6</button> ' +
                        '<button class="operation" id="buttonminus">-</button><br> ' +
                        '<button class="number" id="button1">1</button> ' +
                        '<button class="number" id="button2">2</button> ' +
                        '<button class="number" id="button3">3</button> ' +
                        '<button class="operation" id="buttonmultiply">*</button><br> ' +
                        '<button class="number" id="button0">0</button> ' +
                        '<button class="number" id="buttoncomma">.</button> ' +
                        '<button class="number" id="buttonenter">=</button> ' +
                        '<button class="operation" id="buttondevide">/</button><br> ' +
                    '</div>' +
                '</div>'
            );

            var textarea = element.find('#result');

            var btnzero = element.find('#button0');
            var btnone = element.find('#button1');
            var btntwo = element.find('#button2');
            var btnthree = element.find('#button3');
            var btnfour = element.find('#button4');
            var btnfive = element.find('#button5');
            var btnsix = element.find('#button6');
            var btnseven = element.find('#button7');
            var btneight = element.find('#button8');
            var btnnine = element.find('#button9');
            var btncomma = element.find('#buttoncomma');

            var btnclear = element.find('#clear');
            var btnadd = element.find('#buttonadd');
            var btnminus = element.find('#buttonminus');
            var btnmultiply = element.find('#buttonmultiply');
            var btndevide = element.find('#buttondevide');
            var buttonenter = element.find('#buttonenter');

            var calculation = '';
            var lhs = 0;
            var rhs = 0;

            // Button clear function
            btnclear.click(function() {
                textareaclear();
            });

            // Button zero function
            btnzero.click(function() {
                calculation = calculation + 0;
                textarea.append('0');
            });

            // Button one function
            btnone.click(function() {
                calculation = calculation + 1;
                textarea.append('1');
            });

            // Button two function
            btntwo.click(function() {
                calculation = calculation + 2;
                textarea.append('2');
            });

            // Button three function
            btnthree.click(function() {
                calculation = calculation + 3;
                textarea.append('3');
            });

            // Button four function
            btnfour.click(function() {
                calculation = calculation + 4;
                textarea.append('4');
            });

            // Button five function
            btnfive.click(function() {
                calculation = calculation + 5;
                textarea.append('5');
            });

            // Button six function
            btnsix.click(function() {
                calculation = calculation + 6;
                textarea.append('6');
            });

            // Button seven function
            btnseven.click(function() {
                calculation = calculation + 7;
                textarea.append('7');
            });

            // Button eight function
            btneight.click(function() {
                calculation = calculation + 8;
                textarea.append('8');
            });

            // Button nine function
            btnnine.click(function() {
                calculation = calculation + 9;
                textarea.append('9');
            });

            // Button comma function
            btncomma.click(function() {
                calculation = calculation + '.';
                textarea.append('.');
            });

            // Button add function
            btnadd.click(function() {
                calculation = calculation + ' + ';
                textarea.append(' + ');
            });

            // Button minus function
            btnminus.click(function() {
                calculation = calculation + ' - ';
                textarea.append(' - ');
            });

            // Button multiply function
            btnmultiply.click(function() {
                calculation = calculation + ' * ';
                textarea.append(' * ');
            });

            // Button devide function
            btndevide.click(function() {
                calculation = calculation + ' / ';
                textarea.append(' / ');
            });

            // Button enter function
            buttonenter.click(function() {
                var textareastring = calculation + '\n\n = ' + calc_result(calculation);
                textareaclear();
                textarea.html(textareastring);
            });


            /* private functions */

            function calc_result(completestring) {
                var string = completestring.toString();
                var operation;
                string = string.split(' ');

                lhs = parseFloat(string[0]);
                operation = string[1];
                rhs = parseFloat(string[2]);

                if(operation == '+') {
                    result = addoperation(lhs, rhs);
                }
                if(operation == '-') {
                    result = minusoperation(lhs, rhs);
                }
                if(operation == '*') {
                    result = multiplyoperation(lhs, rhs);
                }
                if(operation == '/') {
                    result = devideoperation(lhs, rhs);
                }

                return result;
            }

            function textareaclear() {
                calculation = '';
                textarea.html(calculation);
            }

            function addoperation(lhs, rhs) {
                return lhs + rhs;
            }

            function minusoperation(lhs, rhs) {
                return lhs - rhs;
            }

            function multiplyoperation(lhs, rhs) {
                return lhs * rhs;
            }

            function devideoperation(lhs, rhs) {
                return lhs / rhs;
            }

        }

        // perform callback
        if ( typeof callback === 'function' ) callback();
    }
});








