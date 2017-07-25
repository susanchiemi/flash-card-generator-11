//Require the inquirer package
var inquirer = require('inquirer');
var questions = require('./questions.js').questions;


exports.basicCard = function(full, cloze) {
    this.full = full;
    this.cloze = cloze;
}

exports.clozeCard = function (full, cloze) {
    var textToLower = text.toLowerCase();
    var closetoLower = cloze.toLowerCase();

if (!textToLower.includes(clozeToLower)){
    console.log('ERROR: cloze-deletion does not appear within full text ---<' + cloze + '>');
    return;
}

this.full = text;
this.cloze = cloze;
this.partial = text.replace(cloze, ' . . .');
}

var clozeQuestions = [];

for (var i = 0; i < questions.length; i++) {
    var q = new basicCard.ClozeCard(quesions[i].full, 
    questions[i].close);
    clozeQuestions.push(q);
}

console.log (clozeQuestions);