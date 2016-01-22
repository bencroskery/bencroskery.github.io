"use strict";
// Fade in body.
setTimeout(function() {document.body.style.opacity = 1}, 0);
// Scale in all links.
var a = document.getElementsByTagName('a'), i = 0;
(function o() {
    if (i < a.length) {
        a[i++].style.transform = "scale(1)";
        setTimeout(o, 60);
    }
})();