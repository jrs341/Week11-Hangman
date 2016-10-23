var checkGuess = require('./word1');
// var logic = require('./word1');
// checkGuess.checkWord();
// console.log(checkGuess);
// console.log(checkGuess.goodGuess);
// console.log(logic);
// console.log(randomWord);
// console.log(userGuess);

function Display(randomWord, userGuess, logic) {
	this.randomWord = randomWord,
	this.guess = userGuess,
	this.logic = logic
	// this.log = function() {
	// 	console.log(randomWord);
	// 	console.log(this.guess);
	// 	console.log(this.logic);
	// }
}

var displayThis = new Display(checkGuess.word, checkGuess.guess, checkGuess.goodGuess);

displayThis.log();