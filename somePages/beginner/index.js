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



window.onload = async () => {
  const loggedInUserId = localStorage.getItem('loggedInUserId');
  if (!loggedInUserId) {
    return
  }
  
  const docRef = doc(db, "users", loggedInUserId)
  const docSnap = await getDoc(docRef)
  const userData = docSnap.data()
  document.querySelectorAll('.button-pathway-pushable').forEach(function(btn) {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      popup.classList.toggle("active");
    });

    // prevent popup clicks from closing it
    popup.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    // click outside to close
    document.addEventListener("click", () => {
      popup.classList.remove("active");
    });
  });
  for (let i = 1; i < 10; i++) {
    
   
    if (userData.level < i) {
      document.getElementById(`lvl${i}`).classList.add("locked")
      document.getElementById(`lvl${i}`).onclick = "window.location.replace('ineligable.html')"
      
    }

  }
}