var Timeline = {
	margin: { top: 5, left: 22, bottom: 5, right: 22 },

	svg: null,

	init: function() {
		var self = this;

		self.svg = d3.select("#timeline")
			.append("g")
			.attr("transform", "translate(" + self.margin.left + ", " + self.margin.top + ")");

		var xScale = d3.scale.linear()
			.domain([0, Database.dateStringArray.length - 1])
			.range([0, flowViewSvgWidth - self.margin.left - self.margin.right]);
		var parseDate = d3.time.format("%Y-%m").parse;
		var timeFormat = d3.time.format("%b %y");

		// create line
		self.svg.append("line")
			.attr("x1", 0)
			.attr("y1", 48)
			.attr("x2", flowViewSvgWidth - self.margin.left - self.margin.right)
			.attr("y2", 48)
			.style("stroke", "#d3d3d3");

		// draw circles
		self.svg.selectAll("cirlce")
			.data(Database.dateStringArray)
			.enter()
			.append("circle")
			.attr("cx", function(d, i) {
				return xScale(i)
			})
			.attr("cy", 48)
			.attr("r", 5)
			.style("fill", "white")
			.style("stroke", "#d3d3d3");

		// create text
		self.svg.selectAll(".date")
			.data(Database.dateStringArray)
			.enter()
			.append("text")
			.attr("class", "date")
			.attr("transform", function(d, i) {
				return "translate(" + xScale(i) + ", 33)" + " rotate(-45)";
			})
			.style("alignment-baseline", "middle")
			.style("fill", "gray")
			.text(function(d) {
				var parseDate = d3.time.format("%Y-%m").parse;
				var formatTime = d3.time.format("%b %y");
				return formatTime(parseDate(d)); 
			});
	}
}