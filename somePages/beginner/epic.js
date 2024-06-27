document.addEventListener('visibilitychange', function() {
    // Check if the page is hidden
    if (document.hidden) {
        console.log('User opened another tab');
    } else {
        window.location.replace("ended.html")
    }
});

function teleport(file){
  console.log("am i winning?")
  window.location.replace(`${file}`)
}

