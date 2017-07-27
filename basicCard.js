//Require the inquirer package
var inquirer = require('inquirer');
//Import full list of questions
var questions = require('./questions.js').questions;

    exports.basicCard = function(front, back) {
    this.front = front;
    this.back = back;

}


//Variable that holds the cloze question
var clozeQuestions = [];

/*  for (var i = 0; i < questions.length; i++) {
    var ques = new basicCard.clozeCard(questions[i].full, questions[i].cloze);
    clozeQuestions.push(ques); 

    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, ". . .");

} */

//console.log(clozeQuestions);
console.log(questions);




