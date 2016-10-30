// should contain all of the methods which will check the letters guessed versus the random word selected

// var randomWord = require('./game.js');
// console.log(randomWord);

function CheckUserGuess(randomWord, userGuess) {
	this.word = randomWord,
	this.guess = userGuess,
	this.guessedLetters = [];
	this.goodGuess = false;
	this.Push = function() {
		this.guessedLetters.push(userGuess);
		console.log(this.guessedLetters);	
	}
	// this.log = function() {
	// 	console.log(this.guessedLetters);
	// }
	this.checkWord = function() {
		if (randomWord.includes(userGuess)) {
			console.log('Good Guess ' + userGuess);
			return this.goodGuess = true;
			// checkGuess.checkWord();
		} else {
			console.log('Try again ' + userGuess + ' is not in the word');
			// checkGuess.checkWord();
		}
	}
}

// CheckUserGuess();