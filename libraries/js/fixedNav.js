var nav = document.getElementsByTagName("nav")[0];
var buttonUp = document.getElementById("button-up");
var sticky = nav.offsetTop;

window.onscroll = function() {

    // Nav sticky
    if (window.pageYOffset >= sticky) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }

    // Button 'up'
    if (window.pageYOffset > 500) {
        buttonUp.style.display = "block";
    } else {
        buttonUp.style.display = "none";
    }
}