// define types of spaces in world
var worldDict = {
    0: "blank",
    1: "wall",
    2: "sushi",
    3: "onigiri"
};

// create a randomized world
function randWorld() {
    var world = [];
    for(var i = 0; i < 15; i++) {
        world.push([]);
    }
    for(var i = 0; i < 15; i++) {
        world[0].push(1);
        world[14].push(1);
    }
    world[1].push(1);
    world[13].push(1);
    for(var i = 1; i < 14; i++) {
        world[1].push(2);
        world[13].push(2);
    }
    world[1].push(1);
    world[13].push(1);
    for(var row = 2; row < 13; row++) {
        world[row].push(1);
        world[row].push(2);
        for(var i = 2; i < 13; i++) {
            world[row].push(randInt(3));
        }
        world[row].push(2);
        world[row].push(1);
    }
    world[1][1] = 0;
    return world;
}

// function for getting a random space
function randInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
}

// turn the world into html
function drawWorld() {
    var output = "";
    for(var row = 0; row < world.length; row++) {
        output += "<div class='row'>";
        for(var block = 0; block < world[row].length; block++) {
            output += "<div class='"+worldDict[world[row][block]]+"'></div>";
        }
        output += "</div>";
    }
    document.getElementById("world").innerHTML = output;
}

var world = randWorld();
drawWorld();