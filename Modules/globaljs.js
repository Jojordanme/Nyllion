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
let app;
let db;
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
} catch (error) {
  console.error('Firebase initialization error:', error);
  window.location.replace("errorpage.html?error=database_connection");
}

const loggedInUserId = localStorage.getItem('loggedInUserId');

async function getData(userId) {
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const userData = docSnap.data()
  return userData
}
if (loggedInUserId){
  const userData = await getData(loggedInUserId)
  if (!userData.Settings){
    userData.Settings = {

      soundvolume:100,
      sfxvolume:100,
      darkMode: false,
      language: "en"
      
    }
  }
}