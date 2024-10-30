import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, updateDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth,onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
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
const auth = getAuth(app);
const db = getFirestore(app);
onAuthStateChanged(auth, (user) =>{
  const loggedInUserId = localStorage.getItem('loggedInUserId');
  if(loggedInUserId){
    const docRef = doc(db,"users",loggedInUserId)
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()){
        const userData = docSnap.data()
        document.getElementById("greetings").innerHTML = "Hello, "+userData.username+"!"
        document.getElementById("yourEmail").innerHTML = "Email:  "+userData.email+"!"
        document.getElementById("nyllex").innerHTML = "Nyllex:  "+userData.nyllex+""
        document.getElementById("money").innerHTML = "Money:  "+userData.money+""
      } else {
        console.log("No document found matching id")
      }
    }).catch((error) => {
      console.log("Error Getting Document")
    })
  } else {
    location.replace("../login.html")
  }
})
/*
document.getElementById("real").addEventListener("click",async ()=>{
  const loggedInUserId = localStorage.getItem('loggedInUserId');
  const docRef = doc(db,"users",loggedInUserId)
  const docSnap = await getDoc(docRef)
  const userData = docSnap.data()
  await updateDoc(docRef, {
    money: userData.money + 1
    
  });
  document.getElementById("money").innerHTML = "Money:  "+userData.money+""
})
*/

document.getElementById("logout").addEventListener("click",()=>{
  if(confirm("Are you sure you want to logout?")){
    localStorage.removeItem("loggedInUserId")
    signOut(auth).then(()=>{
      location.replace("login.html")
    }).catch((error)=>{
      alert("Unable to logout")
    })
  }
 
})