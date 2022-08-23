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

    Begin deducting seconds from timer.

    If secondsLeft is less than or equal to 0
        clear time interval and display "time is up" message

    else if questionCount is greater than or equal to questionArray length
        clear time interval and prompt game over function

```

#### Create start quiz function.

```
function startQuiz()

    Call relevant dom transversal variables so that correct page renders to the screen

    Set questionNumber = 0

    prompt countdown() function

    prompt displayQuestion() function to start from first entry in question array
```


