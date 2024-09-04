let security = false
let music384 = new Audio('sfx/music.mp3');
music384.loop = true
document.addEventListener('visibilitychange', function() {
    if (security){
        if (document.hidden) {
            console.log('User opened another tab');
        } else {
            window.location.replace("ended.html")
        }
    }
    
});

document.body.onload = function(){
    music384.play()
    
}

