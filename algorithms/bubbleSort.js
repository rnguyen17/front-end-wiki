var bubbleSort = function(arr) {
	var hasSwapped = false;

	for (var i = 0; i < arr.length - 1; i++) {

		hasSwapped = false;

		for (var j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				hasSwapped = true;
				arr[j] = arr[j] - arr[j+1];
				arr[j+1] = arr[j] + arr[j+1];
				arr[j] = arr[j+1] - arr[j];
			}
		}

		if (hasSwapped == false) {
			break;
		}
	}

	return arr;
}

var recursiveBubble = function(arr, start) {
	if (arr.length - 1 > start) {
		return recursiveBubble(recursiveSwap(arr, 0), start + 1);
	} else {
		return arr;
	}
}

var recursiveSwap = function(arr, n) {
		var temp;
		if (n < arr.length - 1) {
		if (arr[n] > arr[n+1]) {
			temp = arr[n];
			arr[n] = arr[n+1];
			arr[n+1] = temp;
		}
		return recursiveSwap(arr, n+1);
	} else {
		return arr;
	}
}

var testArr = ['billy', 'bob', 'jomama', 'alice', 'barney', 'avery', 'michael', 'lebron'];

// for (var i = 0; i < 15; i++) {
// 	testArr.push(Math.floor(Math.random() * 15));
// }


console.log('### start arr', testArr);
console.log('### end arr', recursiveBubble(testArr, 0));