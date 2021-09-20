var readlineSync = require("readline-sync")
var chalk = require("chalk")

userName = readlineSync.question("What is your name? ")
console.log("Welcome,", chalk.black.bgGreen(userName),". Let's see how much you know me.")

questionOne = {
  question: chalk.black.bgRed.bold("What is favourite color? "),
  answer: "Purple"
}

questionTwo = {
  question: chalk.black.bgMagenta.bold("Where do I live? "),
  answer: "Balasore"
}

questionThree = {
  question: chalk.black.bgCyan.bold("What do I like? "),
  answer: "Chocolate"
}

questionBox = [questionOne, questionTwo, questionThree]

var score = 0;

function quizMe(question, answer){
  askUser = readlineSync.question(question);
  if(askUser == answer){
    console.log("Yeas, you are right.")
    score +=1;
  } else {
    console.log("No you ae wrong")
  }
}

for (var looper = 0; looper<questionBox.length; looper++){
  quizMe(questionBox[looper].question, questionBox[looper.answer])
}

console.log("Your final score is,", chalk.blue.bold(score))
