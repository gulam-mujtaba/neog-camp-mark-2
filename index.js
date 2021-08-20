var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is Your Name? ");

console.log("Hi " + userName, "\nWelcome to this quiz!! ")
console.log("--------------------------------\nHere we'll test your knowledge on the Web Series 'THE FAMILY MAN'")

console.log("\nYou will be given 3 Options for each question. (a,b,c)")

console.log("\nEach right answer will give you 1 Star\nLets see if you are a 5 Star Fan :)\n___________________________________")

var score = 0;

var questions = [
  {
    question: "(1) What was the name of Srikant's boss, whom he slapped before quitting job? \na) Tanmoy Ghosh\nb) Bickram Ghosh\nc) Amitava Ghosh\n\n= ",
    answer: "a",
  },{
    question: "(2) What are the “five magical words” for Srikant’s Boss? \na) We are improving the country\nb) Don't be a minimum guy\nc) Work makes a man perfect\n\n= ",
    answer: "b",
  },{
    question:"(3) Who was the main mind behind Major Zulfiqar in Season 1?\na) Moosa\nb) Major Sameer\nc) Subbu\n\n= ",
    answer: "b"
  },{
    question: "(4) What is the name of Shrikant’s partner played by Sharib Hashmi?\na )JK Talpade\nb )RK Pathak\nc )CK Menon\n\n=  ",
    answer: "a",
  },{
    question: "(5) Where was Chellam Sir present in his entry scene?\na )Resort\nb )Temple\nc )Beach\n\n= ",
    answer: "b",
  }
];

for (var i = 0; i < questions.length; i++) {
	console.log(" ")
	var currentQuestion = readlineSync.question(questions[i].question);
	if (questions[i].answer.toUpperCase() === currentQuestion.toUpperCase()) {
		console.log("\nYAY, You got a Star!!");
		console.log("Starts : ", (score = score + 1));
	} else {
		console.log("Sorry FAN, try hard next time :( ");
	}
}
console.log("---------------------------")
console.log(userName + ", You are a " + score + " Star FAN !!")

var highscores = [
  anas = {
score : "5 Star"
  },
  saad = {
    score : "5 Star"
  }
]
console.log("\n___________________________\n\n5 STAR FANCLUB:")
console.log("Anas : " + anas.score)
console.log("Saad : " + saad.score)