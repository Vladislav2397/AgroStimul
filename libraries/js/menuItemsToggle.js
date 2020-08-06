var menu = document.querySelector(".menu-catalog");
var menuBtn = document.querySelector(".menu-catalog__btn");
var navBtn = document.querySelector(".burger");

var isMenuItemShow = false;

menuBtn.setAttribute('onclick', 'menuItemsToggle()');


function menuItemsToggle() {
    isMenuItemShow = !isMenuItemShow;
    if (isMenuItemShow) {
        menu.style.transform = 'translateX(0)';
        navBtn.style.display = 'none';
    } else {
        menu.style.transform = 'translateX(-100%)';
        navBtn.style.display = 'flex';
    }
}