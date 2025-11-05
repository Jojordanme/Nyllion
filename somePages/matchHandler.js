import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, getDoc, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import possibleQuestions from "../Modules/questionBank.js";
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

let quizData = []
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
let idTrust
let currentScore = 0
let currentQuiz = 0
let phase = 0
let player = 1
let opponentPlayer = 2
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
function moreQuestions() {
  quizData.push(possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)])

}

for (let i = 0; i < 3; i++) {
  moreQuestions()
}

const test = document.getElementById("test")
function loadQuiz() {
  deselectAnswers()
  if (questiontext) { questiontext.setAttribute("style", "color:white") }
  moreQuestions()
  const currentQuize = quizData[currentQuiz]
  questiontext.innerText = currentQuize.question
  count.innerHTML = "Question " + (currentQuiz + 1)
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
    if (currentQuize.width) {
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
async function getMatchDoc(matchId) {
  const docRef = doc(db, "matches", matchId)
  const docSnap = await getDoc(docRef)

  return { docRef, docSnap }
}

let ansuorOpt
let audio = new Audio("sfx/Click.mp3");
submit.addEventListener("click", async () => {
  if (canActive) {
    const { matchDocRef, matchDocSnap } = getMatchDoc(idTrust)
    const matchData = matchDocSnap.data()
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
          
          await updateDoc(matchData, {
            ["point" + player]: currentScore + 1
          })
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
async function waitForValueAsync(myValue, targetValue, timeoutMs) {
  const start = Date.now();

  // Keep looping until target is reached or timeout
  while (true) {
    if (myValue === targetValue) {
      console.log("✅ Value reached:", targetValue);
      return true;
    }
    if (Date.now() - start >= timeoutMs) {
      console.log("⏰ Timeout reached!");
      return false;
    }

    // Wait a bit before checking again (to prevent CPU overload)
    await new Promise(resolve => setTimeout(resolve, 500));
  }
}
let mainInterval
function keepGoingUntilTimesUp(matchData) {
  if (matchData) {
    if (matchData["timerfromu1"] < 0 || matchData["timerfromu2"] < 0) {
      quiz.classList.add("hide")

      agj.innerHTML = "Waktu Habis"
      if (matchData["point" + player] < matchData["point" + opponentPlayer]) {
        agj.innerHTML = "Kalah"
      } else {
        agj.innerHTML = "Menang"
      }
    } else {
      setTimeout(() => {
        keepGoingUntilTimesUp(matchData)
      }, 200)
    }
  }

}


window.onload = async () => {
  quiz.classList.add("hide")

  if (loggedInUserId) {

    const docRef = doc(db, "users", loggedInUserId)
    const docSnap = await getDoc(docRef)
    const userData = docSnap.data()
    quiz.classList.add("hide")

    // Extract the part between "?=$&" and "|"
    const match = window.location.url.match(/\?=\$&([^|]+)/);
    idTrust = match[1];
    // If it matches, get the value


    if (match) {

      const { matchDocRef, matchDocSnap } = getMatchDoc(idTrust)
      const matchData = matchDocSnap.data()
      if (matchData.user2ID == loggedInUserId) {
        player = 2
        opponentPlayer = 1
      }
      agj.innerHTML = "Tunggu lawan"
      await updateDoc(matchDocRef, {
        ["point" + player]: 919394
      });
      const success = await waitForValueAsync(matchData.point1, 913943, 20000);
      const success2 = await waitForValueAsync(matchData.point2, 913943, 20000);

      if (success && success2) {

        await updateDoc(matchDocRef, {
          ["point" + player]: 0,
          ["timerfromu" + player]: 304,

        });
        mainInterval = setInterval(async () => {
          await updateDoc(matchDocRef, {

            ["timerfromu" + player]: 304,

          });
        }, 1000)
        mainInterval = setInterval(() => {
          updateDoc(matchDocRef, {

            ["timerfromu" + player]: matchData["timerfromu" + player] - 1,
          });
          document.getElementById("stopwatchplacement").innerHTML = matchData["timerfromu1"]
          if (matchData["timerfromu" + player] < 0 || matchData["timerfromu1"] < 0) {
            clearInterval(mainInterval)
          }

        }, 1000)
        keepGoingUntilTimesUp(matchData)
        quiz.classList.remove("hide")
        loadQuiz()
      } else {
        agj.innerHTML = "Lawan disconnect"
        if (matchDocSnap.exists()) {
          try {
            await deleteDoc(matchDocRef)

          } catch (Err) {
            console.log("deleting doc (WENT WRONG): " + Err)
          }

        }

      }


    } else {
      window.location.replace("../levels.html")
    }




  }
}