import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, getDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKGaSBlKuGY3WTZXgA5TBuTD6FOXQDcGk",
  authDomain: "nyllion-2f95f.firebaseapp.com",
  databaseURL: "https://nyllion-2f95f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nyllion-2f95f",
  storageBucket: "nyllion-2f95f.appspot.com",
  messagingSenderId: "440220527602",
  appId: "1:440220527602:web:8ad8398b24bd72a65ad96b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

const loggedInUserId = localStorage.getItem('loggedInUserId');



const numbers = [
  "Nol", "Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh", "Sebelas",
  "Dua belas", "Tiga belas", "Empat belas", "Lima belas", "Enam belas", "Tujuh belas", "Delapan belas", "Sembilan belas", "Dua puluh"
]

const numberseng = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen", "Twenty"]
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000))

function englishNumbersWord(num) {
  return numberseng[num]
}
let readingPassage1=`In recent years, many schools have started replacing traditional textbooks with digital devices such as tablets and laptops. Supporters argue that digital learning tools make education more interactive and accessible. Students can watch educational videos, participate in online discussions, and access updated information instantly. In addition, digital materials reduce the need for printed books, which may help the environment.

  However, critics believe that excessive screen time can negatively affect students’ concentration and health. Some research suggests that reading from screens may reduce comprehension compared to reading printed texts. Furthermore, not all students have equal access to reliable internet connections or personal devices, which can widen the gap between privileged and underprivileged learners.

  Although digital education offers many advantages, experts suggest that a balanced approach—combining traditional and digital methods—may be the most effective solution.`
