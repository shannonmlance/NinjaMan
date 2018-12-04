// define ninjaman's coordinates
var ninjaDict = {
    x: 1,
    y: 1
}

// allow ninjaman to be placed in the world
function drawNinjaman() {
    document.getElementById("ninjaman").style.left = ninjaDict.x*40+"px";
    document.getElementById("ninjaman").style.top = ninjaDict.y*40+"px";
}

drawNinjaman();