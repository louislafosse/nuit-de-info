import './style.css'
var id = null;
var mousePosition;
var pos = 0;
var offset = [0,0];
var isUnpackaged = 0;
var width = 50;
var isDown = false;
var condoms = document.getElementsByClassName("package_condom")
var condom_parts = document.getElementsByClassName("condom");
var cucumber = document.getElementById("cucumber");
var condoms_width = 200; 
var cucumberPosition = {
  x: cucumber.getBoundingClientRect().left,
  y: cucumber.getBoundingClientRect().y,
}

function check_collision(element) {
  if (cucumber.getBoundingClientRect().x - element.getBoundingClientRect().x < 30 
  && Math.abs(cucumber.getBoundingClientRect().y - element.getBoundingClientRect().y) < 50)
    return 1;
  return 0;
}

document.querySelector("body").addEventListener("keypress", frame)

function frame(event) {
  var elem = document.getElementById("put_condom");
    width ++;
    elem.style.width = width + 'px';
}

Array.from(condoms).forEach(element => {
  element.addEventListener('click', () => {
    isUnpackaged = 1;
    element.style.backgroundImage = "url('unpackaged_condom.svg')";
    element.style.cursor = "url('pinch.cur'), pointer"
  })
})

Array.from(condoms).forEach(element => {
  element.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        element.offsetLeft - e.clientX,
        element.offsetTop - e.clientY
    ];
  }, true);
})

Array.from(condom_parts).forEach(part => {
  part.style.visibility = "hidden"
})

Array.from(condoms).forEach(element => {
  element.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (!isUnpackaged || !isDown)
      return;
    if (check_collision(element)) {
      Array.from(condom_parts).forEach(part => {
        part.style.visibility = "visible"
      })
      element.style.visibility = "hidden"
    }
    mousePosition = {
      x : event.clientX,
      y : event.clientY,
    };
    element.style.left = (mousePosition.x + offset[0]) + 'px';
    element.style.top  = (mousePosition.y + offset[1]) + 'px';
  }, true);
})

document.addEventListener('mouseup', function() {
  isDown = false;
}, true);
