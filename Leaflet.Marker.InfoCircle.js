// Leaflet.Marker.InfoCircle.js
// (see https://github.com/MarcusOettinger/Leaflet.Marker.InfoCircle)
// M. Oettinger 2022

/** @class
  * A simple circular marker for Leaflet displaying text or numbers.
  * @author Marcus Oettinger <info@oettinger-physics.de>
  * @license The Unlicense
  */
L.Marker.InfoCircle = L.Marker.extend({

	options: {
		/**
		 * @option text: string
		 * The text or number to display in the circle
		 */
		text: " ",

		/**
		 * @option radius: number
		 * the radius of the cirle. Defaults to 20px.
		 */
		radius: 20,

		/**
		 * @option borderWidth: number
		 * width of the circle outline. Defaults to 2px.
		 */
		borderWidth: 2,

		/**
		 * @option circleClass: string
		 * a class to set for the circle marker to allow for
		 * further css-styling.
		 */
		circleClass: ""

	},
	
	/** @constructor
	  * initialize: construct a simple iconMarker
	  * @parameter latlng
	  * @parameter options
	  */
	initialize: function (latlng, options) {
		L.setOptions(this, options);
		this._latlng = L.latLng(latlng);
  		this.setIcon(this._mkIcon(this.options));
	},
	
	/** 
	  * _mkIcon: return a divIcon contining a span with
	  * some css formatting.
	  */
	_mkIcon: function( ){
		var cSize = this.options.radius * 2 + (this.options.borderWidth * 2),
		    html = '<span class="circle ' + this.options.circleClass
		         + '" style="width:' + cSize + 'px; height:' + cSize 
			 + 'px; borderwidth:' + this.options.borderWidth
			 + 'px">' + this.options.text +'</span>',
		    icon = L.divIcon({
    			html: html,
    			className: '',
    			iconSize: [cSize, cSize]
  		    });
  		 return icon;
	},
	
	/** 
	  * setText: replace the string displayed in the IfoCircle.
	  * @parameter text: a string to be displayed in the marker.
	  */
	setText: function ( text ) {
		this.options.text = text;
  		this.setIcon(this._mkIcon());
	},
	
	/** 
	  * getText: return the string displayed in the IfoCircle.
	  */
	getText: function ( ) {
		if ( this.options.text ) return this.options.text;
		return '';
	}
	
	
});

L.marker.InfoCircle = function(latlng, options) {
	return new Marker.InfoCircle( latlng, options );
}
