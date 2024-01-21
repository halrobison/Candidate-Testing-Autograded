const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = " ";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";

//TODO: Variables for Part 2
let questions = [
"Who was the first American woman in space? ", 
"True or false: 5 kilometer == 5000 meters? ",
"(5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "
];
let correctAnswers = [
"Sally Ride", 
"true", 
"40", 
"Trajectory", 
"3"
];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  const input = require('readline-sync');

  candidateName = input.question("Please enter your name: ");
  //The user enters their name.
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  const input = require('readline-sync');

 for (let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
 }
  //The user enters their answer.
}

function gradeQuiz(candidateAnswers) {

  //TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < questions.length; i++) {
    if (candidateAnswers[i] === correctAnswers[i]) {
      console.log(`Your answer to question ${i+1} is correct! You said ${candidateAnswers[i]} and the correct answer is ${correctAnswers[i]}.`);
    } else {
      console.log(`Your answer to question ${i+1} is incorrect. You said ${candidateAnswers[i]} and the correct answer is ${correctAnswers[i]}.`)
    }
  }



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello, " + candidateName + "! Welcome to trivia.");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};