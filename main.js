import './style.css'
var id = null;
var pos = 0;
var width = 50
document.querySelector("body").addEventListener("keypress", frame)
function frame(event) {
  var elem = document.getElementById("put_condom");
    width ++;
    elem.style.width = width + 'px';
}
