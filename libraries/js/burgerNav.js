var nav = document.getElementsByClassName('nav')[0];
var navLinks = document.getElementsByClassName('nav__link');
var navBtn = document.getElementsByClassName('burger')[0];
var isShow = true;

function toggleNav() {
    isShow = !isShow;

    if (isShow) {
        nav.style.transform = "translateX(100%)";
    } else {
        nav.style.transform = "translateX(0)";
    }
}