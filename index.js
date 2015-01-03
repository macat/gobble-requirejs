module.exports = function requirejs ( inputdir, outputdir, options, callback ) {
	var path = require( 'path' ), r = require( 'requirejs' );
	if ( typeof callback == 'undefined' ) callback = function() {};

	options.baseUrl = path.join( inputdir, options.baseUrl || '' );

	if ( options.out ) {
		options.out = path.join( outputdir, options.out );
	}

	r.optimize( options, function () { callback(); }, callback );
};
