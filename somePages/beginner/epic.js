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

let agj = document.getElementById("yourgoodness")
let placement = document.getElementById("stopwatchplacement")

let stopwatch = document.createElement("p")
stopwatch.id = "stopwatch"
placement.appendChild(stopwatch)
let num  = 0
stopwatch.innerHTML = "0"

let interval = setInterval(() => {
    if (stopwatch){
        num += 0.01
        stopwatch.innerHTML = (Math.round(num * 100) / 100).toFixed(2) +  "s" 
        if (agj.innerHTML != ""){
            clearInterval(interval)
            setTimeout(() => {
                agj.innerHTML =`${agj.innerHTML}
                ${stopwatch.innerHTML}`
            },100)
        }
    }
},10)


