// function for moving ninjaman and pumpkins in world
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
    // account for eating sushi
    if(world[ninjaDict.y][ninjaDict.x] == 2) {
        score += 10;
    }
    // account for eating onigiri
    if(world[ninjaDict.y][ninjaDict.x] == 3) {
        score += 5;
    }
    // "eat" the item and turn the space blank
    world[ninjaDict.y][ninjaDict.x] = 0;
    // randomly move pumpkins
    if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
        movePumpkin(moveArr, blueyDict);
        movePumpkin(moveArr, pinkyDict);
        movePumpkin(moveArr, pumpkyDict);
        movePumpkin(moveArr, redDict);
    }
    // losing a life when ninjaman collides with a pumpkin
    if(ninjaDict.y == blueyDict.y && ninjaDict.x == blueyDict.x) {
        lives--;
    }
    if(ninjaDict.y == pinkyDict.y && ninjaDict.x == pinkyDict.x) {
        lives--;
    }
    if(ninjaDict.y == pumpkyDict.y && ninjaDict.x == pumpkyDict.x) {
        lives--;
    }
    if(ninjaDict.y == redDict.y && ninjaDict.x == redDict.x) {
        lives--;
    }
    drawWorld();
    drawNinjaman();
    drawPumpkins();
    changeScore();
    changeLives();
}

// function for moving pumpkins
function movePumpkin(arr, dict) {
        var rand = Math.floor(Math.random() * Math.floor(4));
        arr[rand](dict);
}

// array of movements for pumpkins
var moveArr = [
    // move right
    function right(pumpkinDict) {
        if(world[pumpkinDict.y][pumpkinDict.x + 1] != 1) {
            pumpkinDict.x++;
            return pumpkinDict;
        }
    },
    // move left
    function left(pumpkinDict) {
        if(world[pumpkinDict.y][pumpkinDict.x - 1] != 1) {
            pumpkinDict.x--;
            return pumpkinDict;
        }
    },
    // move down
    function down(pumpkinDict) {
        if(world[pumpkinDict.y + 1][pumpkinDict.x] != 1) {
            pumpkinDict.y++;
            return pumpkinDict;
        }
    },
    // move up
    function up(pumpkinDict) {
        if(world[pumpkinDict.y - 1][pumpkinDict.x] != 1) {
            pumpkinDict.y--;
            return pumpkinDict;
        }
    }
];