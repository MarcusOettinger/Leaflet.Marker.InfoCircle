L.Marker.InfoCircle = L.Marker.extend({

	options: {
		/**
		 * @option text: string
		 * The text or number to display in the circle
		 */
		text: "",

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

	// This replaces the _initIcon from L.Marker, which previously
	// was adding just one icon to the marker.
	// this._icon becomes a container for all the stacked icons.
	_initIcon: function () {
		var options = this.options,
		    classToAdd = 'leaflet-zoom-' + (this._zoomAnimated ? 'animated' : 'hide'),		
		    size = options.radius * 2,
		    style = 'style="width: ' + size + 'px; height: ' + size + 'px; border-width: ' + borderWidth + 'px;"',
		    iconSize = size + (opts.borderWidth * 2);

		this._icon = L.divIcon({
			html: '<span class="' + 'circle ' + options.circleClass + '" ' 
				+ style + '>' + options.txt + '</span>',
			className: '', iconSize: [iconSize, iconSize]
  		});
	}

});



L.marker.InfoCircle = function(latlng, opts) {
	var marker = L.marker(
		latng,
		opts
/* {
		icon: icon
	}*/
	);

	return new L.Marker.InfoCircle(latlng, opts);
}
