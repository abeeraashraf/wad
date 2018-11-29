var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
},
    {
        question : "current captin of pakistani cricket team",
        choices : [ "sarfaraz",
            "umar",
            "hafeez",
            "none of the above"],
        correctAnswer : 1},];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var index=0;
displayCurrentQuestion();
document.getElementById("quiz-message").style.display = 'none';
function displayNext() {

    var result = document.querySelector("input[type = radio]:checked");

    if(result == null) {
        var display_msg = document.getElementById("quiz-message");
        display_msg.style.color = 'orange';
        display_msg.style.display = "block";
        display_msg.innerText = "No option was Selected";
    }
    currentQuestion++;
    displayCurrentQuestion();
    /*Write your code here */
}

function displayCurrentQuestion() {

    document.getElementById("question").innerHTML = questions[0].question;
    var i;

    for (i = 0; i < questions[index].choices.length; i++) {
        document.getElementById("choice-list").innerHTML += '<li><input type="radio" name="one">' + questions[0].choices[i] +'</li>';
    }
    /*Write your code here */
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}
function displayScore() {
    document.getElementById("result").innerHTML = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';
}