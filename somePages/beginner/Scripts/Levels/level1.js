const numbers = [
  "Nol","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas",
  "Dua belas","Tiga belas","Empat belas","Lima belas","Enam belas","Tujuh belas","Delapan belas","Sembilan belas","Dua puluh"
]

const numberseng = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven", "Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"]
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000))

function englishNumbersWord(num){
  return numberseng[num]
}

const quizData = [
{
    question: "Bahasa Inggrisnya 'Apel'",
    a: "Apple",
  b: "Orange",
    c: "Banana",
  d: "Nanas",
  correct:"a",
  explanation:"'Apel' dalam bahasa Inggris merupakan 'Apple'.",
},
  {
    question: "Bahasa Inggrisnya 'Aku'",
      a: "You",
      b: "We",
      c: "Me",
      d: "Us",
      correct: "c",
    explanation:"'Aku' dalam bahasa Inggris merupakan 'Me'",
  },
  {
      question: `Bahasa Inggrisnya`,
      a: "One",
      b: "Two",
      c: "Three",
      d: "Five",
      correct: "a",
    explanation:"'Satu' dalam bahasa Inggris adalah 'One'",
  },
  {
      question: "Bahasa Inggrisnya 'Tujuh'",
      a: "Four",
      b: "Six",
      c: "Nine",
      d: "Seven",
      correct: "d",
    explanation:"'Tujuh' dalam bahasa Inggris merupakan 'Seven'",
  },
  {
      question: "Bahasa Inggrisnya 'Bisa'",
      a: "Will",
      b: "Can",
      c: "Never",
      d: "Do",
      correct: "b",
    explanation:"Bahasa Inggris dari 'Bisa' adalah 'can' atau 'could'",
  },
  {
      question: "Bahasa Inggrisnya 'Iya' ",
      a: "No",
      b: "Never",
      c: "Yes",
      d: "Yet",
      correct: "c",
    explanation:"Bahasa Inggris dari 'iya' adalah 'yes'",
  },
  {
      question: "Bahasa Inggrisnya 'Mereka'",
      a: "Me",
      b: "Them",
      c: "You",
      d: "Us",
      correct: "b",
    explanation:"Bahasa Inggris dari 'Mereka' adalah 'Them'",
  },
   {
      question: "Bahasa Inggrisnya 'Kita'",
      a: "Them",
      b: "Me",
      c: "You",
      d: "We",
      correct: "d",
     explanation:"Bahasa Inggris dari 'Kita' adalah 'We' atau 'Us'",
  },

  {
      question: "Bahasa Inggrisnya 'Malam'",
      a: "Evening",
      b: "Afternoon",
      c: "Night",
      d: "Noon",
      correct: "c",
    explanation:"'Evening' arti setelah sore. 'Afternoon' arti dalam waktu sore. 'Night'arti malam. 'Noon' arti siang ",
  },
  {
      question: "Bahasa Inggrisnya 'Penghapus'",
      a: "Paper",
      b: "Book",
      c: "Pencil",
      d: "Eraser",
      correct: "d",
    explanation:"Penghapus merupakan arti 'Eraser'",
  },
];
const quizData2 = []
let canActive = true
const agj = document.getElementById("yourgoodness")
const count = document.getElementById("counter")
const questiontext = document.getElementById("question")
const opt1 = document.getElementById("a_text")
const opt2 = document.getElementById("b_text")
const opt3 = document.getElementById("c_text")
const opt4 = document.getElementById("d_text")
const submit = document.getElementById("subm")
const quiz = document.getElementById("quiz")
const answers = document.querySelectorAll(".answer")
const explanation = document.getElementById("explanation")

let currentScore = 0
let currentQuiz = 0
let phase = 0

function setaquestionanumberthingy(idx){
    const number = Math.floor(Math.random() * 11) 
  const word = numbers[number]
  quizData[idx].question = "bahasa inggrisnya '" + word + "'"
  let word2 = englishNumbersWord(number)
  const random = Math.floor(Math.random() * 4) + 1
  quizData[idx].explanation = "bahasa inggrisnya '" + word + "' adalah '" + word2 + "'"
  if (random == 1){
    quizData[idx].a = word2
  quizData[idx].b = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].b == quizData[idx].a){
      quizData[idx].b = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].c = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].c == quizData[idx].a){
      quizData[idx].c = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].d = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].d == quizData[idx].a){
      quizData[idx].d = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].correct = "a"
  } else if (random == 2) {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 21)]
    
    quizData[idx].b = word2
    if (quizData[idx].a == quizData[idx].b){
      quizData[idx].b = numberseng[Math.floor(Math.random() * 16)]
    }
    
    quizData[idx].c = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].c == quizData[idx].b){
      quizData[idx].c = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].d = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].d == quizData[idx].b){
      quizData[idx].d = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].correct = "b"
  } else if (random == 3) {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 21)]
    quizData[idx].b = numberseng[Math.floor(Math.random() * 21)]
    quizData[idx].c = word2
    if (quizData[idx].a == quizData[idx].c){
      quizData[idx].a = numberseng[Math.floor(Math.random() * 16)]
    }
    if (quizData[idx].b == quizData[idx].c){
      quizData[idx].b = numberseng[Math.floor(Math.random() * 16)]
    }
    
    quizData[idx].d = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].d == quizData[idx].c){
      quizData[idx].d = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].correct = "c"
  } else {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 21)]
    
    quizData[idx].b = numberseng[Math.floor(Math.random() * 21)]
    quizData[idx].c = numberseng[Math.floor(Math.random() * 21)]
    quizData[idx].d = word2
    if (quizData[idx].a == quizData[idx].d){
      quizData[idx].a = numberseng[Math.floor(Math.random() * 16)]
    }
    if (quizData[idx].b == quizData[idx].d){
      quizData[idx].b = numberseng[Math.floor(Math.random() * 16)]
    }
    if (quizData[idx].c == quizData[idx].d){
      quizData[idx].c = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].correct = "d"
  }
  
}


