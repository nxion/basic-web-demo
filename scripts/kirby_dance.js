/** 
 * Make Kirby dance in your browser's JavaScript console. 
 * 
 * Great to run in your coworker's console when they forget to lock their computer.
 */
var i = 0;
var KFRAMES = [ "<('.'<)", "^('.')^", "(>'.')>", "^('.')^" ];
setInterval( function () {
    document.clear();
    document.write( KFRAMES[ i % ( KFRAMES.length - 1 ) ] );
    ++i;
}, 500);
