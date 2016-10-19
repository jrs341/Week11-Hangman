var word = require('./game');

console.log(word.gameWord);

var guessedLetter = process.argv[2];

var guessedLetters = [];

var wordArray = word.gameWord.split('');

var blank = new Array(wordArray.length);

var numGuessRem = wordArray.length + 6;

var wrongGuess = 0;

var continueGame = true;

// this adds an underline for each letter of the word

// change the order of logic look for blank first
for (var i = 0; i < wordArray.length; i++) {
	if (wordArray[i] == ' ') {
		blank[i] = ' ';
	} else {
		blank[i] = ' _ ';
	}	
}

console.log(wordArray);

console.log(blank);

console.log(wordArray.toString());

console.log(blank.join());

function arraysEqual(arr1, arr2) {
// .split("")
	if (arr1.toString() == arr2.join()) {
		// wins ++;
		console.log('You Win');
		return continueGame = false;
	} else if (wrongGuess === 6) {
		console.log('You lost, the word is ' + word.gameWord + ' would you like to play again?');
		// losses++;
		return continueGame = false;
	} 
}

function include(array, guessedLetter) {

		if (guessedLetters.indexOf(guessedLetter) > -1 && numGuessRem >= 1) {
			wrongGuess++;
			console.log('You Guessed That Letter Already');
		} // this is where the hangman will go
		// .split(" ")
		else if (array.indexOf(guessedLetter) === -1 && guessedLetters.indexOf(guessedLetter) === -1 && numGuessRem >= 1 && array.toString() != blank.join()) {
			wrongGuess++;
			console.log('Try Again');
			// document.getElementById('status').innerHTML = 'Try Again';
			// 	if (wrongGuess === 1) {
			// 		emoji.src = 'assets/images/flushedFace.png';
			// 		emojiAppend();
			// 	}
			// 	else if (wrongGuess === 2) {
			// 		emoji.src = 'assets/images/disappointedFace.png';
			// 		emojiAppend();
			// 	}
			// 	else if (wrongGuess === 3) {
			// 		emoji.src = 'assets/images/angryFace.png';
			// 		emojiAppend();
			// 	}
			// 	else if (wrongGuess === 4) {
			// 		emoji.src = 'assets/images/triumphFace.png';
			// 		emojiAppend();
			// 	}
			// 	else if (wrongGuess === 5) {
			// 		emoji.src = 'assets/images/cryingFace.png';
			// 		emojiAppend();
			// 	}
			// 	else if (wrongGuess === 6) {
			// 		emoji.src = 'assets/images/dizzyFace.png';
			// 		emojiAppend();
			// 	}
		} else {
			console.log('Good Guess');
		}

		if (guessedLetter) {
			guessedLetters.push(guessedLetter);
		}
		// .split("")
		for(var i = 0; i < array.length; i++) {
			if (array[i] === guessedLetter) { 
				blank.splice(i, 1, guessedLetter);
			}
		}
}

if (continueGame) {


		 if (numGuessRem > 0) {

			numGuessRem --;

			include(wordArray, guessedLetter);

			arraysEqual(wordArray, blank);

		} 
	}