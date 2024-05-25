const lvl1btn = document.getElementById("beginner")
const lvl2btn = document.getElementById("intermidiate")
lvl1btn.addEventListener("click",() => {
  console.log("yesyesyes")
    window.location.replace("somePages/beginner/pathway.html")
})
lvl2btn.addEventListener("click",() => {
  console.log("yesyesyes")
    window.location.replace("somePages/intermidiate/pathway.html")
})

