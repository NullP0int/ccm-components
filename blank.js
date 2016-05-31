/**
 * Created by NullP0int on 31/05/2016.
 */

ccm.component({
    name: 'blank',
    Instance : function () {
        this.render = function ( callback ) {
            var element = ccm.helper.element( this );
            element.html( 'Hello, World!' );
            if ( callback ) callback();
        }
    }
});