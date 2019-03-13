/*global countdown, alert, console*/
var gameTime = document.getElementById("time"),
    gameScore = document.getElementById("score"),
    gameContainer = document.getElementById("game-container"),

    timeLeft = 1000,
    timerId = setInterval(countdown, 1),
    score = 0;

function getRandomColor() {
    "use strict";
    var letters = '0123456789ABCDEF',
        color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
} //Source: http://stackoverflow.com/a/1484514

function buildGame() {
    "use strict";
    gameContainer.innerHTML = "<div></div>";
    var colorBlock = "<div style=\"background: " + getRandomColor() + ";\" id=\"color-block\" class=\"color-block\" onclick=\"gameOver()\">",
        colorDiff = "</div><div style=\"background: " + getRandomColor() + ";\" id=\"color-diff\" class=\"color-diff\" onclick=\"getPoint()\"></div>",
        stopMark = 0;
    for (var x = 0; x <= 61 || gameContainer.childNodes.length === 63; x++) {
        var randomNo = Math.floor(Math.random() * (30 - 1));
        if (Math.floor(Math.random()) === randomNo && stopMark === 0) {
            gameContainer.innerHTML += colorDiff;
            stopMark = 1;
        } else if (gameContainer.childNodes.length === 62 && stopMark === 0) {
            gameContainer.innerHTML += colorDiff;

        }
        gameContainer.innerHTML += colorBlock;
    }
}

function gameOver() {
    "use strict";
    clearTimeout(timerId);
    gameContainer.innerHTML = "<br><br><div><b>Game Over!</b><br>Your Score: " + score + "</div><br>" +
        "<button onclick=\"window.location.reload()\" id=\"play-again\">Play Again</button>";
    gameTime.innerHTML = "";
    gameScore.innerHTML = "";
}

function getPoint() {
    "use strict";
    score += 1;
    timeLeft = 500;
    gameScore.innerHTML = "Score: " + score;
    buildGame();
}

function countdown() {
    "use strict";
    if (timeLeft === -1) {
        gameOver();
    } else {
        gameTime.innerHTML = "Time: " + timeLeft + " milliseconds";
        timeLeft--;
    }
}

buildGame();