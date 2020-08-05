var nav_links = document.getElementsByClassName("tabs__link");
var content_panes = document.getElementsByClassName("tabs__pane");

for (var i = 0; i < nav_links.length; i++) {
    nav_links[i].setAttribute('onclick', `navSwitch(${i})`)
}

var navSwitch = function(digit) {
    for (var i = 0; i < nav_links.length; i++) {
        nav_links[i].classList.remove("tabs__link--active");
        content_panes[i].classList.remove("tabs__pane--show");
    }

    nav_links[digit].classList.add('tabs__link--active');
    content_panes[digit].classList.add("tabs__pane--show");
}