var sec = 40;
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
        document.getElementById("opaque").style.display = "block"
        document.getElementById("lost").style.display = "block";
        bl.style.visibility = "hidden" 
        clearInterval(chrono)
        clearInterval(blinking)
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

