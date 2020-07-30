var nav_links = document.getElementsByClassName("tabs__nav-link");
var content_panes = document.getElementsByClassName("tabs__content-pane");

var navSwitch = function(digit) {
    digit--;
    for (var i = 0; i < nav_links.length; i++) {
        nav_links[i].classList.remove("active");
        content_panes[i].classList.remove("show");
    }

    nav_links[digit].classList.add('active');
    content_panes[digit].classList.add("show");
}