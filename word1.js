var randomWord = require('./game.js');

var userGuess = process.argv[2];

console.log(randomWord);
console.log(userGuess);



function CheckLetters(randomWord, userGuess) {
	this.word = randomWord,
	this.guess = userGuess,
	this.guessedLetters = [];
	this.Push = function() {
		this.guessedLetters.push(userGuess);	
	}
	this.log = function() {
		console.log(this.guessedLetters);
	}
	this.checkWord = function() {
		if (randomWord.includes(userGuess)) {
			console.log('Good Guess ' + userGuess);
		} else {
			console.log('Try again ' + userGuess + ' is not in the word');
		}
	}
}

var checkGuess = new CheckLetters(randomWord, userGuess);
 checkGuess.checkWord();
 // checkGuess.log();
