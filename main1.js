// var wordInput = require('./word');

var userLetter;

module.exports.guessedLetter = userLetter;

// function promptUser() {

	var inquirer = require('inquirer');

	inquirer.prompt([
		{
			type: 'input',
			message: 'Please guess a letter',
			name: 'userGuess'
		}
	]).then(function (userInput) {
	    // console.log(userInput.userGuess);
	    userLetter = userInput.userGuess;
	   	// console.log(userLetter);
	   	// var letter = require('./letter');	    
	});
	
	// prompt(); this creats an infinate loop
// }

// promptUser();
// inquirer function runs twice with this console.log?
 




