const quiz = [
    { question: "What is Erin's favorite color: turquoise or yellow?", answer: 'Turquoise' },
    { question: "What is Charlie's favorite food: kibble, chowsers, or din-din?", answer: 'Chowsers' },
    { question: "Is Cory's brother named Ryan?", answer: 'No' },
    { question: 'Does Colleen like cats?', answer: 'No' },
    { question: 'Does Wyatt play guitar or clarinet?', answer: 'Guitar' }
]
const questionLength = quiz.length;
const questionIndex = Math.floor(Math.random() * questionLength);
const answer = window.prompt(quiz[questionIndex].question);
window.alert('You answered ' + answer + '. The correct answer is ' + quiz[questionIndex].answer + '.');
