// Create a timed quiz on JavaScript fundamentals that stores high scores

// Get a handle on HTML elements
var containerEl = document.querySelector('.container');
var scoreEl = document.querySelector('.score');
var startBtnEl = document.getElementById('start');
var userScoreEl = document.getElementById('user-score');
var questionTextEl = document.getElementById('question-text');
var btnTrueEl = document.getElementById('true');
var btnFalseEl = document.getElementById('false');
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
    btnFalseEl.innerHTML = questions[currentQuestion].answers[1].option;
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
    btnTrueEl.classList.remove('hide');
    btnFalseEl.classList.remove('hide');
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
    btnTrueEl.innerHTML = quesiton[currentQuestion].answers[0].option;
    btnTrueEl.onclick = () => {
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
    btnFalseEl.innerHTML = questions[currentQuestion].answers[1].option;
    btnFalseEl.onclick = () => {
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
    btnTrueEl.innerHTML = questions[currentQuestion].answers[0].option;
    btnTrueEl.onclick = () => {
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
    btnFalseEl.innerHTML  = questions[currentQuestion].answers[1].option;
    btnFalseEl.onclick = () => {
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
    btnTrueEl.classList.add('hide');
    btnFalseEl.classList.add('hide');
    btnPrevEl.classList.add('hide');
    btnNextEl.classList.add('hide');
    questionTextEl.innerHTML = "Way to go! Let's see how you did!!";
};

// When I answer incorrectly, time is subtracted from the clock
// When all the questions are answered or the timer reaches 0, the game is over
// When the game is over, I can save my initials and my score































