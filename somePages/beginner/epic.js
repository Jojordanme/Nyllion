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
stopwatch.innerHTML = "0:00"
placement.appendChild(stopwatch)
let num  = 0
let min = 0
stopwatch.innerHTML = "0"

let interval = setInterval(() => {
    if (stopwatch){
        num += 1
        if (num == 60){
            num = 0
            min += 1
        }
        if (num <= 9){
            stopwatch.innerHTML = min + ":0" + num
        } else {
            stopwatch.innerHTML = min + ":" + num
        }
        if (agj.innerHTML != ""){
            clearInterval(interval)
            setTimeout(() => {
                agj.innerHTML =`${agj.innerHTML}
                ${stopwatch.innerHTML}`
            },10)
        }
    }
},1000)