setaquestionanumberthingy(2) // question number 3
setaquestionanumberthingy(3) // question number 4
setaquestionanumberthingy(8) // question number 9

function loadQuiz(){
  deselectAnswers()
  if (questiontext){questiontext.setAttribute("style","color:white")}
  
  const currentQuize = quizData[currentQuiz]
  count.innerHTML = "Question " + (currentQuiz + 1) + "/" + quizData.length
  if (currentQuiz == quizData.length - 1) {
    count.style.color = "red"
    
  } else {
    count.style.color = "white"
  }
  answers.forEach(answer => {
      answer.disabled = false;
    })
  questiontext.innerText = currentQuize.question
  opt1.innerText = currentQuize.a
  opt2.innerText = currentQuize.b
  opt3.innerText = currentQuize.c
  opt4.innerText = currentQuize.d
  explanation.innerHTML = ""
    submit.innerHTML = `<span class="button-pathway-shadow"></span>
      <span class="button-pathway-edge" style="background-color:rgb(0,120,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(0,180,0)!important">
        <b>Check</b>
      </span>`
  canActive = true
}

function getSelected(){
  let answer
  answers.forEach(answerd => {
    if(answerd.checked){
      answer = answerd.id
      
    }      
  })
  return answer
}

function deselectAnswers(){
  answers.forEach(answer => answer.checked = false)
}

loadQuiz()
var audio = new Audio("sfx/Click.mp3");
let ansuorOpt
submit.addEventListener("click",() => {
  if (canActive){
 
    if (phase == 0){
      const answer = getSelected()
      ansuorOpt = answer
    
  if(answer){
    answers.forEach(answer => {
      answer.disabled = true;
    })
    const labelOption = document.getElementById(answer+"_text")
    const correctOption = document.getElementById(quizData[currentQuiz].correct+"_text")
    phase = 1
    if(answer === quizData[currentQuiz].correct){
      questiontext.innerHTML = "BENAR!"
      questiontext.setAttribute("style","color:rgb(0,255,0)")
      labelOption.setAttribute("style","color:rgb(0,255,0)")
      labelOption.innerText += " ✅"
      
      currentScore++
    } else {
      explanation.innerHTML = `<b><br>Explanasi: ${quizData[currentQuiz].explanation}</b>`
      labelOption.setAttribute("style","color:rgb(255,0,0)")
      correctOption.setAttribute("style","color:rgb(0,255,0)")
      labelOption.innerText += " ❌"
      
      questiontext.innerHTML = "SALAH!"
    }
    
    console.log(answer)
    submit.innerHTML = `<span class="button-pathway-shadow" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(29,149,219)!important">
        <b>Next</b>
      </span>`
    
  }else{
    alert("Pilih salah satu jawaban!")
  }
    }else{
      const answer = ansuorOpt
      const labelOption = document.getElementById(answer+"_text")
    const correctOption = document.getElementById(quizData[currentQuiz].correct+"_text")
      
      canActive = false
      phase = 0
      currentQuiz++
    if(currentQuiz < quizData.length){
      labelOption.setAttribute("style","color:white")
      correctOption.setAttribute("style","color:white")

      loadQuiz()
    }else{
      
      
      if (currentScore < 6) {
        agj.innerHTML = "Butuh Latihan Lagi"
        quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="location.reload()">
      <span class="button-pathway-shadow"></span>
      <span class="button-pathway-edge" style="background-color:rgb(0,120,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(0,180,0)!important">
        <b>Retry</b>
      </span>
    </button></center>`
      } else if (currentScore >= 6 && currentScore < 10){
        agj.innerHTML = "Bagus"
        quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="window.location.replace('${"pathway.html"}')">
      <span class="button-pathway-shadow" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(180,0,0)!important">
        <b>Back</b>
      </span>
    </button></center>`
      } else if (currentScore == 10){
        count.innerHTML="Thats all folks"
        quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="location.replace('${"pathway.html"}')">
      <span class="button-pathway-shadow" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(180,0,0)!important">
        <b>Back</b>
      </span>
    </button></center>`
        agj.innerHTML = "Sangat Baik A+"
      }
      agj.innerHTML = agj.innerHTML + " " + Math.floor(currentScore/quizData.length*100) + "%"

    }
  }
}})