let readingPassage2= `In recent years, more teenagers have chosen to spend their free time indoors rather than outside. Many prefer playing online games, watching streaming platforms, or scrolling through social media. Technology allows them to connect with friends easily without leaving their homes. As a result, outdoor activities such as cycling, playing sports, or simply walking in the park have become less common.<br><br>

Some experts worry that this change in lifestyle may affect teenagers’ physical and mental health. A lack of physical activity can lead to health problems, while too much screen time may reduce face-to-face social skills. However, others argue that online activities also offer benefits. Teenagers can develop problem-solving skills through games, learn new information, and even build global friendships.<br><br>

Instead of completely limiting technology, many educators suggest encouraging balance. By managing screen time wisely and making space for outdoor activities, teenagers can enjoy the advantages of both worlds.`
const quizData = [
  {    
    reading: readingPassage1,
    question: "Based on the passage, which statement best describes the writer’s primary objective?",    
    a: "To argue that schools should completely eliminate printed textbooks",    
    d: "To present both the strengths and weaknesses of digital learning in education",    
    c: "To describe in detail how tablets and e-readers function",    
    b: "To blame students for depending too much on technology",    
    correct: "d",    
    explanation: `Teks membahas kelebihan seperti akses informasi cepat dan ramah lingkungan, serta kekurangan seperti gangguan konsentrasi dan kesenjangan akses.`,    
  },

  {    
    reading: readingPassage1,

    question: "According to the passage, how do digital materials contribute positively to environmental sustainability?",    
    a: "They automatically improve students’ academic performance",    
    b: "They minimize the consumption of paper resources",    
    c: "They significantly reduce the use of electricity in schools",    
    d: "They lower the overall cost of education systems",    
    correct: "b",    
    explanation: `Dalam paragraf pertama disebutkan bahwa materi digital mengurangi kebutuhan buku cetak, sehingga dapat membantu lingkungan.`,    
  },

  {
    reading: readingPassage1,

    question: "In the context of the passage, the phrase “widen the gap” is closest in meaning to ____.",    
    a: "increase the difference between groups",    
    b: "encourage stronger academic competition",    
    c: "promote collaboration among students",    
    d: "create equal opportunities for everyone",    
    correct: "a",    
    explanation: `Teks menjelaskan bahwa tidak semua siswa memiliki akses internet atau perangkat, sehingga perbedaan antara siswa mampu dan kurang mampu menjadi lebih besar.`,    
  },

  {    
    reading: readingPassage1,

    question: "Which of the following challenges related to digital learning is highlighted in the passage?",    
    a: "Students become less socially interactive in classrooms",    
    b: "Teachers struggle to maintain discipline during lessons",    
    d: "Students may have lower comprehension when reading from screens",    
    c: "Schools are forced to dramatically increase tuition fees",    
    correct: "d",    
    explanation: `Paragraf kedua menyebutkan penelitian yang menunjukkan bahwa membaca dari layar dapat mengurangi pemahaman dibandingkan teks cetak.`,    
  },

  {    
    reading: readingPassage1,

    question: "Why does the author recommend combining traditional and digital learning methods?",    
    a: "Because digital learning represents modern educational trends",    
    b: "Because printed books are considered outdated",    
    c: "Because each method offers its own distinct advantages",    
    d: "Because most students prefer printed textbooks",    
    correct: "c",    
    explanation: `Di akhir teks dijelaskan bahwa meskipun digital punya banyak keuntungan, pendekatan seimbang dianggap paling efektif karena memanfaatkan kelebihan keduanya.`,    
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

function setaquestionanumberthingy(idx) {
  const number = Math.floor(Math.random() * 11)
  const word = numbers[number]
  quizData[idx].question = "bahasa inggrisnya '" + word + "'"
  let word2 = englishNumbersWord(number)
  const random = Math.floor(Math.random() * 4) + 1
  quizData[idx].explanation = "bahasa inggrisnya '" + word + "' adalah '" + word2 + "'"
  if (random == 1) {
    quizData[idx].a = word2
    quizData[idx].b = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].b == quizData[idx].a) {
      quizData[idx].b = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].c = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].c == quizData[idx].a) {
      quizData[idx].c = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].d = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].d == quizData[idx].a) {
      quizData[idx].d = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].correct = "a"
  } else if (random == 2) {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 21)]

    quizData[idx].b = word2
    if (quizData[idx].a == quizData[idx].b) {
      quizData[idx].b = numberseng[Math.floor(Math.random() * 16)]
    }

    quizData[idx].c = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].c == quizData[idx].b) {
      quizData[idx].c = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].d = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].d == quizData[idx].b) {
      quizData[idx].d = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].correct = "b"
  } else if (random == 3) {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 21)]
    quizData[idx].b = numberseng[Math.floor(Math.random() * 21)]
    quizData[idx].c = word2
    if (quizData[idx].a == quizData[idx].c) {
      quizData[idx].a = numberseng[Math.floor(Math.random() * 16)]
    }
    if (quizData[idx].b == quizData[idx].c) {
      quizData[idx].b = numberseng[Math.floor(Math.random() * 16)]
    }

    quizData[idx].d = numberseng[Math.floor(Math.random() * 21)]
    if (quizData[idx].d == quizData[idx].c) {
      quizData[idx].d = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].correct = "c"
  } else {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 21)]

    quizData[idx].b = numberseng[Math.floor(Math.random() * 21)]
    quizData[idx].c = numberseng[Math.floor(Math.random() * 21)]
    quizData[idx].d = word2
    if (quizData[idx].a == quizData[idx].d) {
      quizData[idx].a = numberseng[Math.floor(Math.random() * 16)]
    }
    if (quizData[idx].b == quizData[idx].d) {
      quizData[idx].b = numberseng[Math.floor(Math.random() * 16)]
    }
    if (quizData[idx].c == quizData[idx].d) {
      quizData[idx].c = numberseng[Math.floor(Math.random() * 16)]
    }
    quizData[idx].correct = "d"
  }

}



