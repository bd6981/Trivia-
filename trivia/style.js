

//-----Button,Elements,EventListeners----\/
// const nextBtn = document.getElementById("next");
const restartBtn = document.getElementById("restart");
const submitBtn = document.getElementById("submit");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText= document.getElementById("question-text");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");

restartBtn.addEventListener("click",restart);
// nextBtn.addEventListener("click",next);
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
        question:"What does Lady Gaga affectionately call her fans?",
        answers:[
            {option:"Rawwweerrrs",answer:false},
            {option:"Little Monsters",answer:true},
        ]
    },
    {
        question:"Which blues song was the Rolling Stones named after?",
        answers:[
            {option:"Muddy Waters- Rollin Stone",answer:true},
            {option:"Bob Dylan- Like a Rolling Stone",answer:false},
        ]
    },  
    {
        question:"In 1970, which singer had a hit with his song “Piano Man”?",
        answers:[
            {option:"Billy Joel",answer:true},
            {option:"Elton John",answer:false},
        ]
    },
    {
        question:"What is the name of the singer who sings “Push it”??",
        answers:[
            {option:"Eazy-E",answer:false},
            {option:"Salt-N-Pepa",answer:true},
        ]
    },
    {
        question:"What is the name of a US Singer who was called a King of pop?",
        answers:[
            {option:"Michael Jackson", answer:true},
            {option:"Prince",answer:false},
        ]
    },  
    {
        question:" Who told us “I Wanna Dance with Somebody” in 1987?",
        answers:[
            {option:"Whitney Houston",answer:true},
            {option:"Tina Turner",answer:false},
        ]
    },
    {
        question:"In 1969, which legendary US festival was hosted and took place over the 350,000 fans??",
        answers:[
            {option:"Woodstock",answer:true},
            {option:"Lollapalooza",answer:false},
        ]
    },
    {
        question:"Which Rock Band Had A Number One Hit With “Don’t Stop Believin'” In 1981?",
        answers:[
            {option:"Earth, Wind, and Fire",answer:false},
            {option:"Journey",answer:true},
        ]
    },
    {
        question:"The first pop music video released is _?",
        answers:[
            {option:"In my feelings",answer:false},
            {option:"Bohemian Rhapsody",answer:true},
        ]
    },
    {
        question:"The last act at the Woodstock was done by _?",
        answers:[
            {option:"Janis Joplin",answer:false},
            {option:"Jimi Hendrix",answer:true},
        ]
    },
    {
        question:"What was the name of the singer who played the role of lead singer for the band “Queen”??",
        answers:[
            {option:"Freddie Mercury",answer:true},
            {option:"Ben Moody",answer:false},
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
            if(score < 14) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 14) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 14) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 14) {
            next();
        }
    }

 }
 
 beginGame();
//--------------------------------------------------------

//-------\/----------------RestartGame-----------------\/
function restart() {
    currentQuestion = 0;
    // nextBtn.classList.remove("hide");
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
    if(currentQuestion >= 14) {
       ;
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 14) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 14) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 14) {
                score++;
            }
 
        }
        userScore.innerHTML = score;
        if(currentQuestion < 14) {
            next();
        }
    }
  
}
//------------------------------------------------------------------

//-------------\/------Submit answers------\/
function submit() {
    // nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML = "Just remember, You're the rockstar!"
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