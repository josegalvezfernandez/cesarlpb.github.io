// Hide menu when scrolling
// 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-275px";
  }
  prevScrollpos = currentScrollPos;
}

    function triggerFunction() {
  document.getElementsByClassName('coming-soon')[0].innerText = "Coming Soon!";
    }
    function CSShere() {
  document.getElementsByClassName('coming-soon')[0].innerText = "CSS";
    }
    function triggerFunction1() {
  document.getElementsByClassName('coming-soon')[1].innerText = "Coming Soon!";
    }
    function JShere() {
  document.getElementsByClassName('coming-soon')[1].innerText = "JS";
    }
    function triggerFunction2() {
  document.getElementsByClassName('coming-soon')[2].innerText = "Coming Soon!";
    }
    function PHPhere() {
  document.getElementsByClassName('coming-soon')[2].innerText = "PHP";
    }