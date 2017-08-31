exports.Stack = function() {
	this.data = [];
	this.dataLength = 0;
}

exports.Stack.prototype.add = function(item) {
	this.data.push(item);
	this.dataLength++;
	return this;
}

exports.Stack.prototype.remove = function() {
	this.data.pop();
	this.dataLength--;
	return this;
}

exports.Stack.prototype.peek = function() {
	return this.data[this.dataLength-1];
}

exports.Stack.prototype.length = function() {
	return this.dataLength;
}

exports.Stack.prototype.clear = function() {
	this.data = [];
	this.dataLength = 0;
}

