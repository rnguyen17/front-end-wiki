

// var Stack = require("./stack.js").Stack,
// 	Algorithms = require("./algorithms.js").algorithms;
'use strict'
// var a = 'foo';

// for (var i = 0; i < 5; i++) {
// 	let a = i;
// 	console.log('inner block a', a);
// }

// console.log('outer scope a', a);

var condition = true;

var getNames = new Promise(function(resolve, reject) {
		if (condition) {
			let names = {
				first: 'richard',
				last: 'nguyen'
			}
			resolve(names);
		} else {
			let error = new Error('There are no names to be listed');
			reject(error);
		}
	})

var fulfillPromise = function() {
	getNames.then(function(response) {
		return response;
	}).then(function(data) {
		return data.first;
	});
}

console.log(fulfillPromise());
