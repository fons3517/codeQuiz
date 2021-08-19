// Create a timed quiz on JavaScript fundamentals that stores high scores

// Get a handle on HTML elements

var containerEl = document.querySelector('.container');
var scoreEl = document.querySelector('score');
var userScoreEl = document.getElementById('user-score');
var questionTextEl = document.getElementById('question-text');
var btnTrueEl = document.getElementById('true');
var btnFalseEl = document.getElementById('false');
var btnRestartEl = document.getElementById('restart');
var btnPrevEl = document.getElementById('prev');
var btnNextEl = document.getElementById('next');
var btnSubmitEl = document.getElementById('submit');


// Creating Questions and Answers Options for Code iQuiz 101

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




// When I open the page, I see the title of the code quiz at the top
    function beginCodeiQuiz() {
        var currentQuestion = 0;
        questionTextEl.innerHTML = questions[currentQuestion].question;
        btnTrueEl.innerHTML = questions[currentQuestion].answers[0].option;
        btnTrueEl.onclick = () => {
            var choice = 0;
            if(quesitons[currentQuestion].answers[choice].answer) {
                if(score < 4) {
                    scrore++;
                };
            };
            userScoreEl.innerHTML = score;
            if (currentQuestion < 4) {
                next();
            };
        };
        btnFalseEl.innerHTML = questions[currentQuestion].ansers[1].option;
        btnFalseEl.onclick = () => {
            var choice = 1;
            if(questions[currentQuestion].answers[choice].answer) {
                if(score < 4) {
                    score++;
                };
            };
            userScoreEl.innerHTML = score;
            if(currentQuestion < 4) {
                next();
            };
        };
        btnPrevEl.classList.add('hide');
    }

    beginCodeiQuiz();

    //Create restart function
    function restart() {
        currentQuestion = 0;
        btnPrevEl.classList.remove('hide');
        btnNextEl.classList.remove('hide');
        btnSubmitEl.classList.remove('hide');
        btnTrueEl.classList.remove('hide');
        btnFalseEl.classList.remove('hide');
        score = 0;
        userScoreEl.innerHTML = score;
        beginCodeiQuiz();
    };
    



// make html page and  css page and style html using css
// I see there is a Start Game Button that needs to be pressed to start the game
// A timer starts as soon as I click Start Game Button and I'm presented with a question
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

    function displayMessage() {
        var message = "Time's up!";
        if(timeRemaining === 0) {
            return message;
        };
    
    };
};



// When I answer the question, I am presented with another question
// When I answer incorrectly, time is subtracted from the clock
// When all the questions are answered or the timer reaches 0, the game is over
// When the game is over, I can save my initials and my score




// Add onclick events to buttons
//btnTrueEl.addEventListener('click', true);
btnRestartEl.addEventListener('click', restart);
btnPrevEl.addEventListener('click', prev);
btnNextEl.addEventListener('click', next);
btnSubmitEl.addEventListener('click', submit);



























