var mergeSort = function(arr) {
	if (arr.length < 2) {
		return arr;
	}

	var leftArr = arr.slice(0, Math.floor(arr.length/2)),
		rightArr = arr.slice(Math.floor(arr.length/2), arr.length);

	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

var merge = function(leftArr, rightArr) {
	var leftPointer = 0,
		rightPointer = 0,
		sortedArr = [];

	while (leftPointer != leftArr.length && rightPointer != rightArr.length) {
		if (leftArr[leftPointer] < rightArr[rightPointer]) {
			sortedArr.push(leftArr[leftPointer]);
			leftPointer++;
		} else {
			sortedArr.push(rightArr[rightPointer]);
			rightPointer++;
		}
	}

	return sortedArr;
}

