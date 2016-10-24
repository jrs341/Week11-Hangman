var randomWord = require('./game.js');

console.log(randomWord);

var CheckUserGuess = require('./word1.js');

console.log(CheckUserGuess);

var Display = require('./letter.js');

var inquirer = require('inquirer');

var game = function() {

}


inquirer.prompt([{
	name: 'play',
	message: 'Would you like to play hangman?'
},{
	name: 'lenght',
	message: 'What is the max length of the words you would like to guess?'
}]).then(function(answer) {
	if (answer.play == 'no') {
		console.log('I wish you would play');
	} else {
		console.log('Hangman is fun!');
		console.log('Here is your first word');
		var newBlankArray = new Display(randomWord);
		newBlankArray.blankArray();

		inquirer.prompt([{
			name: 'letter',
			message: 'Choose your first letter'
		}]).then(function(letter){
			// console.log(letter.letter);
			var checkGuess = new CheckUserGuess(randomWord, letter.letter);
			var newBlankArray = new Display(randomWord, letter.letter);
			checkGuess.checkWord();
			// console.log(checkGuess);
			checkGuess.Push();
			newBlankArray.blankArray();
			newBlankArray.arrayUpdate();	
		})
	}
})
