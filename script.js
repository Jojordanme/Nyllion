
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

  mainSections[0].innerHTML = ""
  setTimeout(() => {
    mainSections[0].innerHTML = `<center><h1>Pilih Tingkat Kesulitan</h1><br><br><button class="button-82-pushable" role="button" id="beginner">
      <span class="button-82-shadow"></span>
      <span class="button-82-edge" style="background-color:rgb(0,120,0)!important"></span>
      <span class="button-82-front text" style="background-color:rgb(0,180,0)!important">
        <span style="color:rgb(0,180,0)!important">A</span> Beginner <span style="color:rgb(0,180,0)!important">A</span>
      </span>
    </button><br>
    <br>
    <span><button class="button-82-pushable" role="button" id="intermidiate" >
      <span class="button-82-shadow"></span>
      <span class="button-82-edge" style="background-color:rgb(120,120,0)!important"></span>
      <span class="button-82-front text" style="background-color:rgb(180,180,0)!important">
        
        Intermidiate
      </span>
    </button></span>
    
    <br>
    <br>
    <button class="button-82-pushable" role="button" id="advanced">
      <span class="button-82-shadow"></span>
      <span class="button-82-edge" ></span>
      <span class="button-82-front text" >
        <span style="color:hsl(345deg 100% 47%)!important">A</span>
        Challenging <span style="color:hsl(345deg 100% 47%)!important">A</span>
      </span>
    </button></center>`


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

