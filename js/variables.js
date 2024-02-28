var counter = 0;
var authoritarian = 0;
var economic= 0;
var progressive = 0;
const isShuffled = document.URL.includes("shuffle=true");
const questionNumber = document.getElementById("question-number");
const questionTag = document.getElementById("question");
const answerButton = document.querySelectorAll(".answer-group .answer-button");
const prevButton = document.querySelector(".prev-button");