 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, getDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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
const loggedInUserId = localStorage.getItem('loggedInUserId');



const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay * 1000))

function englishNumbersWord(num) {
  return numberseng[num]
}

const quizData = [
  {
    question: "John __ very good at his job",
    a: "is",
    b: "are",
    c: "were",
    d: "none of the above",
    correct: "a",
    explanation: "'Is' itu buat satu subjek. Walau 'are' itu buat dua atau lebih subjek. Kalau 'was' dan 'were' itu sama seperti 'is' dan 'are' tetapi buat masa lalu atau 'Past tense'",
  },
  {
    question: "She ___ fired at her job just a minute ago",
    a: "is",
    b: "are",
    c: "were",
    d: "was",
    correct: "d",
  explanation: "Ini adalah kalimat 'Past tense' jadi kita pakai 'was'. Ini past tense karena kita dapat konteks kalau ini terjadi di masa lalu",
  },
  {
    question: `Falco and Travies ___ the smart kids at school`,
    a: "is",
    b: "are",
    c: "were",
    d: "was",
    correct: "b",
    explanation: "'Is' itu buat satu subjek. Walau 'Are' itu buat dua atau lebih subjek. Kalau 'was' dan 'were' itu sama seperti 'is' dan 'are' tetapi buat masa lalu atau 'Past tense'",
  },
  {
    question: `They ____ eliminated in the laser tag game 3 minutes ago`,
    a: "is",
    b: "are",
    c: "were",
    d: "was",
    correct: "c",
  explanation: "Ini adalah kalimat 'Past tense' jadi kita pakai 'was'. Ini past tense karena kita dapat konteks kalau ini terjadi di masa lalu",
  },
  {
    question: "I ___ just about to take out the trash",
    a: "is",
    b: "are",
    c: "were",
    d: "was",
    correct: "d",
    explanation: "...",
  },
  {
    question: "Identifikasikan gambar tersebut!",
    image:'apple.png',
    a: "Pencil",
    b: "Strawberry",
    c: "Mango",
    d: "Apple",
    correct: "d",
    explanation: "Gambar tersebut merupakan apel, Apel merupakan arti dari bahasa inggris 'Apple'",
  },
  {
    question: "Damien is eating ___.",
    image: "damien1.png",
    a: "Soup",
    b: "Vegetables",
    c: "Fruits",
    d: "Candy",
    correct: "b",
    explanation: "Gambar tersebut mensimbolkan merupakan Damien memakan sayuran. ",
  },

  {
    question: `Thomas and Kate are watching at a _______`,
    image: "2ppl.jpg",
    a: "Park",
    b: "Café",
    c: "Theater",
    d: "Office",


    correct: "c",
    explanation: "Gambar ini menggambarkan suatu tempat bernama Seni Drama atau Drama dalam bahasa Inggris merupakan Threatre atau dalam bahasa Inggris bentuk dari Amerika Theater ",
  },
  {
    question: `Identifikasikan objek di gambar tersebut!`,
    image: "bag.jpg",
    a: "Purse",
    b: "Backpack",
    c: "Suitcase",
    d: "Briefcase",
    correct: "b",
    explanation: "Gambar tersebut merupakan Tas, Jenis tas ini merupakan arti dari bahasa inggris 'Backpack'",
  },
  {
    question: `Identifikasikan tempat di gambar tersebut!`,
    image: "verynormalmountain.png",
    width:400,
    a: "Island",
    b: "Mountain",
    c: "Cliff",
    d: "Volcano",
    correct: "d",
    explanation: "Gambar ini merupakan sebuah Gunung berapi yang diartikan dalam bahasa Inggris Volcano ",
  },
  {
    question: "Identifikasi objek di gambar tersebut!", 
    image:"Shoes.png",
    a: "Apple",
    b: "Shoes",
    c: "Sandals",
    d: "Flippers",
    correct: "b",
    explanation: "Gambar tersebut merupakan sepatu, Sepatu merupakan arti dari bahasa inggris 'shoes'",
  },
  {
    question: "Identifikasi objek di gambar tersebut!",
    image:"Pen.png",
    a: "Pencil",
    b: "Writer",
    c: "Pen",
    d: "Tape",
    correct: "c",
    explanation: "Gambar tersebut merupakan pena, Pena merupakan arti bahasa inggris 'Pen'",
  },

  {
    question: `Identifikasi objek di gambar tersebut!`,
    image: "table.png",
    a: "Chair",
    b: "Stand",
    c: "Table",
    d: "Drawer",


    correct: "c",
    explanation: "Gambar ini merupakan meja, Meja merupakan arti bahasa inggris 'Table' ",
  },
  {
    question: `Identifikasikan objek di dalam gelas tersebut!`,
    image: "water.png",
    a: "Water",
    b: "Lava",
    c: "White",
    d: "Soda",
    correct: "a",
    explanation: "Air merupakan arti dari bahasa inggris 'Water'",
  },
  {
    question: `Identifikasikan objek di gambar tersebut!`,
    image: "keys.png",

    a: "Kitchen",
    b: "Key",
    c: "Lock",
    d: "Water",
    correct: "b",
    explanation: "Gambar ini merupakan Kunci-kunci, Kunci merupakan arti bahasa inggris 'Key' ",
  },
  {
    question: `He ____ to the gym every morning.`,
    a: "Go",
    b: "Goes",
    c: "Gone",
    d: "Going",
    correct: "b",
    explanation: `Kata kerja "go" berubah menjadi "goes" jika digunakan dengan subjek orang ketiga (he, she, it).`,
  },
  {
    question: `Erika ____ to the store.`,
    a: "going",
    b: "go",
    c: "goes",
    d: "gone",
    correct: "c",
    explanation: `Dalam present simple tense, untuk subjek orang ketiga tunggal (he, she, it, *nama orang*), kita menambahkan "s" atau "es" pada kata kerja. Bentuk yang benar adalah "goes" untuk "Erika" (nama orang).`,
  },
  {
    question: `Choose the correct sentence:`,
    a: "Sylvi study English every day.",
    b: "Caetlin studies English every day.",
    c: "Nikki studying English every day.",
    d: "Cassie will studying English every day.",
    correct: "b",
    explanation: `Kata kerja "study" berubah menjadi "studies" jika digunakan dengan nama orang`,
  },
  {
    question: `Rayden ______ to the office by bus.`,
    a: "Travel",
    b: "Traveling",
    c: "Traveled",
    d: "Travels",
    correct: "d",
    explanation: `Untuk subjek orang ketiga (he, she, it), kita menambahkan "s" pada kata kerja. Bentuk yang benar adalah travels.`,
  },
  {
    question: "Which of the following sentences is in the negative form?",
    a: "Cynthia does not write emails every day.",
    b: "Stevie writes emails every day.",
    c: "Gibson is writing emails every day.",
    d: "Rusty write emails every day.",
    correct: "a",
    explanation: `Kata "does not" merupakan kata negatif karena "not" adalah bahasa inggris dari "tidak"`,
  },
  {
    question: "They always ______ home at 6 PM every day.",
    a: "arrive",
    b: "arrives",
    c: "arriving",
    d: "arrived",
    correct: "a",
    explanation: `Untuk subjek lebih dari satu (they), kata kerja tidak perlu ditambah "s". Bentuk yang benar adalah arrive.`,
  },
  {
    question: "Which of the following sentences is correct?",
    a: "Budi is wrote a book",
    b: "Braidy has reading the book.",
    c: "Nova reads books every day",
    d: "Merton will reading a book tomorrow.",
    correct: "c",
    explanation: "Penggunaan kata kerja yang baik dan benar adalah di pilihan c",
  },
  {
    question: "She always _____ a cup of tea in the morning.",
    a: "drink",
    b: "drinked",
    c: "drank",
    d: "drinks",
    correct: "d",
    explanation: `Untuk subjek orang ketiga (she), kita menambahkan "s" pada kata kerja. Bentuk yang benar adalah drinks.`,
  },
  {
    question: `Which of these correct negative form of this sentence: "Harper plays soccer on Sundays"`,
    a: "Harper doesn't play soccer on Sundays.",
    b: "Harper don't plays soccer on Sundays.",
    c: "Harper don't play soccer on Sundays.",
    d: "Harper not play soccer on Sundays.",
    correct: "a",
    explanation: `Kita mengunakan kata "doesn't" jika digunakan dengan nama orang`,
  },
  {
    question: "She _______ work on Saturdays.",
    a: "don't",
    b: "doesn't",
    c: "isn't",
    d: "aren't",
    correct: "b",
    explanation: `Bentuk negatif untuk subjek orang ketiga tunggal (she, he, it) adalah "doesn't," yang merupakan singkatan dari "does not."`,
  },
  {
    question: "Which of these sentences is the correct simple PAST tense? (go)",
    a: "Carina is going to the beach",
    b: "Carina are go to the beach",
    c: "Carina went to the beach",
    d: "Carina go to the beach",
    correct: "c",
    explanation: `Bentuk past tense (masa lalu) dari kata "go" adalah "went"`,
  },
  {
    question: "The post man ___ very busy delivering ",
    a: "was",
    b: "were",
    c: "is",
    d: "are",
    correct: "a",
  explanation: ``,
  },
  {
    question: "Which of these sentences is the correct simple PAST tense? (wake up)",
    a: "Carmen wake up at 7 AM",
    b: "Carmen woke up at 7 AM",
    c: "Carmen going to wake up at 7 AM",
    d: "Carmen waking up at 7 AM",
    correct: "b",
  explanation: `kata "wake up" di past tense (masa lalu) adalah "woke up"`,
  },
  {
    question: "I know! He is the one who was _____(play) the drums last night.",
    a: "playing",
    b: "player",
    c: "play",
    d: "played",
    correct: "a",
  explanation: ``,
  },
  {
    question: "Yesterday, I _______(go) to the park.",
    a: "go",
    b: "went",
    c: "going",
    d: "goes",
    correct: "b",
  explanation: `"Yesterday" menunjukkan waktu lampau, sehingga kata kerja harus menggunakan bentuk lampau (past tense). Kata kerja lampau dari "go" adalah "went".`,
  },
  {
    question: "They ___ (play) soccer last weekend.",
    a: "play",
    b: "were playing",
    c: "are playing",
    d: "played",
    correct: "d",
  explanation: `"Play" berubah menjadi "played" karena menunjukkan aksi yang selesai minggu lalu.`,
  },
  {
    question: "I ___ (eat) an apple this morning.",
    a: "eaten",
    b: "eat",
    c: "ate",
    d: "aten",
    correct: "c",
  explanation: `"Eat" berubah menjadi "ate" dalam bentuk past tense untuk kegiatan yang sudah selesai pagi ini.`,
  },
  {
    question: "We ___ (visit) the museum last year.",
    a: "visit",
    b: "visiting",
    c: "visited",
    d: "are visiting",
    correct: "c",
  explanation: `Bentuk lampau dari "visit" adalah "visited" karena menunjukkan aksi tahun lalu.`,
  },
  {
    question: "She ___ (study) hard for the test last night.",
    a: "studied",
    b: "study",
    c: "studying",
    d: "studing",
    correct: "a",
  explanation: `Kata kerja "study" ditambahkan "-ed" menjadi "studied" karena aksi selesai semalam.`,
  },
  {
    question: "I ___ (see) her at the mall two days ago.",
    a: "see",
    b: "saw",
    c: "seen",
    d: "seeing",
    correct: "b",
  explanation: `"See" berubah menjadi "saw" dalam bentuk verb 2.`,

  },
  {
    question: `Sylvi: "May I borrow your pen?" Manakah kalimat yang paling tepat untuk menjawab Sylvi?`,
    a: "Goodbye!",
    b: "Sure! here you go.",
    c: "No, here you go!",
    d: "Yes, I can't",
    correct: "b",
    explanation: "Pilihan tersebut salah karena pilihan tersebut merupakan grammar yang salah atau kurang tepat.",
  },
  {
    question: `Bennett: "How's the weather outside?" Manakah kalimat yang paling tepat untuk menjawab Bennett?`,
    a: "Its sunny.", 
    b: "Sure! My name is Adam",
    c: "What?",
    d: "Sure! here you go",
    correct: "a",
    explanation: "Kalimat tersebut tidak tepat untuk menjawab pertanyaan tersebut.",
  },
  {
    question: `Caetlin bertanya kepada Kenneth untuk meminjam pena: "May I borrow your pen?" Kalimat apa yang paling tepat untuk menjawab Adam?`,
    a: "Goodbye!",
    b: "Sure! here you go",
    c: "No, here you go!",
    d: "Yes, I can't",
    correct: "b",
    explanation: "",
  },
  {
      question: `Jason bertanya kepada anda untuk ke Supermarket: "Hey, when are we going to the supermarketv" Kalimat apa yang paling tepat untuk menjawab Jason?`,
    a: "I dont know",
    b: "Yesn't",
    c: "No, here you go!",
    d: `at ${Math.floor(Math.random * 5) + 1} PM we'll go to the supermarket`,
    correct: "d",
    explanation: "",
  },
  {
      question: `Bryan bertanya kepada anda untuk cemilan apa dia mau beli: "Hey, what snacks do you wanna buy?" Apakah kalimat yang paling tepat untuk menjawab Bruan?`,
    a: "I would like some chips please",
    b: "Fine Chips",
    c: "Who is that?",
    d: "I cant see him.",
    correct: "a",
    explanation: "",
  },
  {
      question: `Jordan bertanya kepada anda untuk menjawab pertanyaan dia tersebut: "What will you do in chinese new year?" Kalimat apa yang paling formal dan tepat untuk menjawab Jordan?`,
    a: "Me and my gang are going to the mall",
    b: "We gonna do this rn",
    c: "I am going to the mall",
    d: "What are you doing?",
    correct: "c",
    explanation: "Jawaban benar tersebut itu paling tepat dan formal untuk menjawab pertanyaan Jordan tersebut",
  },
  
];


