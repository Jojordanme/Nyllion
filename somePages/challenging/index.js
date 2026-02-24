import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  ,
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



document.addEventListener("DOMContentLoaded", async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  const loggedInUserId = localStorage.getItem('loggedInUserId');
  if (!loggedInUserId) {
    return
  }

  const docRef = doc(db, "users", loggedInUserId)
  const docSnap = await getDoc(docRef)
  const userData = docSnap.data()
  console.log(`ID:${userData.username} Level: ${userData.Level3}`)

  for (let i = 1; i <= 10; i++) {

    if (i-1 >= userData.Level3) {
      document.getElementById(`lvl${i}`).classList.add("locked")
      document.getElementById(`lvl${i}`).onclick = "window.location.replace('ineligable.html')"

    }

  }
})