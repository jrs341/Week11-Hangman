// will contain all of the logic for the app
var inquirer = require('inquirer');

var Display = require('./letter.js');

var randomWord

var letter

var randomWordBlankArray

// var randomWordBlankArray = new Display(randomWord, letter);

console.log(randomWordBlankArray);

var count = 0;

function gameInit () {
	inquirer.prompt([{
		name: 'play',
		message: 'Would you like to play hangman?'
	// },{
	// 	name: 'lenght',
	// 	message: 'What is the max length of the words you would like to guess?'
	}]).then(function(answer) {
		if (answer.play == 'no') {
			console.log('I wish you would play');
		} else {
			randomWord = require('./game.js');
			console.log('Hangman is fun!');
			console.log('Here is your first word');
			console.log(randomWord);
			randomWordBlankArray = new Display(randomWord);
			randomWordBlankArray.blankArray();
			console.log(randomWordBlankArray.blank.join(''));
			game();
		}
	});
}

function game () {
	// randomWordBlankArray = new Display(randomWord, answer.letter);
	console.log(randomWordBlankArray);
	inquirer.prompt([{
		name: 'letter',
		message: 'Choose a letter'
	}]).then(function(answer) {
		if (count == 0) {
			count ++;
			randomWordBlankArray = new Display(randomWord, answer.letter);
			randomWordBlankArray.blankArray();
			randomWordBlankArray.arrayUpdate(randomWord, answer.letter);
			console.log(randomWordBlankArray.blank.join(''));
			game();
		} else {
			randomWordBlankArray.blankArray();
			randomWordBlankArray.arrayUpdate();
			console.log(randomWordBlankArray.blank.join(''));
			if (answer.letter) {

				if (count > 0 && count < randomWord.split('').length){
					game();
					return;
				}
			}
		}
		// console.log(answer.letter);
		// randomWordBlankArray = new Display(randomWord, answer.letter);
		// randomWordBlankArray.blankArray();
		// randomWordBlankArray.arrayUpdate();
		// console.log(randomWordBlankArray);
		// if (answer.letter) {

		// 	if (count > 0 && count < randomWord.split('').length){
		// 		game();
		// 		return;
		// 	}
		// }
		// continueGame();

	});
}

function continueGame () {
	console.log(randomWordBlankArray);
	inquirer.prompt([{
		name: 'letter',
		message: 'Choose a letter'
	}]).then(function(answer) {
		count ++;
		console.log(answer.letter);
		randomWordBlankArray(randomWord, answer.letter);
		console.log(randomWordBlankArray);
		randomWordBlankArray.blankArray();
		randomWordBlankArray.arrayUpdate();
	});
}

gameInit();
