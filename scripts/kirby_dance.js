var i = 0;
var KFRAMES = [ "<('.'<)", "^('.')^", "(>'.')>", "^('.')^" ];
setInterval( function () {
    document.clear();
    document.write( KFRAMES[ i % ( KFRAMES.length - 1 ) ] );
    ++i;
}, 500);
