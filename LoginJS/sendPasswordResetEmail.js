// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { firebaseConfig } from "../firebase-config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const email = document.getElementById("email")
const auth = getAuth(app)
const btn = document.getElementById("resetBtn")

btn.addEventListener("click", () => {
  if (email.value) {
    sendPasswordResetEmail(auth, email.value).then(() => {
      alert("Email sent")
    }).catch((error) => {
      alert("Invalid Email!")
    })
  }
})



