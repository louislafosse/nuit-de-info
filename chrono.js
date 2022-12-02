var sec = 60;
var T = document.getElementById("tranche")
var bl = document.getElementById("consigne")
var blinking;
var chrono;

function tick() {
    if (sec > 0) {
        sec--
        T.innerText = sec
    }
    else {
        clearInterval(chrono)
        clearInterval(blinking)
        bl.style.visibility = "hidden" 
    }
}
chrono = setInterval(tick, 1000)

function blink() { 
    if (bl.style.visibility == "visible" )
        bl.style.visibility = "hidden" 
    else
        bl.style.visibility = "visible" 
}

var blinking = setInterval(blink,500); 

