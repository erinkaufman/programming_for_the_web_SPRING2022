let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = 'green';
let heading;
let statements = [
    { question: "What is Erin's favorite color: turquoise or yellow?", answer: 'turquoise' },
    { question: "What is Charlie's favorite food: kibble, chowsers, or din-din?", answer: 'chowsers' },
    { question: "Is Cory's brother named Ryan?", answer: 'no' },
    { question: "Is Colleen's favorite animal cats or dogs?", answer: 'dogs' },
    { question: 'Does Wyatt play guitar or clarinet?', answer: 'guitar' }
];
function next() {
    if (statements.length < 1) {
        alert('you won');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}
function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
    statements = statements.filter(statementObj => {
        return currentQuestion.answer !== statementObj.answer;
    });
    response = 'correct';
    responseColor = 'green';
    } else {
        response = 'oops';
        responseColor = 'red';
}
currentQuestion = next();
questionInput.value('');
if (currentQuestion) {
message = currentQuestion.question;
}
}
currentQuestion = next();
let message = currentQuestion.question;
function setup() {
    createCanvas(1000, 650);
    heading = createElement('h1', ['Quiz-a-rama!']);
    heading.position(100, 100);
    questionInput = createInput('');
    questionInput.size(300, 50);
    questionInput.position(100, 250);
    submitAnswerButton = createButton('submit answer');
    submitAnswerButton.size(200, 50);
    submitAnswerButton.mousePressed(checkQuestion);
    submitAnswerButton.position(100, 325);
}
function draw() {
    background("lavenderblush");
    fill('indigo');
    textSize(24);
    text(message, 100, 200);
    fill(responseColor);
    text(response, 100, 500);
}