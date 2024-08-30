let security = false

document.addEventListener('visibilitychange', function() {
    if (security){
        if (document.hidden) {
            console.log('User opened another tab');
        } else {
            window.location.replace("ended.html")
        }
    }
    
});

