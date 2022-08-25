//DOM Transversal Variables

/*Corner reference buttons for highscore and timer*/
var timeLeft = document.getElementById("timer");
var scoreCheck = document.querySelector("#highscore-check");

/*Intro Page-Section HTML Elements*/
var introPage = document.querySelector("#introduction-page");
var welcomeMessage = document.querySelector("#introduction");
var startBtn = document.querySelector("#start-button");

/*Question Page-Section HTML Elements*/
var questionPage = document.querySelector("#question-page");
var askQuestion = document.querySelector("#question");

/*Question Body-Section HTML Elements*/
var choicesButtons = document.querySelectorAll(".choices");
var answerBtn1 = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");

/*Question Accuracy-Section HTML Elements*/
var feedbackLine = document.querySelector("#feedback");

/*Score Report Page-Section HTML Elements*/
var scoreBoard = document.querySelector("#submission-page");
var finalScore = document.querySelector("#final-score");
var userInitials = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-btn");
var finish = document.querySelector("#finish");

/*High Score Page-Section HTML Elements*/
var highScorePage = document.querySelector("#highscore-page");
var scoreRecord = document.querySelector("#score-record");
var backBtn = document.querySelector("#back-btn");
var clearBtn = document.querySelector("#clear-btn");

//Define question array of question objects
var questionArray = [
  {
    question:
      "Question 1 : Which property can you use in order to implement event delegation?",
    choices: [
      "a. event.target",
      "b. event.preventDefault()",
      "c. event.stopPropagation()",
      "d. event.addEventListener",
    ],
    answer: "a",
  },
  {
    question:
      "Question 2 : Which statement best describes what is happening to data when it is persisted to local storage?",
    choices: [
      "a. The data is stored under the Applications tab in Chrome Dev Tools.",
      "b. The data is stored in the client or browser.",
      "c. The data is stored in the database in the backend.",
      "d. The data is stored in the window called localStorage.",
    ],
    answer: "b",
  },
  {
    question:
      "Question 3 : You need to retrieve data with the key name of 'formData' from local storage and convert it into an object. How would you accomplish this?",
    choices: [
      "a. var formData = JSON.stringify(localStorage.getItem('formData'))",
      "b. var formData = JSON.parse('formData')",
      "c. var formData = JSON.parse(localStorage.setItem('formData'))",
      "d. var formData = JSON.parse(localStorage.getItem('formData'))",
    ],
    answer: "d",
  },
  {
    question:
      "Question 4 : You just finished the feature that you've been working on and successfully merged your branch, feature-52. How would you delete branch, feature-52?",
    choices: [
      "a. git branch -d feature-52",
      "b. git branch feature-52",
      "c. git checkout feature-52",
      "d. git merge feature-52",
    ],
    answer: "a",
  },
  {
    question:
      "Question 5 : What are the six primitive data types in JavaScript?",
    choices: [
      "a. string, number, boolean, bigInt, symbol, undefined",
      "b. sentence, float, data, bigint, symbol, undefined",
      "c. sentence, int, truthy, bigInt, symbol, undefined",
      "d. string, num, falsy, bigInt, symbol, undefined",
    ],
    answer: "a",
  },
  {
    question:
      "Question 6 : How do we declare a conditional statement in JavaScript?",
    choices: [
      "a. while loop",
      "b. for loop",
      "c. difference...between",
      "d. if...else",
    ],
    answer: "d",
  },
  {
    question:
      "Question 7 : From the given array, which index is the letter 'b' on? ['a','b','c','d']",
    choices: ["a. 2", "b. 3", "c. 0", "d. 1"],
    answer: "d",
  },
  {
    question: "Question 8 : What are the two types of scope JavaScript uses?",
    choices: [
      "a. Abroad and local",
      "b. Outside and Inside",
      "c. Global and Local",
      "d. Surrounding and Inner",
    ],
    answer: "c",
  },
];

//Miscellaneous variables to be used in quiz-related task functions
var secondsLeft = 75;
var totalScore = 0;
var questionNumber = 0;
var questionCount = 1;

/*Start of Functions*/

//Function to begin countdown after user begins quiz
function countdown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeLeft.textContent = "Time left: " + secondsLeft + " s";

    //If no time is left, clear time-tracker and display message
    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      timeLeft.textContent = "Time is up!";
      quizOver();

      //If no more questions are left, clear time-tracker and end quiz
    } else if (questionCount >= questionArray.length + 1) {
      clearInterval(timerInterval);
      quizOver();
    }
  }, 1000);
}

