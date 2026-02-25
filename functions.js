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
let app;
let db;
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
  window.location.href = "errorpage.html?error=database_connection";
}





if (localStorage.getItem("loggedInUserId")) {



  const docRef = doc(db, "users", localStorage.getItem('loggedInUserId'));
  const docSnap = await getDoc(docRef)
  const userData = docSnap.data()
  if (userData && userData.Settings && userData.Settings.darkmode) {
    // document.getElementById('main-section').style = "background-color:rgb(30,30,50)!important;color:white!important"

  }
  if (document.getElementById("signInButton")) {
    document.getElementById("signInButton").innerHTML = "<a href='profile.html'>Profile</a>"

  }
}

async function getData(userId) {
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const userData = docSnap.data()
  return { userData, docRef }
}


function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });


    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}


var audio = new Audio('filesafter1211/click.wav')
audio.volume = 1

function updateBtnHovers() {
  let buttons = document.querySelectorAll("button")
  buttons.forEach(button => {
    button.addEventListener("mouseenter", async () => {
      var seperateaudio = new Audio('filesafter1211/hover.wav')
      seperateaudio.volume = 0.1
      seperateaudio.play()
      await new Promise(resolve => setTimeout(resolve, 400))

    })
  })
}



if (document.getElementById("settingsForm")) {
  if (localStorage.getItem("loggedInUserId")) {
    const docRef = doc(db, "users", localStorage.getItem('loggedInUserId'));
    const docSnap = await getDoc(docRef)
    const userData = docSnap.data()
    document.getElementById("darkmode").checked = userData.Settings.darkmode
    document.getElementById("settingsForm").addEventListener("submit", () => {

      updateDoc(docRef, {
        Settings: {
          darkmode: document.getElementById("darkmode").checked
        }
      })
    })
  } else {
    window.location.href = "profile.html"
  }

 
  

}

window.onload = async () => {
  if (window.location.href.includes("settings.html")) {

    if (localStorage.getItem("loggedInUserId")) {
      const userData = await getData(localStorage.getItem('loggedInUserId'));
      document.getElementById("darkmode").checked = userData.Settings.darkmode


    } else {
      window.location.href = "profile.html"
    }
  }
}

updateBtnHovers()

waitForElm('#quizTP').then((elm) => {
  updateBtnHovers()
  console.log('Element is ready');
  elm.addEventListener("click", async () => {
    audio.play()
    await new Promise(resolve => setTimeout(resolve, 200))
    window.location.href = "selection.html"

  })
});

waitForElm('#battleTP').then((elm) => {
  updateBtnHovers()
  console.log('Element is ready');
  elm.addEventListener("click", async () => {

  

    audio.play()
    await new Promise(resolve => setTimeout(resolve, 200))
    window.location.href = "levels.html"

  })
})