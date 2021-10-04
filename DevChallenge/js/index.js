

const advice = [
    "If you’re good at something, never do it for free.",
    "Do or do not. There is no try",
    "It’s what you do right now that makes a difference.",
    "Until you start believing in yourself, you ain't gonna have a life!",
    "Life does not stop and start at your convenience.",
    "You know what the trouble about real life is? There's no danger music."
]

// generate random light colors: 
// adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'})

var adviceEye = document.getElementById('adviceEye');
var btn = document.getElementById("adviceBtn");
var adviceDisplay = document.getElementById("adviceDisplay");

btn.addEventListener("click", () => {
    adviceEye.style.backgroundColor = randomcolor({luminosity: 'light'});
    adviceDisplay.textContent = advice[myRandom(0, advice.length)];
});

function randomcolor(obj) {
    let lowerBound;
    let upperBound;

    switch (obj.luminosity) {
        case 'light':
            lowerBound = 127;
            upperBound = 256;
            break;
        case 'dark':
            lowerBound = 0;
            upperBound = 128;
            break;
        default:
            lowerBound = 0;
            upperBound = 256;
    }

    /* Generating random colors */
    let red = myRandom(lowerBound, upperBound);
    let green = myRandom(lowerBound, upperBound);
    let blue = myRandom(lowerBound, upperBound);

    let rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgb;
}

// return a number beetween lowerBound and upperBound, without upperBound
function myRandom(lowerBound, upperBound) {
    let random;
    // number between 0 and 1, without 1
    random = Math.random() 
    // number beetween 0 and upperBound - lowerBound:
    random *= (upperBound - lowerBound);
    // number beetween lowerBound and upperBound, without upperBound
    random += lowerBound;
    // removing decimals
    random = Math.floor(random);
    return random;
}