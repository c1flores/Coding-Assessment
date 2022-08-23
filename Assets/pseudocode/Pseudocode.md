# Pseudocode

## Objectives

- Layout the foundation of logic behind the coding assessment
- Establish naming conventions for variables to be used
- Optimize control flow of algorithm

## Meta-Analysis of Approach

### Big Picture: Create a timed coding quiz with multiple choice questions, a scorekeeper, and a timer. 

#### Provide appendix of variables that provide dom transversal to be used throughout the program.

```
START:

var(s):  intro page elements...
         question page elements...
         score report page elements...
         highscore page elements...
```
#### Create an object to store questions and answer choices. Repeat code below for amount of questions to include. 

```
var questionArray = [
    {
        question1:
        choices:
        answer:
    }
]
```

#### Initialize global variables to be used in quiz-related task functions.

``` 
    var timeLeft = dynamic timer to be displayed in upper right-hand corner 
    var secondsLeft = numeric entry to use in allotting time throughout program
    var questionNumber = count to indicate to program at which entry from question array to start and iterate from
    var totalScore = count to indicate to program how to tally up points
    var questionCount = count to indicate to program when user has reached end of questions
``` 

#### Create countdown function. 

``` 
function countdown() 

    Begin deducting seconds from timer

    if secondsLeft is less than or equal to 0
        clear time interval and display "time is up" message

    else if questionCount is greater than or equal to questionArray length
        clear time interval and prompt quizOver function

```

#### Create start quiz function.

```
function startQuiz()

    Call relevant intro page dom transversal variables so that correct section renders to the screen

    Set questionNumber = 0

    Prompt countdown() function

    Prompt displayQuestion() function to start from first entry in question array
```

#### Create question display function.

```
function displayQuestion(n)

    Call question dom transversal variables and set text content to index into questionArray beginning with the first entry's question property value

    Call respective answer button dom transversal variables and set text contents to index into question's answer choices

    Set question number = argument variable
```
#### Create answer check function.

```
function checkAnswer(event)

    Call relevant question feedback dom transversal variable so that question feedback renders to the screen

    if questionArray entry answer value matches event target value
        notify user that they are correct
        increment totalScore by 1

     else
        deduct 10 from secondsLeft
        notify the user that they are wrong and give them the correct answer

    if questionNumber value is less than the index of the last entry from questionArray
        display next question

    else
        end quiz
```

#### Create quiz over function.

```
function quizOver()

    Call relevant score submission dom transversal variables so that submission page renders to the screen

    Set finalScore text content so that totalScore is displayed

    Call timer dom transversal variable so that timer is no longer visible
```