const quizData2 = []
let canActive = true
const agj = document.getElementById("yourgoodness")
const count = document.getElementById("counter")
const questiontext = document.getElementById("question")
const esay = document.getElementById("essay")
let opt1 = document.getElementById("a_text")
let opt2 = document.getElementById("b_text")
let opt3 = document.getElementById("c_text")
let opt4 = document.getElementById("d_text")

const submit = document.getElementById("subm")
const quiz = document.getElementById("quiz")
let answers = document.querySelectorAll(".answer")
const explanation = document.getElementById("explanation")

let currentScore = 0
let currentQuiz = 0
let phase = 0

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}


function setaquestionanumberthingy(idx) {
  const number = Math.floor(Math.random() * 31)
  const word = numbers[number]
  quizData[idx].question = "bahasa inggrisnya '" + word + "'"
  let word2 = englishNumbersWord(number)
  const random = Math.floor(Math.random() * 4) + 1
  quizData[idx].explanation = "bahasa inggrisnya '" + word + "' adalah '" + word2 + "'"
  if (random == 1) {
    quizData[idx].a = word2
    quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].b == quizData[idx].a) {
      quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].c == quizData[idx].a) {
      quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].d == quizData[idx].a) {
      quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].correct = "a"
  } else if (random == 2) {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]

    quizData[idx].b = word2
    if (quizData[idx].a == quizData[idx].b) {
      quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    }

    quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].c == quizData[idx].b) {
      quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].d == quizData[idx].b) {
      quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].correct = "b"
  } else if (random == 3) {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]
    quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    quizData[idx].c = word2
    if (quizData[idx].a == quizData[idx].c) {
      quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]
    }
    if (quizData[idx].b == quizData[idx].c) {
      quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    }

    quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    if (quizData[idx].d == quizData[idx].c) {
      quizData[idx].d = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].correct = "c"
  } else {
    quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]

    quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    quizData[idx].d = word2
    if (quizData[idx].a == quizData[idx].d) {
      quizData[idx].a = numberseng[Math.floor(Math.random() * 31)]
    }
    if (quizData[idx].b == quizData[idx].d) {
      quizData[idx].b = numberseng[Math.floor(Math.random() * 31)]
    }
    if (quizData[idx].c == quizData[idx].d) {
      quizData[idx].c = numberseng[Math.floor(Math.random() * 31)]
    }
    quizData[idx].correct = "d"
  }

}


