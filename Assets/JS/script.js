// Create a timed quiz on JavaScript fundamentals that stores high scores

// Get a handle on HTML elements
var containerEl = document.querySelector('.container');
var scoreEl = document.querySelector('.score');
var startBtnEl = document.getElementById('start');
var userScoreEl = document.getElementById('user-score');
var questionTextEl = document.getElementById('question-text');
var btnOption1El = document.getElementById('option1');
var btnOption2El = document.getElementById('option2');
var btnOption3El = document.getElementById('option3');
var btnOption4El = document.getElementById('option4');
var btnRestartEl = document.getElementById('restart');
var btnPrevEl = document.getElementById('prev');
var btnNextEl = document.getElementById('next');
var btnSubmitEl = document.getElementById('submit');

//Dynamically create h1 element;create countdown div handle; appenChild
var startCountdownEl = document.querySelector('.start-countdown');
var countdownTimerEl = document.createElement("h3");
startCountdownEl.appendChild(countdownTimerEl);



    // Creating Questions and Answers Options for Code iQuiz 101
var questions = [
    {
        //questions first
        question: " What is a call-back function?",
        
        //answer options next
        answers: [
            " A function passed as an arguement to another function.",
            " A function with no name.",
            "",
            ""
        ],
        answer: 0
    },
    {
        question:" What is a modal?",
        answers: [
            " The window to the DOM.",,
            " A pop-up screen that requires some form action before continuing.",
            "A Modal is a footer",
            "A Modal is a header"
        ]
    },
    {
        question:" Event Delegation is...",
        answers: [
            " A method to get a handle on elements.",
            " A pattern to handle events efficiently.",
            " A process to callback a function",
            "A method to find a variable's value"
        ]
    },
    {
        question:" What is the purpose of a for-loop?",
        answers: [
            " To exctract the value of an object.",
            " To execute the same code more than once.",
            " To create a string",
            " To create a boolean"
        ]
    },
    {
        question:" .unshift() adds element(s) to what part of an array?",
        answers: [
            " To the beginning of an array.",
            " Always after the second array.",
            "It removes the element",
            "It removes the id value"

        ]
    }

];


// Add onclick events to buttons
btnRestartEl.addEventListener('click', Restart);
btnPrevEl.addEventListener('click', Prev);
btnNextEl.addEventListener('click', Next);
btnSubmitEl.addEventListener('click', Submit);
startBtnEl.addEventListener('click', clickedStart);


// Create Start Game function
function clickedStart() {
        countdown();
        beginCodeiQuiz();
};


// Create countdown timer
function countdown() {
    var timeRemaining = 240;
    var timeInterval = setInterval(function () {
      timeRemaining--;
      countdownTimerEl.textContent + ":Time Remaining.";
      if(timeRemaining === 0) {
        clearInterval(timeInterval);
        return"Time's up!";
      }
    },1000);

};



// Create function for beginning code quiz
function beginCodeiQuiz() {
    var currentQuestion = 0;
    questionTextEl.innerHTML = questions[currentQuestion].question;
    option1El.innerHTML = questions[currentQuestion].answers[0].option;
    option1El.onclick = () => {
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
    btn0FalseEl.innerHTML = questions[currentQuestion].answers[1].option;
    btn0FalseEl.onclick = () => {
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
};
beginCodeiQuiz();

//Create restart function
function Restart() {
    currentQuestion = 0;
    startBtnEl.classList.remove('hide');
    btnRestartEl.classList.remove('hide');
    btnPrevEl.classList.remove('hide');
    btnNextEl.classList.remove('hide');
    btnSubmitEl.classList.remove('hide');
    option1El.classList.remove('hide');
    btn0FalseEl.classList.remove('hide');
    score = 0;
    userScoreEl.innerHTML = score;
    beginCodeiQuiz();
};

//Create Next function for button to navigate from current page to next page
function Next() {
    currentQuestion++;
    if(currentQuestion >= 4) {
        btnNextEl.classList.add('hide');
        btnPrevEl.classList.remove('hide');
    }
    questionTextEl.innerHTML = questions[currentQuestion].quesiton;
    option1El.innerHTML = quesiton[currentQuestion].answers[0].option;
    option1El.onclick = () => {
        var choice = 0;
        if(quesiton[currentQuestion].answers[choice].answer) {
            if(score < 4) {
                score++;
            };
        };
        userScoreEl.innerHTML = score;
        if(currentQuestion < 2) {
            next()
        };
    }
    btn0FalseEl.innerHTML = questions[currentQuestion].answers[1].option;
    btn0FalseEl.onclick = () => {
        var choice = 1;
        if(question[currentQuestion].answers[choice].answer) {
            if(score < 4) {
                score++;
            };
        };
        userScoreEl.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        };
    }
    btnPrevEl.classList.remove('hide')
};


//Creating Prev function for button to navigate from current page to previous page.
function Prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        btnPrevEl.classList.add('hide');
        btnNextEl.classList.remove('hide');
    };
    questionTextEl.innerHTML = questions[currentQuestion].question;
    option1El.innerHTML = questions[currentQuestion].answers[0].option;
    option1El.onclick = () => {
        var choice = 0;
        if(questions.currentQuestion.answers[choice].answer) {
            if(score < 5) {
                score++;
            };
        }    
        userScoreEl.innerHTML = score;
        if(currentQuestion < 4) {
            next();
        }
    };
    btn0FalseEl.innerHTML  = questions[currentQuestion].answers[1].option;
    btn0FalseEl.onclick = () => {
        var choice = 1;
        if(question[currentQuestion].answers[choice].answer) {
            if(score < 5) {
                score++;
            }
        }
        userScoreEl.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
    btnNextEl.classList.remove('hide');
};

//Creating submit function for button
function Submit() {
    btnSubmitEl.classList.add('hide');
    option1El.classList.add('hide');
    btn0FalseEl.classList.add('hide');
    btnPrevEl.classList.add('hide');
    btnNextEl.classList.add('hide');
    questionTextEl.innerHTML = "Way to go! Let's see how you did!!";
};

// When I answer incorrectly, time is subtracted from the clock
// When all the questions are answered or the timer reaches 0, the game is over
// When the game is over, I can save my initials and my score































