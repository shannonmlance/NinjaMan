// create score
var score = 0;

// update score
function changeScore() {
    if(lives >= 0) {
        document.getElementById("score").innerHTML = score;
    }
}

changeScore();