function deselectAnswers() {
  answers.forEach(answer => answer.checked = false)
}
// 2,3
shuffle(quizData)
const test = document.getElementById("test")
function loadQuiz() {
  deselectAnswers()
  if (questiontext) { questiontext.setAttribute("style", "color:white") }

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
  if (currentQuize.a) {
    test.innerHTML = `<ul>
        <li>
         <div class="radio">
           <input type="radio" name="answer" id="a" class="answer" checked>
          <label for="a" id="a_text" class="radio-label">Question</label>
         </div>

        </li>
        <li>
          <div class="radio">
            <input type="radio" name="answer" id="b" class="answer">
          <label for="b" id="b_text" class="radio-label">Question</label>
          </div>

        </li>
        <li>
          <div class="radio">
            <input type="radio" name="answer" id="c" class="answer">
          <label for="c" id="c_text" class="radio-label">Question</label>
          </div>

        </li>
        <li>
          <div class="radio">
            <input type="radio" name="answer" id="d" class="answer">
          <label for="d" id="d_text" class="radio-label">Question</label>
          </div>


        </li>
      </ul>`
    opt1 = document.getElementById("a_text")
    opt2 = document.getElementById("b_text")
    opt3 = document.getElementById("c_text")
    opt4 = document.getElementById("d_text")
    answers = document.querySelectorAll(".answer")
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
    console.log("no")
    esay.classList.remove("hide")

    opt1.classList.add("hide")
    opt2.classList.add("hide")
    opt3.classList.add("hide")
    opt4.classList.add("hide")
    test.innerHTML = ""

  }
  if (currentQuize.image) {
    document.getElementById("imageTag").classList.remove("hide")

    document.getElementById("imageTag").removeAttribute("src");
    document.getElementById("imageTag").src = "Scripts/Levels/Images/" + currentQuize.image
    if (currentQuize.width){
      document.getElementById("imageTag").width = currentQuize.width
    } else {
      document.getElementById("imageTag").width = 250
    }
  } else {
    document.getElementById("imageTag").classList.add("hide")
  }

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



function filterCharacter(inputString, characterToFilter) {
    return inputString.split(characterToFilter).join('');
}


loadQuiz()
let ansuorOpt
var audio = new Audio("sfx/Click.mp3");
submit.addEventListener("click", async () => {
  if (canActive) {
     const answer = getSelected()
    if (phase == 0) {
     
      ansuorOpt = answer
      if (answer) {
        answers.forEach(answerio => {
          answerio.disabled = true;
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
          explanation.innerHTML = `<b>Explanasi: ${quizData[currentQuiz].explanation}</b>`
          labelOption.setAttribute("style", "color:rgb(255,0,0)")
          correctOption.setAttribute("style", "color:rgb(0,255,0)")
          labelOption.innerText += " ❌"

          questiontext.innerHTML = "SALAH!"
        }

        console.log(answer)
        submit.innerHTML = `<span class="button-pathway-shadow" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-edge" style="background-color:rgb(18,81,119)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(29,149,319)!important">
        <b>Next</b>
      </span>`

      } else {
        const currentQuize = quizData[currentQuiz]
        if (!currentQuize.a) {
          phase = 1

          const answerEssay = document.getElementById("essay").value
          if (currentQuize.correct.includes(answerEssay.toLowerCase())) {
            currentScore++
            questiontext.innerHTML = "BENAR!"
            questiontext.setAttribute("style", "color:rgb(0,255,0)")

          } else {
            questiontext.innerHTML = "SALAH!"

            explanation.innerHTML = `<b><br>Explanasi: ${quizData[currentQuiz].explanation}</b>`

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
    } else {
  
      const labelOption = document.getElementById(answer + "_text")
      const correctOption = document.getElementById(quizData[currentQuiz].correct + "_text")

      canActive = false
      phase = 0
      currentQuiz++
      if (currentQuiz < quizData.length) {
        if (quizData[currentQuiz - 1].a) {
          labelOption.setAttribute("style", "color:white")
          correctOption.setAttribute("style", "color:white")
        }


        loadQuiz()
      } else {


if (currentScore <= Math.round(quizData.length / 2)) {
          agj.innerHTML = "Butuh Latihan Lagi..."
          quiz.innerHTML = `<h2>Anda menjawab ${currentScore}/${quizData.length} pertanyaan benar</h2>
      <center><button class="button-pathway-pushable" role="button"  onclick="location.reload()">
      <span class="button-pathway-shadow"></span>
      <span class="button-pathway-edge" style="background-color:rgb(0,120,0)!important"></span>
      <span class="button-pathway-front text" style="background-color:rgb(0,180,0)!important">
        <b>Retry</b>
      </span>
    </button></center>`
        } else if (currentScore >= Math.round(quizData.length / 2) && currentScore != quizData.length) {
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


            const docRef = doc(db, "users", loggedInUserId)
            const docSnap = await getDoc(docRef)
            const userData = docSnap.data()
            if (userData.level <= 9) {
              await updateDoc(docRef, {
                level: 10

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
    if (userData.level < 10) {
      window.location.replace("ineligable.html")
    }
  }
}