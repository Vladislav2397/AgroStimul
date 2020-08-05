var nav = document.getElementsByTagName("nav")[0];
var buttonUp = document.getElementsByClassName("button-up")[0];
var sticky = nav.offsetTop + 30;

window.onscroll = function() {

    // Nav sticky
    if (window.pageYOffset >= sticky) {
        nav.classList.add("nav__fixed");
    } else {
        nav.classList.remove("nav__fixed");
    }

    // Button 'up'
    if (window.pageYOffset > 500) {
        buttonUp.style.display = "flex";
    } else {
        buttonUp.style.display = "none";
    }
}