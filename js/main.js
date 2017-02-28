"use strict";
// Fade in body.
setTimeout(function() {document.body.style.opacity = 1}, 0);
// Scale in all links.
var a = document.getElementsByClassName('flip'), i = 0;
(function o() {
    if (i < a.length) {
        a[i++].style.transform = "rotate3d(0,0,0,0deg)";
        setTimeout(o, 50);
    }
})();