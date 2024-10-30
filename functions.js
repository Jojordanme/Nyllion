const lvl1btn = document.getElementById("beginner")
const lvl2btn = document.getElementById("intermidiate")
const lvl3btn = document.getElementById("advanced")

lvl1btn.addEventListener("click",() => {
  console.log("yesyesyes")
    window.location.replace("somePages/beginner/pathway.html")
})
lvl2btn.addEventListener("click",() => {
  console.log("yesyesyes")
    window.location.replace("errorpage.html")
})
lvl3btn.addEventListener("click",() => {
  console.log("yesyesyes")
    window.location.replace("errorpage.html")
})

window.onload = () => {
  if (!localStorage.getItem("loggedInUserId")){
    document.getElementById("registerMessage").classList.remove("hide")
  }
}