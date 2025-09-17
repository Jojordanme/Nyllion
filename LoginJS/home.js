import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, updateDoc, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth,onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { firebaseConfig } from "../firebase-config.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
        document.getElementById("title").innerHTML = userData.username + " - Nyllion"

        document.getElementById("greetings").innerHTML = "Hello, "+userData.username+"!"
        document.getElementById("yourEmail").innerHTML = "Email:  "+userData.email+"!"
        document.getElementById("nyllex").innerHTML = "Nyllex:  "+userData.nyllex+""
        document.getElementById("money").innerHTML = "$"+userData.money+""
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
      console.log(error)
    })
  }
 
})

