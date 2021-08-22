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
var scoreValueEl = document.getElementById('score-value');
var userInitialsEl = document.getElementById('userInitials');
var btnSaveUserEl = document.getElementById('save-user');
var questionSectionEl = document.getElementById('question-section');
var controlsEl = document.querySelector('.controls');

// Hide sections
questionSectionEl.style.display = "none";
controlsEl.style.display = "none";
userInitialsEl.style.display = "none";


// CurrentQuestion variable
var currentQuestion = 0;


// Time Remaining variable
var timeRemaining = 120;

// Variable for userScore
var score = 0;

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
            " A method to recall the preceeding funvction",
            " It is not a real function"
        ],
        answer: 0
    },
    {
        question:" What is a modal?",
        answers: [
            " The window to the DOM.",
            " A pop-up screen that needs attention",
            " A Modal is a footer",
            " A Modal is a header"
        ],
        answer: 1
    },
    {
        question:" Event Delegation is...",
        answers: [
            " A method to get a handle on elements.",
            " A process to callback a function",
            " A method to find a variable's value",
            " A pattern to handle events efficiently.",

        ],
        answer: 3
    },
    {
        question:" What is the purpose of a for-loop?",
        answers: [
            " To exctract the value of an object.",
            " To create a string",
            " To execute the same code more than once.",
            " To create a boolean"
        ],
        answer: 2
    },
    {
        question:" .unshift() adds element(s) to what part of an array?",
        answers: [
            " To the beginning of an array.",
            " Always after the second value in an array.",
            " Both of these",
            " None of these"

        ],
        answer: 0
    }

];


// Add onclick events to buttons
btnRestartEl.addEventListener('click', Restart);
btnPrevEl.addEventListener('click', Prev);
btnNextEl.addEventListener('click', Next);
btnSubmitEl.addEventListener('click', Submit);
startBtnEl.addEventListener('click', clickedStart);

// Add eventListeners for user options
btnOption1El.addEventListener('click', checkAnswers);
btnOption2El.addEventListener('click', checkAnswers);
btnOption3El.addEventListener('click', checkAnswers);
btnOption4El.addEventListener('click', checkAnswers);



// Create Start Game function
function clickedStart() {
         countdown();
        questionSectionEl.style.display = "block";
        beginCodeiQuiz();
};


// Create countdown timer
function countdown() {
    var timeInterval = setInterval(function () {
      timeRemaining--;
      countdownTimerEl.textContent = timeRemaining + " Seconds remaining";
      if(timeRemaining === 0) {
        clearInterval(timeInterval);
        return "Time's up!";
      }
    },1000);

};



// Create function for beginning code quiz
function beginCodeiQuiz() {
    questionTextEl.innerHTML = questions[currentQuestion].question;
    btnOption1El.innerHTML = questions[currentQuestion].answers[0]
    btnOption2El.innerHTML = questions[currentQuestion].answers[1]
    btnOption3El.innerHTML = questions[currentQuestion].answers[2]
    btnOption4El.innerHTML = questions[currentQuestion].answers[3]
};

function checkAnswers() {
    var userChoice = this.getAttribute("data-value")
    console.log(userChoice);
    if(userChoice == questions[currentQuestion].answer)
    {
        score += 10;
    } else{
        score -= 5;

    }
    if(currentQuestion < questions.length-1){
        currentQuestion++;
        beginCodeiQuiz()
    }else {
        console.log(score)
        questionSectionEl.style.display = "none";
        userInitialsEl.style.display = "block";

    }
};


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































