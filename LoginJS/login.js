// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth,signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
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

const loggedInUserId = localStorage.getItem('loggedInUserId');
if (loggedInUserId) {
  window.location.replace("profile.html")
}

document.getElementById("submit-login-btn").addEventListener("click",(event) => {
  event.preventDefault();
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    const user = userCredential.user;
    localStorage.setItem('loggedInUserId',user.uid)
    location.replace('profile.html')
  }).catch((error) => {
    if(error.code=='auth/invalid-credential'){
      alert("Invalid email or password :)")
    } else {
      alert("That account does not exist")
    }
  })
})