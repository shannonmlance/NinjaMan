// define pumpkins's coordinates
var blueyDict = {
    x: randStart(),
    y: randStart()
}

var pinkyDict = {
    x: randStart(),
    y: randStart()
}

var pumpkyDict = {
    x: randStart(),
    y: randStart()
}

var redDict = {
    x: randStart(),
    y: randStart()
}

// function for setting random starting coordinates
function randStart() {
    return Math.floor(Math.random() * Math.floor(13)) + 1;
}

// allow pumpkins to be placed in the world
function drawPumpkins() {
    document.getElementById("bluey").style.left = blueyDict.x*40+"px";
    document.getElementById("bluey").style.top = blueyDict.y*40+"px";
    document.getElementById("pinky").style.left = pinkyDict.x*40+"px";
    document.getElementById("pinky").style.top = pinkyDict.y*40+"px";
    document.getElementById("pumpky").style.left = pumpkyDict.x*40+"px";
    document.getElementById("pumpky").style.top = pumpkyDict.y*40+"px";
    document.getElementById("red").style.left = redDict.x*40+"px";
    document.getElementById("red").style.top = redDict.y*40+"px";
}

drawPumpkins();