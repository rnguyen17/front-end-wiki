exports.algorithms = function() {
}

exports.algorithms.prototype.isPalindrome = function(str) {
	var strLength = str.length,
		swapLength = Math.floor(str.length/2),
		strArr = str.split(''),
		tempHolder, newStr;
	
	for (var i = 0; i < swapLength; i++) {
		tempHolder = strArr[i];
		strArr[i] = str[strLength - 1 - i];
		strArr[strLength - 1 - i] = tempHolder;
	}

	var newStr = strArr.join('');

	if (newStr == str) {
		return true;
	}

	return false;
}