// Accordion 
function Topheader() {
  var x = document.getElementById("Topheader");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
function Catefunc1() {
  var x = document.getElementById("InnerCate1");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}

function Catefunc2() {
  var x = document.getElementById("InnerCate2");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
function Catefunc3() {
  var x = document.getElementById("InnerCate3");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
function Catefunc4() {
  var x = document.getElementById("InnerCate4");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
function Catefunc5() {
  var x = document.getElementById("InnerCate5");
  if (x.className.indexOf("j-show") == -1) {
    x.className += " j-show";
  } else {
    x.className = x.className.replace(" j-show", "");
  }
}
// Click on the "Jeans" link on page load to open the accordion for demo purposes
document.getElementById("Cate1").click();


// Open and close sidebar
function j_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function j_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

