//Require the inquirer package
var inquirer = require('inquirer');
var questions = require('./questions.js').questions;

exports.basicCard = function(full, cloze) {
    this.full = full;
    this.cloze = cloze;
}


