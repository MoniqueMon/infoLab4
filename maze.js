var loser = false; 

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};