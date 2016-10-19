var gameWord = require('./game');

console.log('1 ' + gameWord.gameWord);

function helpword(word) {
	this.word = word;
	this.printWord = function(){
		console.log(this.word);
	}
}

var gameWord = new helpword(gameWord.gameWord);

gameWord.printWord();
console.log(gameWord);
module.exports.gameWord;