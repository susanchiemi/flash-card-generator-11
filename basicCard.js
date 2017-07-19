//Require the inquirer package
var inquirer = require('inquirer');
var questions = require('./questions.js').questions;

basicCard = function(front, back) {
    this.front = front;
    this.back = back;
}

