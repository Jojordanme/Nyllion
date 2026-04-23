
const closeBtn = document.querySelector('.close-btn');
const navUl = document.querySelector('nav ul');


closeBtn.addEventListener('click', function() {
  navUl.classList.remove('active');
  var audio = new Audio('filesafter1211/click.wav')
  audio.volume = 2
  audio.play()
  
  menuBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});




const mainSections = document.getElementsByClassName("main")
function signin() {
  window.location.href = "login.html"
}

function getStarted() {
  console.log(mainSections.length)
  mainSections[0].style = "background-image:url('filesafter1211/whiteahh.png');background-size:cover;background-position:center;"
  mainSections[0].innerHTML = ""
  setTimeout(() => {
    mainSections[0].innerHTML = `<div style="position:relative!important;left:42.5%"><h1>Pilih Cara Belajar</h1><br><br><button class="button-82-pushable" style="position:relative!important;left:18.5%" role="button" id="quizTP">
      <span class="button-82-shadow"></span>
      <span class="button-82-edge" style="background-color:rgb(0,0,120)!important"></span>
      <span class="button-82-front text" style="background-color:rgb(0,0,180)!important">
        <span style="color:rgb(0,0,180)!important">A</span> Quiz <span style="color:rgb(0,0,180)!important">A</span>
      </span>
    </button><br>
    <br>
    <span><button class="button-82-pushable" style="position:relative!important;left:23%"  role="button" id="battleTP" >
      <span class="button-82-shadow"></span>
      <span class="button-82-edge" style="background-color:rgb(120,0,0)!important"></span>
      <span class="button-82-front text" style="background-color:rgb(180,0,0)!important">
        
        Battle
      </span>
    </button></span>
    
    <br>
    <br>
    </div>
    `


  }, 1000)





}

function teleport(htmlfile) {
  document.location.href = htmlfile
}



AOS.init({
  duration: 800, // Animation duration
  easing: 'ease-in-out', // Animation easing
  once: true // Whether animation should happen only once

});

