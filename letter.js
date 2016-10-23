var checkGuess = require('./word1');
// var logic = require('./word1');
// checkGuess.checkWord();
console.log(checkGuess);
// console.log(checkGuess.goodGuess);
// console.log(logic);
// console.log(randomWord);
// console.log(userGuess);


function Display(randomWord, userGuess, logic) {
	this.randomWord = randomWord.split(''),
	this.guess = userGuess,
	this.logic = logic
	this.guessedLetters =[];
	this.blank = [];
	this.log = function() {
		// console.log(this.randomWord);
		// console.log(userGuess);
		console.log(this.randomWord.length);
		// console.log(this.guessedLetters);
	}
	this.Push = function() {
		this.guessedLetters.push(userGuess);
		// console.log(this.guessedLetters);

	}
	this.arrayUpdate = function() {
		for (var i = 0; i < this.randomWord.length; i++) {
			this.blank[i] = ' _ ';
		// 	if (this.randomWord[i] == ' ') {
		// 			this.blank[i] = ' ';
		// 	}
		}
		if (logic) {

			for(var i = 0; i < this.randomWord.length; i++) {
			
				if (this.randomWord[i] === userGuess) { 
					this.blank.splice(i, 1, userGuess);
					console.log(this.blank);
				}
			}
		}
	}
}
checkGuess.checkWord();


var displayThis = new Display(checkGuess.word, checkGuess.guess, checkGuess.goodGuess);


console.log(checkGuess.goodGuess);
displayThis.Push();
displayThis.arrayUpdate();
displayThis.log();
