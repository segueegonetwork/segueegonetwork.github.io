var StateHandler = {
	nodeClassNameList: null,
	linkClassNameList: null,
	egoClassName: null,

	storeStateOfScatterplot: function(nodeClassNameList, linkClassNameList, egoClassName) {
		var self = this;

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