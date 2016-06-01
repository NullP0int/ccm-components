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
                    //'<span class="hours">00</span> : ' +
                    //'<span class="minutes">00</span> : ' +
                    //'<span class="seconds">00</span> <br> ' +
                    '<button class="number">7</button> ' +
                    '<button class="number">8</button> ' +
                    '<button class="number">9</button><br> ' +
                    '<button class="number">4</button> ' +
                    '<button class="number">5</button> ' +
                    '<button class="number">6</button><br> ' +
                    '<button class="number">1</button> ' +
                    '<button class="number">2</button> ' +
                    '<button class="number">3</button><br> ' +
                    '<button class="number">0</button> ' +
                    '<button class="number">.</button> ' +
                    '<button class="number">=</button><br> ' +
                '</div>'
            );


            // element.html( 'Hello, World!' );
            if ( callback ) callback();
        }
    }
});








