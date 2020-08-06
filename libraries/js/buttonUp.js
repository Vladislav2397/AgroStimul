var btnUp = document.getElementsByClassName(".button_up")[0];

if (window.pageYOffset >= 2000) {
    btnUp.style.display = "block";
} else {
    btnUp.style.display = "none";
}

console.log(window.pageYOffset);