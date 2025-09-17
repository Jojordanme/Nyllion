import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, getDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { firebaseConfig } from "../firebase-config.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
  return {userData, docRef}
}
if (loggedInUserId){
  const {userData, docRef} = await getData(localStorage.getItem('loggedInUserId'))
  if (!userData.Settings){
    await updateDoc(docRef, {
      Settings:{
        soundvolume:100,
          sfxvolume:100,
          darkMode: false,
          language: "en"
      }

    });

  }
}