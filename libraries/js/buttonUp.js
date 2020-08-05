var btnUp = document.getElementsByClassName(".button_up")[0];

if (window.pageYOffset >= 2000) {
    btnUp.style.display = "block";
}

console.log(window.pageYOffset);