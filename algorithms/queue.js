exports.Queue = function() {
	this.data = [];
	this.dataLength = 0;
}

exports.Queue.prototype.enqueue = function(item) {
	this.data.unshift(item);
	this.dataLength++;
}

exports.Queue.prototype.dequeue = function() {
	this.data.pop();
	this.dataLength--;
}

exports.Queue.prototype.removeFromQueue = function(item) {
	if (this.data.indexOf(item) > -1) {
		
	}
}