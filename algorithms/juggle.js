// arr = arr of numbers [5,3,1]

var juggle = function(arr) {
	var balls = 0,
		ball = {},
		left = 0,
		right = 0,
		timeArr = [],
		newTimeArr,
		hangtime;

	for (var i = 0; i < 202; i++) {

		hangtime = arr[(arr.length + i) % arr.length];

		newTimeArr = timeArr.map(function(item) {
			if (item === 0) {
				return hangtime;
			}
			return item - 1;
		})

		if (newTimeArr.length === 0) {
			timeArr.push(hangtime);
		}
	}

	console.log(newTimeArr);
}

juggle([5,3,1]);

// timeArr = [5] => [4,3] => [3,2,1] => [2,1,0]