var pos = 0;
var step = 270;

var strStart = "translateX(-";
var strEnd = "px)";

var items = document.getElementsByClassName("carousel__item");
var carousel = document.getElementsByClassName("carousel");

document.getElementsByClassName("btn__left")[0].setAttribute('onclick', 'carouselSlide("left")');
document.getElementsByClassName("btn__right")[0].setAttribute('onclick', 'carouselSlide("right")');

var carouselSlide = function(move) {

    var lenCarousel = carousel[0].offsetWidth;
    console.log(lenCarousel);
    var numOfStep = 0;
    if (lenCarousel == 270) {
        numOfStep = 4;
    } else if (lenCarousel == 270 * 2) {
        numOfStep = 3;
    } else {
        numOfStep = 2;
    }

    if (move === "left" && pos >= step)
        pos -= step;
    else if (move == "right" && pos <= step * numOfStep)
        pos += step;
    for (var i = 0; i < items.length; i++) {
        items[i].style.transform = strStart + pos + strEnd;
    }
}