var id = null;
var mousePosition;
var pos = 0;
var offset = [0,0];
var isUnpackaged = 0;
var width = 50;
var bl = document.getElementById("consigne")
var n_unnpacked = 0;
var isDown = false;
var keys = {
  "Control": false,
  " ": false
};
var condoms = document.getElementsByClassName("package_condom")
var condom_parts = document.getElementsByClassName("condom");
var cucumber = document.getElementById("cucumber");
var condoms_width = 0;
var start_width = 50;
var cucumberPosition = {
  x: cucumber.getBoundingClientRect().left,
  y: cucumber.getBoundingClientRect().y,
}

for (var i = 0; i < 5; i++, start_width += 270) {
  var package_condom = document.createElement("div")
  package_condom.classList.add("package_condom")
  package_condom.style.left = start_width + "px"
  document.getElementById("game").appendChild(package_condom)
}

function check_collision(element) {
  if (cucumber.getBoundingClientRect().x - element.getBoundingClientRect().x < 30 
  && Math.abs(cucumber.getBoundingClientRect().y - element.getBoundingClientRect().y) < 50)
    return 1;
  return 0;
}

function move_condom() {
  
  if (document.getElementById("unrollable").style.visibility != "visible")
    return
  if (195 + condoms_width > 500) {
    Array.from(condom_parts).forEach(part => {
      part.style.visibility = "hidden"
    })
    condoms_width = 0;
    document.getElementById("unrollable").style.width = 150 + 'px';
    document.getElementById("unroll").style.left = 195 + 'px';
    n_unnpacked++;
    if (n_unnpacked == 5) {
      document.getElementById("opaque").style.display = "block"
      document.getElementById("won").style.display = "block";
      bl.style.visibility = "hidden" 
      clearInterval(chrono)
      clearInterval(blinking)
    }
  }
  condoms_width += 10;
  document.getElementById("unrollable").style.width = 150 + condoms_width + 'px';
  document.getElementById("unroll").style.left = 195 + condoms_width + 'px';
}

document.addEventListener("keyup", function (e) {
  if (e.key == "Control" || e.key == " ")
    keys[e.key] = false;
})

document.addEventListener("keydown", function (e) {
  keys[e.key] = true;
  if (keys["Control"] && keys[" "]){
      move_condom()
  }
} , false);

Array.from(condoms).forEach(element => {
  element.addEventListener('click', () => {
    document.getElementById("consigne").innerText = "Pose l'emballage au bout de ton concombre"
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
      isUnpackaged = 0;
      document.getElementById("consigne").innerText = "Maintiens ctrl. pour PINCER votre emballage \n Appuie sur espace pour DEROULER ton emballage "
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

document.getElementById("won_b").onclick = () => {
  window.location.reload()
}

document.getElementById("lost_b").onclick = () => {
  window.location.reload()
}