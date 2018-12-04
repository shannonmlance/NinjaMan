// create lives
var lives = 3;

// update lives
function changeLives() {
    if(lives >= 0) {
        document.getElementById("lives").innerHTML = lives;
    }
    else {
        document.getElementById("world").innerHTML = "<h1>Game Over</h1>";
        document.getElementById("ninjaman").style.display = "none";
        document.getElementById("bluey").style.display = "none";
        document.getElementById("pinky").style.display = "none";
        document.getElementById("pumpky").style.display = "none";
        document.getElementById("red").style.display = "none";
    }
}

changeLives();