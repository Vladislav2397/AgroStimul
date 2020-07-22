var pos = 0;
var step = 270;

var strStart = "translateX(-";
var strEnd = "px)";

var items = document.getElementsByClassName("carousel-item");

var carouselSlide = function(move) {
    if (move === "left" && pos >= step)
        pos -= step;
    else if (move == "right" && pos <= step * 2)
        pos += step;
    for (var i = 0; i < items.length; i++) {
        items[i].style.transform = strStart + pos + strEnd;
    }
}