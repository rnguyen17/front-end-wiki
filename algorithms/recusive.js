// var sumArr = function(arr) {

// 	if (arr.length > 0) {
// 		return arr.pop() + sumArr(arr);
// 	} else {
// 		return 0;
// 	}
// }

// console.log(sumArr([1,2,3,4]));

// var factorial = function(n) {
// 	if (n > 1) {
// 		return n * factorial(n-1);
// 	} else {
// 		return 1;
// 	}
// }

// console.log(factorial(5));

// var range = function(x,y) {
// 	var arr = [];
// 	for (var i = x; i < y+1; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// var range = function(x,y) {
// 	var arr = [];

// 	if (y - 2 > x) {
// 		arr.push(x+1);
// 		return arr.concat(range(x+1, y));
// 	} else {
// 		return [x+1];
// 	}
// }

// console.log(range(1,5));

// var exponent = function(a,n) {
// 	if (n > a) {
// 		return 1 + exponent(a, n/a);
// 	} else {
// 		return 1;
// 	}
// }

// console.log(exponent(2,4));

