

//-----Button,Elements,EventListeners----\/
const nextBtn = document.getElementById("next");
const restartBtn = document.getElementById("restart");
const submitBtn = document.getElementById("submit");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText= document.getElementById("question-text");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");

restartBtn.addEventListener("click",restart);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);
//--------------------------------------------------

//---\/----trivia questions--------\/
let currentQuestion = 0;
let score = 0;

let questions = [
    {
        question:"What rock star moonlights as a horror movie writer and director?",
        answers:[
            {option:"Rob Zombie",answer:true},
            {option:"Ozzy Osbourne",answer:false},
        ]
    },
    {
        question:"Who was the first woman ever inducted into the Rock and Roll Hall of Fame??",
        answers:[
            {option:"Dolly Parton",answer:false},
            {option:"Aretha Franklin",answer:true},
        ]
    },
    {
        question:"Question: What does Lady Gaga affectionately call her fans?",
        answers:[
            {option:"Rawwweerrrs",answer:false},
            {option:"Little Monsters",answer:true},
        ]
    },
    {
        question:"Though made most famous by Ike and Tina Turner, Proud Mary was first recorded by whom?",
        answers:[
            {option:"Creedence Clearwater Revival",answer: true},
            {option:"Sting",answer:false},
        ]
    }]
//--------------------------------------------------------------

//--------\/-------------Let The Games Begin--------------------\/
function beginGame() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 5) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }

 }
 
 beginGame();
//--------------------------------------------------------

//-------\/----------------RestartGame-----------------\/
function restart() {
    currentQuestion = 0;
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginGame();
 } 
//------------------------------------------------------------

//--------\/--------Next Question Please--------------\/
function next() {
    currentQuestion++;
    if(currentQuestion >= 10) {
       ;
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 10) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
 
        }
        userScore.innerHTML = score;
        if(currentQuestion < 10) {
            next();
        }
    }
  
}
//------------------------------------------------------------------

//-------------\/------Submit answers------\/
function submit() {
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML = "Just remember, You're the rock start!"
 }
//------------------------------------------------------------------

//-------\/-------working on random shuffle below-----------------\/
//     shuffledQuestions = question.Sort(()  => Math.random() - .5)
//     currentQuestionIndex = 0
//     qContainer.classList.remove('hide')
//     setNextQuestion()
//    
// function showQuestion(question){
//     questionEl.innertext = question.question
//     question.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.innerText
//         button.classList.add('userAnswerBtn')
//         if (answer.correct) {
//             button.dataset.correct = answer.correct
//         }
//         answerContainer.addEventListener('click', answerButtons)
//         answerOptions.appendChild(button)
//        