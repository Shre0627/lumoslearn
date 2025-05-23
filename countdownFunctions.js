let [seconds, minutes, hours] = [0, 0, 0];
let timerDisplay = document.getElementById("timer-display");
let startButton = document.getElementById("start");
let timer = null;

// Start button event listener
function stopwatch() {
    seconds++;
     if(minutes === 0 && hours === 0) {
        minutes = 0;
        hours = 0;
    }
    if(seconds === 60) {
        minutes++;
        seconds = 0;
    } else if(minutes === 60) {
        hours++;
        minutes = 0;
    } 
   
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displayHours = hours < 10 ? "0" + hours : hours;

    document.getElementById("time").textContent = displayHours + ":" + displayMinutes + ":" + displaySeconds; // Update the display time 
    // .textContent is used to set the text content of the element (w/ out changing font)
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
    document.getElementById("time").textContent = "00:00:00"; // Reset the display to 00:00:00
}