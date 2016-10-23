var displayThis = require('./letter.js');

var inquier = require('inquirer');


inquier.prompt([{
	name: 'play',
	message: 'Would you like to play hangman?'
// },{
	// name: 'letters',
	// message: 'What is the max length of the words you would like to guess?'
// }
}]).then(function(answer) {
	if (answer.play == 'no') {
		console.log('I wish you would play');
	} else {

	}
})
