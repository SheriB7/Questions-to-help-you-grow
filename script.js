// console.log("having fun");
// $("body").append("jquery is loaded")

// var question = document.querySelector(".question");
var question = $('.question');
// var win = document.querySelector(".win");
var win = $(".win");
// var lose = document.querySelector(".lose");
var lose = $(".lose");
// var timerElement = document.querySelector(".timer-count");
var timerElement = $(".timer-count");
// var startButton = document.querySelector(".start-button");
var startButton = $(".start-button");
var questionIndex = 0 
var questionText = $('.questionText')
var answers = $(".answers")
// currtently selected question
var quest;
var questions = [
        {
            title: '1. Commonly used data types DO NOT INCLUDE ______.',
            options: ["strings", "booleans", "alerts", "numbers"],
            answer: 3
        },
        {
            title: '2. The condition in an if / else is enclosed within ______.',
            options: ["quotes", "curly brackets", "parenthesis", "square brackets"],
            answer: 2
        },
        {
            title: '3. Arrays in JavaScript can be used to store ______.',
            options: ["numbers and strings", "other arrays", "booleans", "all of the above"],
            answer: 3
        },
        {
            title: '4. String values must be enclosed within _____ when being assigned to variables.',
            options: ["commas", "curly brackets", "quotes", "parenthesis"],
            answer: 0
        },
        

    ]

    
    function start(event) {
        event.preventDefault()
        $("#Start").addClass("hide")
        $("#Game").removeClass("hide")
        game()
    //     console.log("clicked")
    }
    // render question
    function renderQuestion() {
    quest = questions[questionIndex]
    $("#title").text(quest.title)
    for (var i = 0; i < quest.options.length; i++) {
        var option = quest.options[i];
        $("#" + i).text(option)
    }
    
}

function checkQuestion(event) {
    event.preventDefault()
    var userInput = event.target.id
    console.log(userInput)
    //determine if user is right or wrong (quest.answer)
        // update score accordingly
    // increase questionIndex by 1 but make sure questionIndex doesn't esceed 
    // questions.length (this would be an if else statement)
    // pullup next question hint renderQuestion the function 
    }


    function game() {
        renderQuestion()


        // check if right or wrong
// load next question
}


// startButton.addEventListener("click",start)
startButton.on("click",start)
$(".answerbutton").on("click",checkQuestion)

