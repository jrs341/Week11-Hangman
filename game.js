var randomWord = require('random-word-by-length');

// var word = require("word-definition");

var gameWord = randomWord();

// var wordDef = word.getDef(gameWord, "en", null, function(definition) {
    // console.log(definition);
//     console.log(definition.word);
// });

// console.log(randomWord());
// console.log(gameWord.split(''));

module.exports.gameWord = randomWord();