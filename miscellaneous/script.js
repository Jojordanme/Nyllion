const audio = new Audio("uhoh.mp3")
audio.volume = 1

setTimeout(() => {
  audio.play()
  setTimeout(() => {
    document.getElementById("ihuff").classList.remove("hide")
    setTimeout(() => {
      location.replace("../index.html")
    },7500)
  },500)
},900)