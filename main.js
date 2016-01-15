"use strict";

// Fade in body.
setTimeout(function() {document.body.style.opacity = 1}, 0);

// Scale in all links.
var a = document.getElementsByTagName('a');
var j = 0;
function op() {
    if (j < a.length) {
        a[j++].style.transform = "scale(1)";
        setTimeout(op, 60);
    }
}
setTimeout(op, 0);