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
if (!localStorage.getItem("loggedInUserId")) {


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
        window.location.replace("notfound.html");
      } else {
        window.location.replace("ineligable.html");
      }
    });
  };

  handleLevelNavigation(15, lvl2btn);
  handleLevelNavigation(25, lvl3btn);
  if (userData.Settings.darkmode){
    document.getElementById('main-section').style = "background-color:rgb(30,30,50)!important"
document.getElementById('main-section').style = "color:white"    
  }

}

async function getData(userId) {
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const userData = docSnap.data()
  return {userData, docRef}
}

function lvl1() {

  window.location.replace("somePages/beginner/pathway.html");


}
async function lvl2() {
  if (!loggedInUserId) {
    window.location.replace("ineligable.html");
    return;
  }

  const {userData, docRef} = await getData(loggedInUserId);

  if (userData.level >= 10) {
    window.location.replace("notfound.html");
  } else {
    window.location.replace("ineligable.html");

  }

}
async function lvl3() {
  if (!loggedInUserId) {
    window.location.replace("ineligable.html");
    return;
  }
  const {userData, docRef} = await getData(loggedInUserId);

  if (userData.level >= 25) {
    window.location.replace("notfound.html");
  } else {
    window.location.replace("ineligable.html");

  }

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

document.getElementById("saveButtonSettings").addEventListener("click", async () => {
  if (localStorage.getItem('loggedInUserId')){
    const {userData, docRef}= await getData(localStorage.getItem('loggedInUserId'))

    if (userData && userData.Settings){
       console.log("saved")
      await updateDoc(docRef,{
        Settings:{
          soundvolume:100,
          sfxvolume:100,
          language: "en",
          darkMode: document.getElementById("darkmode").checked
        }
      })

    }
      document.location.href = "index.html"
  }
 

})

waitForElm('#beginner').then((elm) => {
    console.log('Element is ready');
    elm.addEventListener("click", lvl1)
});
waitForElm('#intermidiate').then((elm) => {
    console.log('Element is ready');
    elm.addEventListener("click", lvl2)
});
waitForElm('#advanced').then((elm) => {
    console.log('Element is ready');
    elm.addEventListener("click", lvl3)
});