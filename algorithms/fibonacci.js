exports.fibonacci = function(n) {
	if (n < 3) {
		return 1;
	} else {
		return this.fibonacci(n-1) + this.fibonacci(n-2);
	}
}

exports.fibonacciArray = function(n) {
	var output = [];

	for (var i = 0; i < n; i++) {
		if (i === 0 || i === 1){
			output.push(1);
		} else {
			output.push(output[i-1] + output[i-2]);
		}
	}

	return output;
}