//Function to start quiz and begin countdown + begin iterating through questions
function startQuiz() {
  //Display question section
  introPage.style.display = "none";
  questionPage.style.display = "block";
  questionNumber = 0;
  countdown();
  displayQuestion(questionNumber);
}

//Function to display questions with respective answer choices
function displayQuestion(n) {
  askQuestion.textContent = questionArray[n].question;
  answerBtn1.textContent = questionArray[n].choices[0];
  answerBtn2.textContent = questionArray[n].choices[1];
  answerBtn3.textContent = questionArray[n].choices[2];
  answerBtn4.textContent = questionArray[n].choices[3];
  questionNumber = n;
}

//Function to check if user-selected answer is correct or wrong
function checkAnswer(event) {
  event.preventDefault();

  //Display question feedback section and hide after one millisecond
  feedbackLine.style.display = "block";
  setTimeout(function () {
    feedbackLine.style.display = "none";
  }, 1000);

  //Compare array entry for respective answer and assess if it matches user-selected answer
  if (questionArray[questionNumber].answer == event.target.value) {
    feedbackLine.textContent = "Correct!";
    totalScore = totalScore + 1;
  } else {
    secondsLeft = secondsLeft - 10;
    feedbackLine.textContent =
      "Wrong. The correct answer is " +
      questionArray[questionNumber].answer +
      ".";
  }

  //After question feedback, move onto next question. If there are no more questions, end the quiz.
  if (questionNumber < questionArray.length - 1) {
    displayQuestion(questionNumber + 1);
  } else {
    quizOver();
  }

  questionCount++;
}

//Function to end the quiz
function quizOver() {
  //Display score submission section and hide timer
  questionPage.style.display = "none";
  scoreBoard.style.display = "block";
  finalScore.textContent = "Your final score is :" + totalScore;
  timeLeft.display = "none";
}

//Function to retrieve current score with respective set of initials from local storage
function retrieveScore() {
  var currentList = localStorage.getItem("List");

  //If list of added scores is not empty, parse score entries and return the new array of parsed scores
  if (currentList !== null) {
    var newList = JSON.parse(currentList);
    return newList;
  } else {
    newList = [];
  }
  return newList;
}

//Function to render score to screen
function renderScore() {
  scoreRecord.innerHTML = "";
  scoreRecord.style.display = "block";
  var highScores = rank();
  var topScores = highScores.slice(0, 5);

  //For entries in sliced array, set each entry equal to newly created list item in high score page
  for (var i = 0; i < topScores.length; i++) {
    var scoreEntry = topScores[i];

    var li = document.createElement("li");
    li.textContent = scoreEntry.user + " - " + scoreEntry.score;
    scoreRecord.appendChild(li);
  }
}

//Function to sort through scores and rank the highscore list
function rank() {
  var listToSort = retrieveScore();

  //If there are no parsed scores, return nothing. Else, return list from highest to lowest
  if (retrieveScore == null) {
    return;
  } else {
    listToSort.sort(function (a, b) {
      return b.score - a.score;
    });
    return listToSort;
  }
}

//Function to append new score and initials in local storage
function addScore(n) {
  var addedScores = retrieveScore();
  addedScores.push(n);
  localStorage.setItem("List", JSON.stringify(addedScores));
}

//Function to save score and initials entry
function saveScore() {
  var scoreInput = {
    user: userInitials.value,
    score: totalScore,
  };
  addScore(scoreInput);
  renderScore();
}

/*Start of event listeners*/

//Add event listener to start button so that user can start quiz
startBtn.addEventListener("click", startQuiz);

//Add event listener to choices button so that the program continues onto the next part after user answers a question
choicesButtons.forEach(function (click) {
  click.addEventListener("click", checkAnswer);
});

//Add event listener to submit button in order to save user information and proceed to highscore page
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "none";
  highScorePage.style.display = "block";
  questionPage.style.display = "none";
  saveScore();
});

//Add event listener to view highscores button to check final highscore ranking list page
scoreCheck.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "none";
  highScorePage.style.display = "block";
  questionPage.style.display = "none";
  renderScore();
});

//Add event listener to go back to main page to restart quiz
backBtn.addEventListener("click", function (event) {
  event.preventDefault();
  scoreBoard.style.display = "none";
  introPage.style.display = "block";
  highScorePage.style.display = "none";
  questionPage.style.display = "none";
  location.reload();
});

//Add event listener to clear highscores button so that local storage clears and page still shows with empty list
clearBtn.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.clear();
  renderScore();
});
