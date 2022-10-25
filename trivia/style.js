

// Button,Elements,EventListeners
const nextBtn = document.getElementById("next");
const restartBtn = document.getElementById("restart");
const submitBtn = document.getElementById("submit");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText= document.getElementById("question-text");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const prevBtn = document.getElementById("prev");


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
        question:"Though made most famous by Ike and Tina Turner, "Proud Mary" was first recorded by whom?",
        answers:[
            {option:"Creedence Clearwater Revival",answer: true},
            {option:"Sting",answer:false},
        ]
    }]
//--------------------------------------------------------------

restartBtn.addEventListener("click", restart);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);

//------------------------------------------------------------
function startGame() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHtml=questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer){
            if(score < 3) {
                score++;
            }
        }
            userScore.innerHTML = score;
            if(currentQuestion < 2) {
                next();
            }
    }

    falseBtn.innerHtml=questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer){
            if(score<3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion<2){
            next();
        }
    }
    prevBtn.classList.add("hide");
}
startGame();
//---------------------------------------------------------
function restart() {
    currentQuestion = 0;
    nextBtn.classList.remove("hide");
    prevBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    startGame();
 }  
//------------------------------------------------------------
 function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
 
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
    prevBtn.classList.remove("hide");
}
function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 3) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    nextBtn.classList.remove("hide");
 }

 function submit() {
    prevBtn.classList.add("hide");
    nextButton.classList.add("hide");
    submitButton.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Thanks for Playing Music Trivia!"
 } 

//     shuffledQuestions = question.Sort(()  => Math.random() - .5)
//     currentQuestionIndex = 0
//     qContainer.classList.remove('hide')
//     setNextQuestion()
//     }

//     function goToNextTriviaQuestion(){
//         showQuestion(shuffledQuestions[currentQuestionIndex])
            
// /// question

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
//         })
// }

//     clearStatusClass(element)
//         if(correct) {
//         element.classList.add('true')
//         } else {
//         element.classList.add('false')
//         }
    

// //The Trivia Questions and options
