// This piece of code is not mine - but it's completely NOT NEEDED to pass the tests, it just serves to hide the navbar when scrolling.
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
  document.getElementsByClassName('coming-soon')[0].innerText = "Coming Soon!"
    }
