var counter = 0;
var auth = 0;
var right= 0;
var prog = 0;
const answerValues = new Map();
const isShuffled = document.URL.includes("shuffle=true");
const questionNumber = document.getElementById("question-number");
const questionTag = document.getElementById("question");
const lastButtonRow = document.getElementById("lastButtonRow");
const answerButton = document.querySelectorAll(".answer-button");
var prevButton = document.querySelector(".prev-button");