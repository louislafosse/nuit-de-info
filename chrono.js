var milisec = 0;
var sec = 0;
var min = 0;
var T = document.getElementById("chrono")
function tick() {
    milisec++;
    if (milisec >= 1000) {
        milisec = 0;
        sec++;
    }   
    if (sec >= 60 ) {
        sec = 0
        min++ 
    }
    T.innerText = "0" + sec + ":" + milisec;
}
setInterval(tick, 1)

