// I was trying to make a flashcard app that shows one question at a time with a prompt for the answer.  




//Require the inquirer package
var inquirer = require('inquirer');
//Import full list of questions
var questions = require('./questions.js').questions;

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
} 


//Variable that holds the question
 var fullQuestion = [];


//Show first question (front) -- not working
for (var i = 0; i < questions.length; i++) {
    var Q = new BasicCard(questions[i].front);
    fullQuestion.push(Q); 
   // console.log(questions);
}

var currentQuestion = 0;
var answerRight = 0;
var answerWrong = 0;

function askQuestion () {
    inquirer.prompt ([
        {
            type: "input",
            message: fullQuestion[currentQuestion].full,
            name: "userGuess"
        }
    ])
    
}

//Prompt for answer 



//Show full answer (back)

//Next Question
//Repeat


//console.log(questions);




