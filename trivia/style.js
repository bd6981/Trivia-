
// Button,Elements,EventListeners
const startGameButton = document.getElementById('startGameBtn');
const nextButton = document.querySelector('nextButton')
const triviaQuestion = document.querySelector('triviaQuestion')
const qContainer = document.getElementById('questionContainer')
const answerOptions = document.getElementById('answerOptionBtn')
const userAnswerSelection = document.querySelector('userAnswerSelection') 
let randomQ, Qindex



function startGame() {
  startGameButton.classList.add('active');


function setTrueFalseClass(element) {
    clearStatusClass(element)
    if(correct) {
    element.classList.add('true')
    } else {
    element.classList.add('false')
    }

startGameButton.addEventListener('click', startTrivia) 
function startTrivia(){
    console.log('start')
    startGameButton.classList.add('hide')
    qContainer.classList.remove('hide')
    shuffleQ = questions.sort(() => Math.random() - .5)
    qIndex = 0
    setNextQuestion()
}
/// question

function showTheTriviaQuestion(){
    triviaQuestion.innertext = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.innerText
        button.classList.add('userAnswerBtn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        answerContainer.addEventListener('click', answerButtons)
        answerOptions.appendChild(button)
        })
}
function goToNextTriviaQuestion(){
    currentQ(shuffleQ[qIndex])

//The Trivia Questions and options
const questions = [
    {
        question: 'What rock star moonlights as a horror movie writer and director?',
        answers: [
            {text: 'Rob Zombie', correct: true},
            {text: 'Ozzy Osbourne', correct: false},
        ]
    },
    {
        question: 'Who was the first woman ever inducted into the Rock and Roll Hall of Fame??',
        answers: [
            {text: 'Dolly Parton', correct: false},
            {text: 'Aretha Franklin', correct: true},
        ]
    },
    {
        question: 'Question: What does Lady Gaga affectionately call her fans?',
        answers: [
            {text: 'Rawwweerrrs', correct: false},
            {text: 'Little Monsters', correct: true},
        ]
    },
    {
        question: 'Though made most famous by Ike and Tina Turner, "Proud Mary" was first recorded by whom?',
        answers: [
            {text: 'Creedence Clearwater Revival', correct: true},
            {text: 'Sting', correct: false},
        ]
    }]
}
