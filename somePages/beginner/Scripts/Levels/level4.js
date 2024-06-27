const numbers = [
  "Nol","Satu","Dua","Tiga","Empat","Lima","Enam","Tujuh","Delapan","Sembilan","Sepuluh","Sebelas",
  "Dua belas","Tiga belas","Empat belas","Lima belas","Enam belas","Tujuh belas","Delapan belas","Sembilan belas","Dua puluh","Dua puluh satu","Dua puluh dua","Dua puluh tiga","Dua puluh empat","Dua puluh lima","Dua puluh enam","Dua puluh tujuh","Dua puluh delapan","Dua puluh sembilan","Tiga puluh"
]

const numberseng = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven", "Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty","Twenty one","Twenty two","Twenty three","Twenty four","Twenty five","Twenty six","Twenty seven","Twenty eight","Twenty nine","Thirty"]
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000))

function englishNumbersWord(num){
  return numberseng[num]
}

const quizData = [
{
    question: "Bahasa Inggrisnya 'Apel'",
    
  correct:["apple"],
  explanation:"'Apel' dalam bahasa Inggris merupakan 'Apple'.",
},
  {
    question: "Bahasa Inggrisnya 'Tas'",
      
      correct: ["bag","backpack"],
    explanation:"'Tas' dalam bahasa Inggris adalah 'Bag'",
  },
  {
      question: `Bahasa Inggrisnya "Air"`,
      
      correct: ["water"],
    explanation:"'Air' dalam bahasa Inggris adalah 'Water'",
  },
  {
      question: "Bahasa Indonesianya 'Pencil'",
      
      correct:["pensil"],
    explanation:"'Pencil' dalam bahasa indonesia adalah 'Pensil'",
  },
  {
      question: "Bahasa Inggrisnya 'Malam'",
      
      correct: ["night"],
    explanation:"Bahasa Inggris dari 'Malam' adalah 'Night'",
  },

];
const quizData2 = []
let canActive = true
const agj = document.getElementById("yourgoodness")
const count = document.getElementById("counter")
const questiontext = document.getElementById("question")
const esay = document.getElementById("essay")
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
    const number = Math.floor(Math.random() * 31) 
  const word = numbers[number]
  quizData[idx].question = "bahasa inggrisnya '" + word + "'"
  let word2 = englishNumbersWord(number)
  const random = Math.floor(Math.random() * 4) + 1
  quizData[idx].explanation = "bahasa inggrisnya '" + word + "' adalah '" + word2 + "'"
  if (random == 1){
    quizData[idx].a = word2
  quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].b == quizData[idx].a){
      quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].c == quizData[idx].a){
      quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].d == quizData[idx].a){
      quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].correct = "a"
  } else if (random == 2) {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]
    
    quizData[idx].b = word2
    if (quizData[idx].a == quizData[idx].b){
      quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    }
    
    quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].c == quizData[idx].b){
      quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].d == quizData[idx].b){
      quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].correct = "b"
  } else if (random == 3) {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]
    quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    quizData[idx].c = word2
    if (quizData[idx].a == quizData[idx].c){
      quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]
    }
    if (quizData[idx].b == quizData[idx].c){
      quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    }
    
    quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].d == quizData[idx].c){
      quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].correct = "c"
  } else {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]
    
    quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    quizData[idx].d = word2
    if (quizData[idx].a == quizData[idx].d){
      quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]
    }
    if (quizData[idx].b == quizData[idx].d){
      quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    }
    if (quizData[idx].c == quizData[idx].d){
      quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].correct = "d"
  }
  
}

// 2,3



function loadQuiz(){
  deselectAnswers()
  if (questiontext){questiontext.setAttribute("style","color:white")}
  
  const currentQuize = quizData[currentQuiz]
  questiontext.innerText = currentQuize.question
  count.innerHTML = "Question " + (currentQuiz + 1) + "/" + quizData.length
  answers.forEach(answer => {
      answer.disabled = false;
    })
  if (currentQuiz == quizData.length - 1) {
    count.style.color = "red"
    
  } else {
    count.style.color = "white"
  }
  esay.value = ''
  if (currentQuize.a){
    esay.classList.add("hide")

    opt1.classList.remove("hide")
    opt2.classList.remove("hide")
    opt3.classList.remove("hide")
    opt4.classList.remove("hide")
    opt1.innerText = currentQuize.a
    opt2.innerText = currentQuize.b
    opt3.innerText = currentQuize.c
    opt4.innerText = currentQuize.d
  } else {
    esay.classList.remove("hide")

    opt1.classList.add("hide")
    opt2.classList.add("hide")
    opt3.classList.add("hide")
    opt4.classList.add("hide")

  }
 
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
let ansuorOpt
var audio = new Audio("sfx/Click.mp3");
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
      explanation.innerHTML = `<b>Explanasi: ${quizData[currentQuiz].explanation}</b>`
      labelOption.setAttribute("style","color:rgb(255,0,0)")
      correctOption.setAttribute("style","color:rgb(0,255,0)")
      labelOption.innerText += " ❌"
      
      questiontext.innerHTML = "SALAH!"
    }
    
    console.log(answer)
    submit.innerHTML = `<span class="button-pathway-shadow" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(29,149,319)!important">
        <b>Next</b>
      </span>`
    
  }else{
    const currentQuize = quizData[currentQuiz]
    if (!currentQuize.a){
      phase = 1

      const answerEssay = document.getElementById("essay").value
      if (currentQuize.correct.includes(answerEssay.toLowerCase())){
        currentScore++
        questiontext.innerHTML = "BENAR!"
        questiontext.setAttribute("style","color:rgb(0,255,0)")
        
      } else {
        questiontext.innerHTML = "SALAH!"

        explanation.innerHTML = `<b>Explanasi: ${quizData[currentQuiz].explanation}</b>`

      }
      submit.innerHTML = `<span class="button-pathway-shadow" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(29,149,319)!important">
        <b>Next</b>
      </span>`
    } else {
      alert("Pilih salah satu jawaban!")

    }
  }
    }else{
      const answer = ansuorOpt
      const labelOption = document.getElementById(answer+"_text")
    const correctOption = document.getElementById(quizData[currentQuiz].correct+"_text")
      
      canActive = false
      phase = 0
      currentQuiz++
    if(currentQuiz < quizData.length){
      if (quizData[currentQuiz - 1].a){
        labelOption.setAttribute("style","color:white")
        correctOption.setAttribute("style","color:white")
      }
     

      loadQuiz()
    }else{
      
      
      if (currentScore <= Math.round(quizData.length / 2)) {
        agj.innerHTML = "Butuh Latihan Lagi"
        quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="location.reload()">
      <span class="button-pathway-shadow"></span>
      <span class="button-pathway-edge" style="background-color:rgb(0,120,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(0,180,0)!important">
        <b>Retry</b>
      </span>
    </button></center>`
      } else if (currentScore >= Math.round(quizData.length / 2) && currentScore != quizData.length){
        agj.innerHTML = "Bagus"
        quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="window.location.replace('${"pathway.html"}')">
      <span class="button-pathway-shadow" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(180,0,0)!important">
        <b>Back</b>
      </span>
    </button></center>`
      } else if (currentScore == quizData.length){
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
    }
  }
}})