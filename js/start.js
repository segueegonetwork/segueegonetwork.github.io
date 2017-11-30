var margin = 5;
var full = "100%";

var leftContentWidth = 600;
var rightContentWidth = 900;
var fullHeight = 700;

var flowViewSvgWidth = 900;

// add together = 1500 - 5
var tableViewWidth = 450;
var eventViewWidth = 410;

// add together = 450
var flowSvgHeight = 365 - 5;
var timelineSvgHeight = 40;
var menuBarHeight = 20;

// add together = 400
var tableViewHeight = 425;
var tableLegendHeight = 30;
var eventViewHeight = 425;

$(function() {
	// contents
	$("#left-content")
		.css("width", leftContentWidth)
		.css("height", fullHeight);
	$("#right-content")
		.css("width", rightContentWidth)
		.css("height", fullHeight);

	// left content
	$("#mds-view")
		.css("width", full)
		.css("height", full);

	// upper contents
	$("#right-content #upper-content")
		.css("width", full)
		.css("margin-bottom", margin + 2);
	$("#flow-view")
		.css("width", flowViewSvgWidth)
		.css("height", flowSvgHeight + timelineSvgHeight + menuBarHeight + 5)
		.css("margin-left", margin)
	$("#flow-wrapper")
		.css("width", flowViewSvgWidth)
		.css("height", flowSvgHeight);

	// lower contents
	$("#right-content #lower-content")
		.css("width", full);
	$("#table-view")
		.css("width", tableViewWidth)
		.css("height", tableViewHeight)
		.css("margin-left", margin);
	$("#table-wrapper")
		.css("width", tableViewWidth)
		.css("height", tableViewHeight - tableLegendHeight);
	$("#event-view")
		.css("width", eventViewWidth)
		.css("height", eventViewHeight)

	// set svg
	d3.select(".control")
		.attr("width", flowViewSvgWidth - 220)
		.attr("height", menuBarHeight);
	d3.select("#timeline")
		.attr("width", flowViewSvgWidth)
		.attr("height", timelineSvgHeight);	
	d3.select("#chart")
		.attr("width", flowViewSvgWidth)
		.attr("height", flowSvgHeight - 10); // -10 to prevent y overflow at the beginning

	d3.select("#event-editor")
		.attr("width", eventViewWidth)
		.attr("height", eventViewHeight);

	d3.select("#table-legend")
		.attr("width", tableViewWidth)
		.attr("height", tableLegendHeight);
	d3.select("#table")
		.attr("width", tableViewWidth)
		.attr("height", tableViewHeight - tableLegendHeight - 10);

	d3.select("#scatterplot")
		.attr("width", full)
		.attr("height", full);

	Database.getData();
});