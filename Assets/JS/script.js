// Create a timed quiz on JavaScript fundamentals that stores high scores

// Get a handle on html elements

var container = document.querySelector('.container');
var userScoreEl = document.getElementById('user-score');
var totalScoreEl = document.getElementById('total-score');
var questionTextEl = document.getElementById('question-text');
var btnTrueEl = document.getElementById('true');
var btnFalseEl = document.getElementById('false');
var btnRestartEl = document.getElementById('restart');
var btnPrevEl = document.getElementById('prev');
var btnNextEl = document.getElementById('next');
var btnSubmitEl = document.getElementById('submit');


// Creating Questions and Answers Options

var questions = [
    {
        question: " What is a call-back function?",
        answers: [
            {option:" A function passed as an arguement to another function.",answer:true},
            {option:" A function with no name.",answer:false}
        ]
    },
    {
        question:" What is a modal?",
        answers: [
            {option:" The window to the DOM.",answer:false},
            {option:" A pop-up screen that requires some form action before continuing.",answer:true}
        ]
    },
    {
        question:" Event Delegation is...",
        answers: [
            {option:" A method to get a handle on elements.",answer:false},
            {option:" A pattern to handle events efficiently.",answer:true}
        ]
    },
    {
        question:" What is the purpose of a for-loop?",
        answers: [
            {option:" To exctract the value of an object.",answer:false},
            {option:" To execute the same code more than once.",answer:true}
        ]
    },
    {
        question:" .unshift() adds element(s) to what part of an array?",
        answers: [
            {option:" To the beginning of an array.",answer:true},
            {option:" Always after the second array.",answer:false}
        ]
    }

];

// Add onclick events to buttons

// When I open the page, I see the title of the code quiz at the top
// make html page and  css page and style html using css
// I see there is a Start Game Button that needs to be pressed to start the game
// A timer starts as soon as I click Start Game Button and I'm presented with a question
// When I answer the question, I am presented with another question
// When I answer incorrectly, time is subtracted from the clock
// When all the questions are answered or the timer reaches 0, the game is over
// When the game is over, I can save my initials and my score
















function countdown() {
    var timeRemaining = 180;

    var timeInterval = setInterval(function () {

        //seconds on screen
        timeRemaining--;
        timerEl.textContent = timeRemaining + ": Till your time expires!";
        if(timeRemaining === 0) {
            clearInterval(timeInterval);
            displayMessage();
        }
    },1000);
};















