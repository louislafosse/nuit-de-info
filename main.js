import './style.css'
var id = null;
var pos = 0;
var width = 50;
var is_down = false;
var condoms = document.getElementsByClassName("package_condom")

document.querySelector("body").addEventListener("keypress", frame)

function frame(event) {
  var elem = document.getElementById("put_condom");
    width ++;
    elem.style.width = width + 'px';
}

Array.from(condoms).forEach(element => {
  element.addEventListener('click', () => {
    element.style.backgroundImage = "url('unpackaged_condom.svg')";
    element.style.cursor = "url('pinch.cur'), pointer"
  })  
})