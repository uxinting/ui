function colorpicker(id, changed) {
	var $ = window.jQuery;
	
	var style = '<style>' + 
		'#c-p-red, #c-p-green, #c-p-blue{width: 100%; margin: 15px;}' +
		'#c-p-red .ui-slider-range { background: #ef2929; }' +
		'#c-p-red .ui-slider-handle { border-color: #ef2929; }' +
		'#c-p-green .ui-slider-range { background: #8ae234; }' +
		'#c-p-green .ui-slider-handle { border-color: #8ae234; }' +
		'#c-p-blue .ui-slider-range { background: #729fcf; }' +
		'#c-p-blue .ui-slider-handle { border-color: #729fcf; }</style>';
	
	var red = $('<div id="c-p-red"></div>');
	var green = $('<div id="c-p-green"></div>');
	var blue = $('<div id="c-p-blue"></div>');
	
	$('#'+id).append(red, green, blue);
	$('head').append(style);
	
	$('#c-p-red, #c-p-green, #c-p-blue').slider({
		orientation: "horizontal",
		range: "min",
		max: 255,
		value: 127,
		slide: refresh,
		change: refresh
	});
	
	red.slider("value", 255);
	green.slider("value", 140);
	blue.slider("value", 60);
	
	$('#'+id).append(red, green, blue);
	
	function refresh() {
		var r = red.slider("value");
		var g = green.slider("value");
		var b = blue.slider("value");
		
		changed(hexFromRGB(r, g, b));
	}
	
	function hexFromRGB(r, g, b) {
		var hex = [
			r.toString( 16 ),
			g.toString( 16 ),
			b.toString( 16 )
		];
		$.each( hex, function( nr, val ) {
			if ( val.length === 1 ) {
				hex[ nr ] = "0" + val;
			}
		});
		return hex.join( "" ).toUpperCase();
	}
}