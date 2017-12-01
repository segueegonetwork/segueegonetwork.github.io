var StateHandler = {
	nodeClassNameList: null,
	linkClassNameList: null,
	egoClassName: null,
	timeIndex: null,

	storeStateOfScatterplot: function(timeIndex, nodeClassNameList, linkClassNameList, egoClassName) {
		var self = this;

		self.timeIndex = timeIndex;
		self.nodeClassNameList = nodeClassNameList;
		self.linkClassNameList = linkClassNameList;
		self.egoClassName = egoClassName;
	},
	removeStateOfScatterplot: function() {
		var self = this;

		self.nodeClassNameList = null;
		self.linkClassNameList = null;
		self.egoClassName = null;
	},
	isScatterplotLocked: function() {
		var self = this;

		return self.nodeClassNameList != null;
	}
}