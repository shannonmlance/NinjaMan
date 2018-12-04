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

// function for moving ninjaman in world
document.onkeydown = function(e) {
    // move right
    if(e.keyCode == 39) {
        if(world[ninjaDict.y][ninjaDict.x + 1] != 1) {
            ninjaDict.x++;
        }
    }
    // move left
    if(e.keyCode == 37) {
        if(world[ninjaDict.y][ninjaDict.x - 1] != 1) {
            ninjaDict.x--;
        }
    }
    // move down
    if(e.keyCode == 40) {
        if(world[ninjaDict.y + 1][ninjaDict.x] != 1) {
            ninjaDict.y++;
        }
    }
    // move up
    if(e.keyCode == 38) {
        if(world[ninjaDict.y - 1][ninjaDict.x] != 1) {
            ninjaDict.y--;
        }
    }
    if(world[ninjaDict.y][ninjaDict.x] == 2) {
        score += 10;
    }
    if(world[ninjaDict.y][ninjaDict.x] == 3) {
        score += 5;
    }
    world[ninjaDict.y][ninjaDict.x] = 0;
    changeScore();
    drawWorld();
    drawNinjaman();
}