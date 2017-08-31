	var Pascal = function(n) {
		var pascalArray = [];


		for (var i = 0; i < n; i++) {
			if (i == 0) {
				pascalArray.push([1]);
			} else {
				pascalArray.push(newLine(pascalArray[i-1]));
			}
		}

		for (i = 0; i < pascalArray.length; i++) {
	        console.log(pascalArray[i].join(' '))

	    }

		return pascalArray;
	}

	var newLine = function(previousLine) {
		var previousLineLength = previousLine.length,
			newLineArr = [];

		for (var i = 0; i < previousLineLength + 1; i++) {
			if (i == 0 || i == previousLineLength) {
				newLineArr[i] = 1;
			} else {
				newLineArr[i] = previousLine[i-1] + previousLine[i];
			}
		}

		return newLineArr;
	}

Pascal(10);