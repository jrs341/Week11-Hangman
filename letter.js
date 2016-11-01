
function Display(randomWord, userGuess) {
	this.randomWord = randomWord.split(''),
	this.guess = userGuess,
	// this.guessedLetters =[],
	this.blank = [],
	
	// this.Push = function() {
	// 	this.guessedLetters.push(userGuess);
	// }
	this.blankArray = function() {
		for (var i = 0; i < this.randomWord.length; i++) {
			this.blank[i] = ' _ ';
		}
	// console.log(this.blank.join(''));
	}
	this.arrayUpdate = function() {

		// this.guessedLetters.push(userGuess);

		for(var i = 0; i < this.randomWord.length; i++) {
			
			if (this.randomWord[i] === userGuess) { 
				this.blank.splice(i, 1, userGuess);
				// console.log(this.blank.join(' '));
			}	
		}
		// console.log(this.blank.join(' '));
	}	
}

module.exports = Display;