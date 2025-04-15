import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

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


const lvl1btn = document.getElementById("beginner")
const lvl2btn = document.getElementById("intermidiate")
const lvl3btn = document.getElementById("advanced")

window.onload = async () => {
  const loggedInUserId = localStorage.getItem('loggedInUserId');
  if (!localStorage.getItem("loggedInUserId")) {
    document.getElementById("registerMessage").classList.remove("hide")
    lvl2btn.addEventListener("click", () => {
      console.log("yesyesyes")
      window.location.replace("ineligable.html")

    })
    lvl3btn.addEventListener("click", () => {
      console.log("yesyesyes")
      window.location.replace("ineligable.html")

    })
  } else {
    const docRef = doc(db, "users", loggedInUserId)
    const docSnap = await getDoc(docRef)
    const userData = docSnap.data()
    const handleLevelNavigation = (requiredLevel, btn) => {
      btn.addEventListener("click", () => {
        if (!loggedInUserId) {
          window.location.replace("ineligable.html");
          return;
        }
        if (userData.level >= requiredLevel) {
          window.location.replace("errorpage.html");
        } else {
          window.location.replace("ineligable.html");
        }
      });
    };
    
    handleLevelNavigation(10, lvl2btn);
    handleLevelNavigation(25, lvl3btn);
  }
 


  lvl1btn.addEventListener("click", () => {
    console.log("yesyesyes")
  window.location.replace("somePages/beginner/pathway.html")
  })
  

  

}