Date.prototype.addSeconds = function(seconds) {
	this.setSeconds(this.getSeconds() + seconds);
	return this;
};

Date.prototype.isValidDate = function() {
	return !isNaN(this);
};