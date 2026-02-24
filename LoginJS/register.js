// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
let tries = 0

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
let canPress = true

document.getElementById("submit-register-btn").addEventListener("click", async () => {
  if (!canPress) return;
  const email = document.querySelector(".email").value;
  const username = document.querySelector(".username").value;
  const password = document.querySelector(".password").value;
  const db = getFirestore(app);
  const auth = getAuth(app);
  auth.languangeCode = "en";
  canPress = false
  const res = await fetch('https://vector.profanity.dev', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: username }),
  })
  const data = await res.json()

  if (data.isProfanity) {
    
    if (tries < 3){
      alert("nope")
    }else if(tries == 3){
      alert("pick another one scumbag")
    } else if(tries == 4){
      alert("you know, this isnt allowed right?")
    } else if(tries == 5){
      alert("you are a bad person")
    } else if(tries ==6){
      alert(">:(")
    }
    tries++
  } else {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      const userData = {
        email: email,
        username: username,
        level:1,  
        nyllex: 0,
        money: 0,
        Settings:null
      }
      const docRef = doc(db, "users", user.uid)
      setDoc(docRef, userData).then(() => {
        alert("Account Created Succesfully!")
        location.replace("login.html")
      }).catch(error => {
        console.log("Error writing document:" + error)
      })

    }).catch(error => {
      if (error.code == 'auth/email-already-in-use') {
        alert("That email already exists")
      }
      else {
        console.log(error)
        alert("Unable to create account")
      }
    })

  }
  canPress = true


  




})