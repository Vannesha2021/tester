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
    }, {
      question: "Which of the following is not a Polynesian island?",
      answer: [
        "Samoa",
        "Wallis",
        "Futuna",
        "Fiji"
      ],
      correct: 3
    }, {
      question: "What is The Haka?",
      answer: [
        "Cake",
        "Dance",
        "Musical instrument",
        "Fruit"
      ],
      correct: 1
    }, {
      question: "Which of the following fruits is banned in most hotels and transit rides?",
      answer: [
        "Rambutan",
        "Mangosteen",
        "Durian",
        "Lychee"
      ],
      correct: 2
    }, {
      question: "Which of the following religion believes that the color Red symbolises good foutune and wealth?",
      answer: [
        "Chinese",
        "Hawaiian",
        "Muslim",
        "Indian"
      ],
      correct: 0
    }, {
      question: "Which is the biggest city in Africa?",
      answer: [
        "Johannesburg",
        "Nairobi",
        "Lagos",
        "Casablanca"
      ],
      correct: 2
    }
    ],

quizHeart : null,
question : null,
answer : null, // HTML answers wrapper
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
      if (quiz.now < quiz.quiz.length) {quiz.draw(); }
      else {
        quiz.question.innerHTML = `Out of ${quiz.quiz.length} you answered ${quiz.score} correctly.`;
        quiz.answer.innerHTML = "";
      }
    }, 20);
    
},

};
window.addEventListener("load", quiz.init);












