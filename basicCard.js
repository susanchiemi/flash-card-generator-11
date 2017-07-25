<<<<<<< HEAD
//Require the inquirer package
var inquirer = require('inquirer');
var questions = require('./questions.js').questions;

exports.basicCard = function(full, cloze) {
    this.full = full;
    this.cloze = cloze;
}


=======
//Require the inquirer package
var inquirer = require('inquirer');
var questions = require('./questions.js').questions;

basicCard = function(front, back) {
    this.front = front;
    this.back = back;
}

>>>>>>> refs/remotes/origin/master
