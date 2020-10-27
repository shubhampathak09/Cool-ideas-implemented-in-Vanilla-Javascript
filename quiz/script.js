const quizData=[
    {
        question: 'When is Indias Independence Day Celebrared?',
        a: '01 Aug,2020',
        b: '15 Aug,1947',
        c: '30 Jun,1770',
        d: '23 March,1992',
        correct: 'b'
    },
    {
        question: 'Which is most used programming Language?',
        a: 'Javascript',
        b: 'Java',
        c: 'C',
        d: 'Python',
        correct: 'a'
    },
    {
        question: 'Who is prime minster of India?',
        a: 'Narenda Modi',
        b: 'Rahul gandhi',
        c: 'Arnab Goswami',
        d: 'Shubham Pathak',
        correct: 'a'
    },
    {
        question : 'who designed c++?',
        a: 'Allan Turing',
        b: 'Robin Karp',
        c: 'Robert Martin',
        d: 'Bjarne Stratsroup',
        correct: 'd' 
    },
    {
        question: 'what is the full form of CSS?',
        a: 'cascading style ship',
        b: 'cascading style sheet',
        c: 'cascading style shop',
        d: 'cascading set store',
        correct: 'b'
    }
]

const submitBtn=document.getElementById("Btn");
const question_text=document.getElementById("question");

const answerElement=document.querySelectorAll(".answer");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");

const quiz=document.getElementById("quiz");

let currrentQuestionCount=0
let answer=undefined
let score=0;
loadQuiz();

function loadQuiz()
{
    deselect();
    const currentQuiz=quizData[currrentQuestionCount];
    question_text.innerHTML=currentQuiz.question;
    a_text.innerHTML=currentQuiz.a;

    b_text.innerHTML=currentQuiz.b;
    c_text.innerHTML=currentQuiz.c;
    d_text.innerHTML=currentQuiz.d;
    
}

function deselect()
{
answerElement.forEach((answerE1) =>{
    answerE1.checked=false;
});   
}

function getSelected()
{
    
    
    let answer=undefined;
    answerElement.forEach((answerE1) =>{
         if(answerE1.checked)
         {
             answer=answerE1.id;
              
         }

    });
    
    return answer;

}

submitBtn.addEventListener('click',() => {
    
     
    const answer=getSelected();
    console.log(answer);
    if(answer)
    {
     if(answer==quizData[currrentQuestionCount].correct)
     {
         score++;
     }   
     currrentQuestionCount++;
     if(currrentQuestionCount<quizData.length)
     {
     loadQuiz();
     }
     else{
         //show results function to display correct answers maybe a score too
   //      alert("Take a break, quiz is over");
        //deselect();
       // alert("You scored "+score);
      quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions</h2> <button
      onclick="location.reload()">
      reload</button>`
     }

    }

 
});