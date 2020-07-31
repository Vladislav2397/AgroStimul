var nav = document.getElementsByClassName('nav')[0];
var navLinks = document.getElementsByClassName('nav__link');
var navBtn = document.getElementsByClassName('burger')[0];

function toggleNav() {
    nav.style.transform = "translateX(0)";
    nav.classList.toggle("show");

    if (nav.classList.contains("show")) {
        nav.style.transform = "translateX(100%)";
    }
}