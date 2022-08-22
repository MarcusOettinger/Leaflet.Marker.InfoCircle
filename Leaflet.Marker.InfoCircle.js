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
		 * circleClass: string
		 * a class to set for the circle marker to allow for
		 * further css-styling.
		 */
		circleClass: ""

	},


	/**
	  * initialize: construct a simple iconMarker
	  */
	initialize: function (latlng, options) {
		L.setOptions(this, options);

		var size = this.options.radius * 2,
		    bw = this.options.borderWidth,
		    cSize = size + (this.options.borderWidth * 2),
		    html = '<span class="circle ' + options.circleClass
		         + '" style="width:' + cSize + 'px; height:' + cSize + 'px; borderwidth:' 
		         + bw + 'px">' + this.options.text +'</span>';
	    
		this._latlng = L.latLng(latlng);
		
		icon = L.divIcon({
    			html: html,
    			className: '',  //'circle ' + options.circleClass,
    			iconSize: [cSize, cSize]
  		});
  		this.setIcon(icon);
	},


});


L.marker.InfoCircle = function(latlng, options) {
	return new Marker.InfoCircle( latlng, options );
}
