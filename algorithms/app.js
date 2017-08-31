(function() {
	
	$(document).ready( function() {

		var deckObj = {
				"2": 2,
				"3": 3,
				"4": 4,
				"5": 5,
				"6": 6,
				"7": 7,
				"8": 8,
				"9": 9,
				"10": 10,
				"J": 11,
				"Q": 12,
				"K": 13,
				"A": 14
			},
			numArr = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'],
			suitArr = ['heart', 'club', 'diamond', 'spade'],
			cardObj,
			currentCard,
			deckArr = [],
			Card = function(value, suit) {
				this.value = value;
				this.suit = suit;
				this.rank = deckObj[value];
			};

		for (var i = 0; i < suitArr.length; i++) {
			for (var j = 0; j < numArr.length; j++) {
				cardObj = new Card(numArr[j], suitArr[i]);
				deckArr.push(cardObj);
			}
		}

		// var randomCardNum = [Math.floor(Math.random() * deckArr.length)],
		//  	startCard = deckArr[randomCardNum];

		// deckArr.splice(randomCardNum,1);

		// currentCard = $('.current-card');

		var pickRandomCard = function(arr) {
			randomCardNum = [Math.floor(Math.random() * arr.length)],
		 	pickedCard = arr[randomCardNum];
		 	arr.splice(randomCardNum,1);

		 	$('.current-card').attr('data-suit', pickedCard.suit)
					.html(pickedCard.value + pickedCard.suit);

		 	return pickedCard;
		}

		startCard = pickRandomCard(deckArr);


		$('.card-bin').on('click', function() {

			// if ($(this).attr('data-rank') && startCard.rank > $(this).attr('data-rank')) {
			// 	alert('You cant put a higher ranking card than the previous bin');
			// 	return;
			// } else {
			$(this).attr('data-suit', startCard.suit)
			.attr('data-value', startCard.value)
			.attr('data-rank', startCard.rank)
			.html(startCard.value + startCard.suit);
			startCard = pickRandomCard(deckArr);
			// }
		})



		console.log(deckArr);

		// var currentCard = $('.current-card');

		// currentCard.attr('data-card', startCard).html(startCard);


	});

})();