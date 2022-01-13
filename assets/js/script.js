

function QuestionAnswer1 (question, answer) {
    this.question = question;
    this.answer = answer;
    this.getQuestion = function () {
        return this.getQuestion();
    }
}

const QuestionAnswer1a = new question ('What is the deepest ocean?')

console.log(QuestionAnswer1a.getQuestion());



