let [seconds, minutes, hours] = [0, 0, 0];
let timerDisplay = document.getElementById("timer-display");
let startButton = document.getElementById("start");
let timer = null;

// Start button event listener
function stopwatch() {
    seconds++;
    if(seconds === 60) {
        mintues++;
        seconds = 0;
    } else if(minutes === 60) {
        hours++;
        minutes = 0;
    } 
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    if(minutes < 10 && minutes != 0) {
        minutes = "0" + minutes;
    }
    if(hours < 10 && hours != 0) {
        hours = "0" + hours;
    } 

    timerDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function watchStart() {
    if(timer != null) {
        clearInterval(timer); // Clear any existing timer to prevent multiple intervals
    }
    timer = setInterval(stopwatch, 1000); /*1000 miliseconds = 1 second */
}

function watchStop() {
    clearInterval(timer); // Stop the timer
}

function watchReset() {
    clearInterval(timer); // Stop the timer
    [seconds, minutes, hours] = [0, 0, 0]; // Reset the time variables
    timerDisplay.innerHTML = "00:00:00"; // Reset the display to 00:00:00
}