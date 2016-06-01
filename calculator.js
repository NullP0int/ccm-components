/**
 * Created by NullP0int on 31/05/2016.
 */

ccm.component({
    name: 'calculator',

    config: {
        style: [ ccm.load, 'styles/calculator.css' ],
    },
    
    Instance : function () {




        this.render = function ( callback ) {

            var element = ccm.helper.element( this );

            element.html(
                '<div class="calculator">' +
                    '<div class="resultfield">' +
                        '<textarea style="resize:none" readonly rows="4" id="result" cols="50"></textarea> <br>' +
                    '</div>' +
                    '<div class="inputbuttons">' +
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
                '</div>' +
                '<p class="wurst"></p>' +
                    '<textarea style="resize:none" readonly rows="4" id="result2" cols="50"></textarea>'
            );

            var result = element.find('textarea.result2');
            var test = element.find('p.wurst');

            result.html('test');
            test.html('easy');

            element.find("input.hans").value = "test";

            // All number buttons //
            var button1 = element.find('button.left');
        }
    }
});








