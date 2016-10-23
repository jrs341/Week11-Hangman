var randomWord = require('./game.js');

var userGuess = process.argv[2];

// console.log(randomWord);
// console.log(userGuess);



function CheckUserGuess(randomWord, userGuess) {
	this.word = randomWord,
	this.guess = userGuess,
	// this.guessedLetters = [];
	this.goodGuess = false;
	// this.Push = function() {
	// 	this.guessedLetters.push(userGuess);	
	// }
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

var checkGuess = new CheckUserGuess(randomWord, userGuess);
// console.log(checkGuess.goodGuess);
// checkGuess.checkWord();
// var logic = checkGuess.goodGuess;
// console.log(logic);
module.exports = checkGuess;
// module.exports = logic;
// module.exports = randomWord;
// module.exports = userGuess;

