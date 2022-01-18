quiz : [
    {
      question : "What is the standard distance between the target and archer in Olympics?",
      answer : [
        "50 meters",
        "70 meters",
        "100 meters",
        "120 meters"
      ],
      correct : 1 // arrays start with 0, so answer is 70 meters
    },
    {
        question : "Which is the highest number on a standard roulette wheel?",
        answer : [
        "22",
        "24",
        "32",
        "36"
      ],
      correct : 3
    },
    {
        question : "How much wood could a woodchuck chuck if a woodchuck would chuck wood?",
        answer : [
        "400 pounds",
        "550 pounds",
        "700 pounds",
        "750 pounds"
      ],
      correct : 2
    },
    {
        question : "Which is the seventh planet from the sun?",
        answer : [
        "Uranus",
        "Earth",
        "Pluto",
        "Mars"
      ],
      correct : 0
    },
    {
        question : "Which is the largest ocean on Earth?",
        answer : [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean"
      ],
      correct : 3
    }
    ]

quizHeart = null,
question = null, // HTML question wrapper
answer = null, // HTML answers wrapper

//score
now = 0, // current question
score = 0 // current score

quizContainer : () => {
    quiz.quizHeart = document.getElementById("questionContainer")

quiz.question = document.createElement("div");
quiz.question.id = "question";
quiz.quizHeart.appendChild(quiz.question);      

quiz.answer = document.createElement("div");
quiz.answer.id = "answer";
quiz.quizHeart.appendChild(quiz.answer);

// start quiz
quiz.draw();

window.addEventListener("load", quiz.quizContainer);
}

createQuiz : () => {
    quiz.question.innerHTML = quiz.quiz[quiz.now].q;

    quiz.answer.innerHTML = "";
    for (let i in quiz.quiz[quiz.now].o) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizo" + i;
        quiz.answer.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = quiz.quiz[quiz.now].o[i];
        label.setAttribute("for", "quizo" + i);
        label.dataset.idx = i;
        label.addEventListener("click", () => { quiz.select(label); });
        quiz.answers.appendChild(label);
    }
}

// (D) OPTION SELECTED

select: (answer) => {
    let all = quiz.answer.getElementsByTagName("label");
    for (let label of all) {
        label.removeEventListener("click", quiz.select);
      }
      let correct = option.dataset.idx == quiz.quiz[quiz.now].a;
      if (correct) {
        quiz.score++;
        option.classList.add("correct");
    } else {
        option.classList.add("wrong");
      }
      quiz.now++;
      setTimeout(() => {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.question.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.answer.innerHTML = "";
      }
    }, 1000);
}

reset : () => {
  quiz.now = 0;
  quiz.score = 0;
  quiz.draw();
}