let eligble = false
function loadQuiz() {
  deselectAnswers()
  if (questiontext) { questiontext.setAttribute("style", "color:white") }

  const currentQuize = quizData[currentQuiz]
  questiontext.innerText = currentQuize.question
  count.innerHTML = "Question " + (currentQuiz + 1) + "/" + quizData.length
  answers.forEach(answer => {
    answer.disabled = false;
  })
  let el = document.getElementById("reading-box")
  if (el){
    if (currentQuize.reading){
      if (el.classList.contains("hide")){
        el.classList.remove("hide")
      }
      document.getElementById("reading-text").innerHTML = currentQuize.reading
    } else {
      el.classList.add("hide")
      document.getElementById("reading-text").innerHTML = ""
    }
  }

  if (currentQuiz == quizData.length - 1) {
    count.style.color = "red"

  } else {
    count.style.color = "white"
  }
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
function getSelected() {
  let answer
  answers.forEach(answerd => {
    if (answerd.checked) {
      answer = answerd.id

    }
  })
  return answer
}

function deselectAnswers() {
  answers.forEach(answer => answer.checked = false)
}

loadQuiz()
var audio = new Audio("sfx/Click.mp3");
let ansuorOpt
submit.addEventListener("click", async () => {
  if (canActive) {

    if (phase == 0) {
      const answer = getSelected()
      ansuorOpt = answer

      if (answer) {
        answers.forEach(answer => {
          answer.disabled = true;
        })
        const labelOption = document.getElementById(answer + "_text")
        const correctOption = document.getElementById(quizData[currentQuiz].correct + "_text")
        phase = 1
        if (answer === quizData[currentQuiz].correct) {
          questiontext.innerHTML = "BENAR!"
          questiontext.setAttribute("style", "color:rgb(0,255,0)")
          labelOption.setAttribute("style", "color:rgb(0,255,0)")
          labelOption.innerText += " ✅"

          currentScore++
        } else {
          explanation.innerHTML = `<b><br>Explanasi: ${quizData[currentQuiz].explanation}</b>`
          labelOption.setAttribute("style", "color:rgb(255,0,0)")
          correctOption.setAttribute("style", "color:rgb(0,255,0)")
          labelOption.innerText += " ❌"

          questiontext.innerHTML = "SALAH!"
        }

        console.log(answer)
        submit.innerHTML = `<span class="button-pathway-shadow" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(29,149,219)!important">
        <b>Next</b>
      </span>`

      } else {
        alert("Pilih salah satu jawaban!")
      }
    } else {
      const answer = ansuorOpt
      const labelOption = document.getElementById(answer + "_text")
      const correctOption = document.getElementById(quizData[currentQuiz].correct + "_text")

      canActive = false
      phase = 0
      currentQuiz++
      if (currentQuiz < quizData.length) {
        labelOption.setAttribute("style", "color:white")
        correctOption.setAttribute("style", "color:white")

        loadQuiz()
      } else {


        if (currentScore <= Math.ceil(quizData.length / 1.25)) {
          agj.innerHTML = "Butuh Latihan Lagi..."
          quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="location.reload()">
      <span class="button-pathway-shadow"></span>
      <span class="button-pathway-edge" style="background-color:rgb(0,120,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(0,180,0)!important">
        <b>Retry</b>
      </span>
    </button></center>`
        } else if (currentScore >= Math.ceil(quizData.length / 1.25) && currentScore != quizData.length) {
          agj.innerHTML = "Bagus"
          quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="window.location.replace('${"pathway.html"}')">
      <span class="button-pathway-shadow" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(180,0,0)!important">
        <b>Back</b>
      </span>
    </button></center>`
        } else if (currentScore == quizData.length) {
          quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="location.replace('${"pathway.html"}')">
      <span class="button-pathway-shadow" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(180,0,0)!important">
        <b>Back</b>
      </span>
    </button></center>`
          agj.innerHTML = "Sangat Baik"
        }
        if (currentScore / quizData.length * 100 >= 80) {
          if (loggedInUserId) {
            ;

            const docRef = doc(db, "users", loggedInUserId)
            const docSnap = await getDoc(docRef)
            const userData = docSnap.data()
            if (userData.Level3 <= 2) {
              await updateDoc(docRef, {
                Level3: userData.Level3 + 1

              });
            }
          }
        }
        agj.innerHTML = agj.innerHTML + " " + Math.floor(currentScore / quizData.length * 100) + "%"
      }
    }
  }
})
window.onload = async () => {
  if (loggedInUserId) {


    const docRef = doc(db, "users", loggedInUserId)
    const docSnap = await getDoc(docRef)
    const userData = docSnap.data()
    if (userData.Level3 < 2) {
      window.location.replace("ineligable.html")
    }
  }
}

