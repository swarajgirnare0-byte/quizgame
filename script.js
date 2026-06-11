const questions = [
{
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Pune", "Chennai"],
    answer: "Delhi"
},
{
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText =
        questions[currentQuestion].question;

    let buttons = document.querySelectorAll("#answers button");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = questions[currentQuestion].options[i];
    }
}

function checkAnswer(choice) {
    let selected =
        document.querySelectorAll("#answers button")[
            choice.charCodeAt(0) - 65
        ].innerText;

    if (selected === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("question").innerText =
            "Quiz Finished!";
        document.getElementById("answers").innerHTML = "";
        document.getElementById("score").innerText =
            "Final Score: " + score;
    }
}

loadQuestion();
