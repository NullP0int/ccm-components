/**
 * Created by NullP0int on 31/05/2016.
 */

ccm.component({
    name: 'calculator',

    config: {
        html: [ ccm.store, { local: 'template.json' } ],
        style: [ ccm.load, 'calculator.css' ]
    },
    
    Instance : function () {

        var self = this;

        self.render = function ( callback ) {

            var element = ccm.helper.element( self );
            element.html(ccm.helper.html(self.html.get('main')));

            var textarea = ccm.helper.find(self, "#result");

            textarea.html("");

            var btnzero = ccm.helper.find(self, "#button0");
            var btnone = ccm.helper.find(self, '#button1');
            var btntwo = ccm.helper.find(self, '#button2');
            var btnthree = ccm.helper.find(self, '#button3');
            var btnfour = ccm.helper.find(self, '#button4');
            var btnfive = ccm.helper.find(self, '#button5');
            var btnsix = ccm.helper.find(self, '#button6');
            var btnseven = ccm.helper.find(self, '#button7');
            var btneight = ccm.helper.find(self, '#button8');
            var btnnine = ccm.helper.find(self, '#button9');
            var btncomma = ccm.helper.find(self, '#buttoncomma');
            var btnans = ccm.helper.find(self, '#buttonans');

            var btnclear = ccm.helper.find(self, '#clear');
            var btnback = ccm.helper.find(self, '#back');
            var btnadd = ccm.helper.find(self, '#buttonadd');
            var btnminus = ccm.helper.find(self, '#buttonminus');
            var btnmultiply = ccm.helper.find(self, '#buttonmultiply');
            var btndevide = ccm.helper.find(self, '#buttondevide');
            var btnenter = ccm.helper.find(self, '#buttonenter');

            var calculation = '';
            var lastresult = null;
            var lhs = 0;
            var rhs = 0;

            // Button clear function
            btnclear.click(function() {
                textareaclearAll()
            });

            btnback.click(function() {

                if(calculation.toString().indexOf(' ', calculation.length - 1) > 0) {
                    calculation = calculation.toString().substring(0, calculation.length - 3);
                } else {
                    calculation = calculation.toString().substring(0, calculation.length - 1);
                }
                
                textareaclear();
                textarea.html(calculation);
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
                appendOperation('+');
            });

            // Button minus function
            btnminus.click(function() {
                appendOperation('-');
            });

            // Button multiply function
            btnmultiply.click(function() {
                appendOperation('*');
            });

            // Button devide function
            btndevide.click(function() {
                appendOperation('/');
            });

            btnans.click(function() {
                textareaclear();
                calculation = lastresult.toString();
                textarea.append(calculation);
            });

            // Button enter function
            btnenter.click(function() {
                var textareastring = calculation + '\n\n = ' + calc_result(calculation);
                textareaclear();
                textarea.html(textareastring);
            });


            /* private functions */

            function appendOperation(operation) {

                if(calculation.toString().indexOf('+') > 0 || calculation.toString().indexOf('-', 1) > 0 || calculation.toString().indexOf('*', 1) > 0 || calculation.toString().indexOf('/', 1) > 0 ) {

                } else {
                    calculation = calculation + ' ' + operation + ' ';
                    textarea.append(' ' + operation + ' ');
                }

            }

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

                if(isNaN(result) == false) {
                    lastresult = result;
                    calculation = lastresult;
                }

                return result;
            }

            function textareaclearAll() {
                calculation = '';
                textarea.html(calculation);
            }

            function textareaclear() {
                textarea.html('');
            }

            function addoperation(lhs, rhs) {
                return ((lhs * 10) + (rhs * 10)) / 10;
            }

            function minusoperation(lhs, rhs) {
                return ((lhs * 10) - (rhs * 10)) / 10;
            }

            function multiplyoperation(lhs, rhs) {
                return ((lhs * 10) * (rhs * 10)) / 100;
            }

            function devideoperation(lhs, rhs) {
                return ((lhs * 10) / (rhs * 10));
            }

        }

        // perform callback
        if ( typeof callback === 'function' ) callback();
    }
});








