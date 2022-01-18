let quiz = {
  quiz : [ 
    {
      question : "Which canal separates the African continent from Asia?",
      answer : [
        "Rhine-Main-Danube Canal",
        "Volga-Don Canal",
        "Danube-Black Sea Canal",
        "Suez Canal"
      ],
      correct : 3
    },
    {
        question : "Which continent is Kazakhstan located at?",
        answer : [
        "Europe",
        "Africa",       
        "Asia",
        "South America"
      ],
      correct : 2
    },
    {
        question : "Which of these famous rivers do not have bridges?",
        answer : [
        "Ganges River",
        "Amazon River",
        "Nile River",
        "Ohio River"
      ],
      correct : 1
    },
    {
      question : "Which of the following countries is the production and sale of tobacco/cigarettes banned?",
      answer : [
      "Ireland",
      "Malaysia",
      "Bhutan",
      "Japan"
      ],
      correct : 2
    },
    {
        question : "What is the percentage of population for Europe?",
        answer : [
        "17.20%",
        "9.59%",
        "7.60%",
        "20.6%"
      ],
      correct : 1
    }
    ],

quizHeart : null,
question : null, // HTML question wrapper
answer : null, // HTML answers wrapper
nextButton : null,
now : 0, // current question
score : 0, // current score

init: () => {
    quiz.quizHeart = document.getElementById("questionContainer")

quiz.question = document.createElement("div");
quiz.question.id = "question";
quiz.quizHeart.appendChild(quiz.question);      

quiz.answer = document.createElement("div");
quiz.answer.id = "answer";
quiz.quizHeart.appendChild(quiz.answer);

// start quiz
quiz.draw();
},

draw: () => {
    quiz.question.innerHTML = quiz.quiz[quiz.now].question;

    quiz.answer.innerHTML = "";
    for (let i in quiz.quiz[quiz.now].answer) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "quiz";
        radio.id = "quizanswer" + i;
        quiz.answer.appendChild(radio);
        let label = document.createElement("label");
        label.innerHTML = quiz.quiz[quiz.now].answer[i];
        label.setAttribute("for", "quizanswer" + i);
        label.dataset.idx = i;
        label.addEventListener("click", () => { quiz.select(label); });
        quiz.answer.appendChild(label);

    }
},

select: (answer) => {
    let questions = quiz.answer.getElementsByTagName("label");
    for (let label of questions) {
        label.removeEventListener("click", quiz.select);
      }
      let correct = answer.dataset.idx == quiz.quiz[quiz.now].correct;
      if (correct) {
        quiz.score++;
        answer.classList.add("correct");
        alert("That's correct!");
    } else {
        answer.classList.add("wrong");
        alert("Oh NO!");
      }
      quiz.now++;
      setTimeout(() => {
      if (quiz.now < quiz.quiz.length) { quiz.draw(); }
      else {
        quiz.question.innerHTML = `You have answered ${quiz.score} of ${quiz.quiz.length} correctly.`;
        quiz.answer.innerHTML = "";
      }
    }, 1000);
},

reset : () => {
  quiz.now = 0;
  quiz.score = 0;
  quiz.draw();
}
};

window.addEventListener("load", quiz.init);












