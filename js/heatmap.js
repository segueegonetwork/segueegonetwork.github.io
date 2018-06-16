var Heatmap = {
	heatmapObject: null,

	init: function() {
		var self = this;
		
		self.heatmapObject = h337.create({
          gradient: { '0': 'white', '0.5': '#ff9999', '1': 'red' },
          container: document.getElementById('heatmap')
        });
	},
	show: function() {
		console.log(ComparisonHandler.scatterplotCoordForDisplay)
	}
}