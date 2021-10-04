const container = document.querySelector('.container');
const squares = document.querySelectorAll('.item');
const score = document.getElementById('score');
const timeLeft = document.getElementById('time-left')
let points = 0;
let timeDuration = 10;
let time;
let interval, interval2;
let idRandom;

let level = {
    easy: {
        time: 1000
    },
    medium: {
        time: 700
    },
    hard: {
        time: 300
    }
}

function randomGuacamole() {
    squares.forEach(square => {
        square.classList.remove('mole')
    });

    let indexRandom = Math.floor(Math.random() * 9);
    let randomSquare = squares[indexRandom];
    randomSquare.classList.add('mole');
    idRandom = randomSquare.id;
}

function startGame() {
    interval = setInterval(randomGuacamole, level.hard.time);
    hitMole();
    chrono();
}

function hitMole() {
    squares.forEach(square => {
        square.addEventListener('click', () => {
            if(square.id == idRandom && time != 0){
                points ++;
                score.textContent = points;
                idRandom = null;
                square.classList.remove('mole');
            }

        });
    });
}

function chrono() {
    time = timeDuration;
    interval2 = setInterval(function() {
        time --;
        timeLeft.textContent = time;
        if(time == 0) {
            clearInterval(interval);
            clearInterval(interval2);
            alert('Game Over. Your score: ' + points)
            points = 0;
            score.innerText = points;
        }
    }, 1000);
}



