
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, getDocs, getDoc, doc, updateDoc, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
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
let auth;
try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app)

} catch (error) {
  console.error('Firebase initialization error:', error);
  window.location.href = "errorpage.html?error=database_connection";
}

function generateUniqueId() {
  const timestamp = Date.now().toString(36); // Convert timestamp to base 36
  const randomPart = Math.random().toString(36).substring(2, 9); // Get a random string part
  return timestamp + randomPart;
}
function generateShortId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}
async function getData(userId) {
  const docRef = doc(db, "users", userId)
  const docSnap = await getDoc(docRef)
  const userData = docSnap.data()
  return { userData, docRef }
}
if (!localStorage.getItem('loggedInUserId')) {
  window.location.href = "login.html"
}
const waitingid = generateUniqueId()
async function foundANewMatch(docd, docRef) {
  document.getElementById("matchmakingText").innerHTML = "MATCH FOUND!"
  try {
    await updateDoc(docRef, {
      foundId: docd.data().startedId,
      soonToBeMatchId: docd.data().soonToBeMatchId,
    });
  } catch (error) {
    console.log("Error deleting document after found match:" + error)
  }
  setTimeout(async () => {
    let matchIsd = docd.data().soonToBeMatchId
    const newMatchDocRef = doc(db, "matches", matchIsd)
    const docSnap = await getDoc(newMatchDocRef)
    if (!docSnap.exists()) {
      let data = {
        matchId: matchIsd,
        point1: 0,
        point2: 0,
        user1ID: docd.data().startedId,
        user2ID: localStorage.getItem('loggedInUserId'),
        timerfromu1: 0,
        timerfromu2:0,
        
      }
      try {
        await setDoc(newMatchDocRef, data)
      } catch (error) {
        console.log("Error writing match document:" + error)
      }



    }
    setTimeout(async () => {
      const waitingDocSnap = await getDoc(docRef)
      if (waitingDocSnap.exists()) {
        try {
          await deleteDoc(docRef)
        } catch (error) {
          console.log("Error deleting waiting document:" + error)
        }
      }
      window.location.href = `somePages/match.html?=$&${matchIsd}|`
    }, 500)
  }, Math.random() * 1500)
}
async function matchmakingFunction() {
  const docRef = doc(db, "waiting", waitingid)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    try {

      await deleteDoc(docRef)
      document.getElementById("matchmakingText").innerHTML = "Press the button to begin matchmaking"
      document.getElementById("matchmaking").innerHTML = `<span class="button-82-shadow"></span>
        <span class="button-82-edge" style="background-color:rgb(0,120,0)!important"></span>
        <span class="button-82-front text" style="background-color:rgb(0,180,0)!important">
          <span style="color:rgb(0,180,0)!important">A</span> Begin Matchmaking <span style="color:rgb(0,180,0)!important">A</span>
        </span>`
    } catch (error) {
      console.log("Error deleting document:" + error)
    }

  } else {

    const data = {
      forwhat: "comps",
      foundId: "",
      startedId: localStorage.getItem('loggedInUserId'),
      waitingId: waitingid,
      soonToBeMatchId: generateShortId(),
    }

    setDoc(docRef, data).then(async () => {
      document.getElementById("matchmaking").innerHTML = `<span class="button-82-shadow"></span>
        <span class="button-82-edge" style="background-color:rgb(120,0,0)!important"></span>
        <span class="button-82-front text" style="background-color:rgb(180,0,0)!important">
          <span style="color:rgb(180,0,0)!important">AA</span> Stop Matchmaking <span style="color:rgb(180,0,0)!important">AA</span>
        </span>`
      document.getElementById("matchmakingText").innerHTML = "Waiting for match"
      let interval = setInterval(async () => {
        let collectionRef = collection(db, "waiting")
        let snapshot = await getDocs(collectionRef)
        for (let i = 0; i < snapshot.docs.length; i++) {
          let docd = snapshot.docs[i]
          if (docd.id != waitingid && docd.id != "test" && docd.data().forwhat == "comps") {
            console.log("found! ")

            foundANewMatch(docd, docRef)

            clearInterval(interval)

            break;


          }

        }
      }, 1000)
    }).catch(error => {
      console.log("Error writing document:" + error)
    })
  }

}
document.getElementById("matchmaking").addEventListener("click", matchmakingFunction)