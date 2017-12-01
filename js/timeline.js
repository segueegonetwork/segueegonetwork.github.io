var Timeline = {
	margin: { top: 5, left: 25, bottom: 5, right: 25 },

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
			.attr("y1", 55)
			.attr("x2", flowViewSvgWidth - self.margin.left - self.margin.right)
			.attr("y2", 55)
			.style("stroke", "#d3d3d3");

		// create text
		var dateGroup = self.svg.selectAll(".date")
			.data(Database.dateStringArray)
			.enter()
			.append("g")
			.attr("class", "date")
			.attr("transform", function(d, i) {
				return "translate(" + xScale(i) + ", 40)" + " rotate(-45)";
			});

		dateGroup.each(function(d, i) {
			var parseDate = d3.time.format("%Y-%m").parse;
			var formatTime = d3.time.format("%b %y");
			var dateString = formatTime(parseDate(d));
			var text = d3.select(this).append("text")
				.style("fill", "gray")
				.style("alignment-baseline", "middle")
				.text(dateString);

			var bbox = text.node().getBBox();
			d3.select(this).insert("rect", "text")
				.attr("x", bbox.x - 3)
				.attr("y", bbox.y - 2)
				.attr("rx", 3)
				.attr("ry", 3)
				.attr("width", bbox.width + 6)
				.attr("height", bbox.height + 4);

			d3.select(this).append("circle")
				.attr("cx", xScale(i))
				.attr("cy", 55)
				.attr("r", 5)
				.attr("transform", "rotate(45) " + " translate(" + -xScale(i) + ", -40)");
		});
	},
	highlight: function(timeIndex) {
		var self = this;
		var targetDateGroup = self.svg.selectAll(".date")[0][timeIndex];

		// restore all
		self.svg.selectAll("text")
			.style("font-size", null)
			.style("font-weight", null);
		self.svg.selectAll("circle")
			.style("fill", null);

		// text
		var text = d3.select(targetDateGroup).select("text")
			.style("font-size", 13)
			.style("font-weight", "bold");

		// rect
		var bbox = text.node().getBBox();
		d3.select(targetDateGroup).select("rect")
			.style("x", bbox.x - 3)
			.style("y", bbox.y - 2)
			.style("width", bbox.width + 6)
			.style("height", bbox.height + 4);

		// circle
		d3.select(targetDateGroup).select("circle")
			.style("fill", "#d3d3d3");
	},
	removeHighlight: function() {
		var self = this;

		self.svg.selectAll(".date").each(function() {
			var text = d3.select(this).select("text")
				.style("font-size", null)
				.style("font-weight", null);

			var bbox = text.node().getBBox();
			d3.select(this).select("rect")
				.style("x", bbox.x - 3)
				.style("y", bbox.y - 2)
				.style("width", bbox.width + 6)
				.style("height", bbox.height + 4);

			d3.select(this).select("circle")
				.style("fill", null);
		});
	},
	select: function(timeIndex) {
		var self = this;
		var targetDateGroup = self.svg.selectAll(".date")[0][timeIndex];

		d3.select(targetDateGroup)
			.classed("selected", true);
	}	
}