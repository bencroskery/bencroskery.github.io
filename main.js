"use strict";

var icons = document.getElementsByClassName("icon");
var inter;
for (var i = 0; i < icons.length; i++) {
    icons[i].onmouseover = function() {
        var el = this;
        clearTimeout(inter);
        el.lastChild.style.display = "block";
        setTimeout(function() {el.lastChild.className = 'open'}, 10);

    };

    icons[i].onmouseout = function() {
        var el = this;
        inter = setTimeout(function() {
            el.lastChild.className = '';
            setTimeout(function() {el.lastChild.style.display = "none"}, 300)}, 50);
    };
}

var a = document.getElementsByTagName('a');
var j = 0;
function op() {
    if (j < a.length) {
        a[j++].style.transform = "scale(1)";
        setTimeout(op, 60);
    }
}
setTimeout(op, 0);