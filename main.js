var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
  // window.addEventListener('DOMContentLoaded',game.startGame(), false);
  game.startGame();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var prompt = require('prompt');
var def = require("word-definition");
var Word = require('./word.js');
var gameWord = require('./game.js');
var lettersGuessed = [];

prompt.start();

game = {
	word : gameWord,
	wordsWon : 0,
	guessesRemaining : 10, //per word
	currentWrd : null, //the word object
	startGame : function (wrd){
		//make sure the user has 10 guesses
		this.resetGuessesRemaining();
		this.currentWrd = new Word(this.word);
		this.currentWrd.getLets(); 
		this.currentWrd.wordRender();
		console.log('Here is your word: ' + this.currentWrd.wordRender());
		// var n = console.log('Here is your word: ' + this.currentWrd.wordRender());
		// document.getElementById('log').innerHTML("hi");
		this.showDef();
		this.keepPromptingUser();

	},
	showDef : function () {
		def.getDef(this.word, "en", null, function(definition) {
		console.log(definition.category);
    	console.log(definition.definition);
		});
	},
	resetGuessesRemaining : function(){
		this.guessRemaining = 10;
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
		    lettersGuessed.push(result.guessLetter);

		    console.log('  The letter or space you guessed is: ' + result.guessLetter);

		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
		    var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

		    //if the user guessed incorrectly minus the number of guesses they have left
		    if (findHowManyOfUserGuess == 0){
		    	console.log('You guessed wrong!');
		    	self.guessesRemaining--;
		    }else{
		    	console.log('You guessed right!');

		    	//check if you win only when you are right
	    		if(self.currentWrd.didWeFindTheWord()){
			    	console.log('You Won!!!');
			    	return; //end game
			    }
		    }
		    
		    console.log('Guesses remaining: ', self.guessesRemaining);
		    console.log(self.currentWrd.wordRender());
		    console.log('here are the letters you guessed already: ', lettersGuessed.toString());

		    if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
		    	self.keepPromptingUser();
		    }
		    else if(self.guessesRemaining == 0){
		    	console.log('Game over bro it was ', self.currentWrd.word);
		    	console.log('Get with the program man');
		    }else{
		    	console.log(self.currentWrd.wordRender());
		    }
		});
	}


};

// game.startGame();

