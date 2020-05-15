
var naviItemA = document.getElementById("naviA");
var naviItemH = document.getElementById("naviH");
var naviItemP = document.getElementById("naviP");
var naviItemC = document.getElementById("naviC");
var div1 = document.getElementById("div1");
var div2 = document.getElementById("div2");
var div3 = document.getElementById("div3");
var div4 = document.getElementById("div4");
var div1offset = div1.clientHeight / 2;
var div2offset = (div2.clientHeight / 2) + div2.offsetTop;
var div3offset = (div3.clientHeight / 2) + div3.offsetTop;
var div4offset = (div4.clientHeight / 2) + div4.offsetTop;


window.onscroll = function () { stickynav(), activeTab(); }
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function stickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    navbar.classList.remove("nonsticky");
  }
  else {
    navbar.classList.add("nonsticky");
    navbar.classList.remove("sticky");
  }
}

function activeTab() {
  if (window.pageYOffset < div1offset) {
    clearAllTab();
    naviItemH.style.color = "#e31b6d";
  }
  else if (window.pageYOffset < div2offset) {
    clearAllTab();
    naviItemA.style.color = "#e31b6d";
  }
  else if (window.pageYOffset < div3offset) {
    clearAllTab();
    naviItemP.style.color = "#e31b6d";
  }
  else if (window.pageYOffset < div4offset) {
    clearAllTab();
    naviItemC.style.color = "#e31b6d";
  }


  function clearAllTab() {
    naviItemA.style.color = "";
    naviItemH.style.color = "";
    naviItemP.style.color = "";
    naviItemC.style.color = "";
  }
}


window.addEventListener('orientationchange', function () {
  // After orientationchange, add a one-time resize event
  var afterOrientationChange = function () {
    var div1offset = div1.clientHeight / 2;
    var div2offset = (div2.clientHeight / 2) + div2.offsetTop;
    var div3offset = (div3.clientHeight / 2) + div3.offsetTop;
    var div4offset = (div4.clientHeight / 2) + div4.offsetTop;   // YOUR POST-ORIENTATION CODE HERE
    // Remove the resize event listener after it has executed
    window.removeEventListener('resize', afterOrientationChange);
  };
  window.addEventListener('resize', afterOrientationChange);
});

