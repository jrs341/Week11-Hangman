// var word = require('./game');

var getWord = function () {
	var word = require('./game');
	return word1 = word.gameWord;
}

// var currentWord = word.gameWord;
// console.log('1 ' + currentWord);

var guessedLetter = process.argv[2];

// console.log(guessedLetter);

// var checkWord = word.gameWord.includes(guessedLetter);

// console.log(checkWord);

// var guessedLetters = [];

// function push() {
// 	guessedLetters.push(guessedLetter);
// }

// if (checkWord) {
// 	guessedLetters.push(guessedLetter);
// 	console.log('good guess');
//  } else {
//  	guessedLetters.push(guessedLetter);
//  	console.log('guess again');
//  }
var word1 = "";



var isInWord = false;

var guessedLettersArray = [];

function GameWord(word, guessedLetter) {
	this.word = word,
	this.guessedLetter = guessedLetter,
	this.guessedLetters = [];
	this.Push = function() {
		this.guessedLetters.push(guessedLetter);
	}
	this.log = function() {
		console.log(this.word);
	}
	this.checkWord = function() {
		if (word.includes(this.guessedLetter)) {
			this.Push();
			console.log('good guess');
			console.log(this.guessedLetters);
			return isInWord = true;
		} else {
			this.Push();
			console.log('guess again');
			console.log(this.guessedLetters);
		}
	}
}

var currentWord = new GameWord(word1, guessedLetter);

getWord();
console.log(word1);
currentWord.log();
currentWord.checkWord();
currentWord.Push();
console.log(isInWord);

