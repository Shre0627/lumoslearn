let pomodoro = document.getElementById("pomodoro-timer");
let short = document.getElementById("short-timer");
let long = document.getElementById("long-timer");

function showDefault(){
    pomodoro.style.display = "block";
    short.style.display = "none";
    long.style.display = "none";
    
}
showDefault();

//DISPLAY SESSIONS
let currentTimer = null;
document.getElementById("pomodoro-btn").addEventListener("click", function() {
    hideAll();
    pomodoro.style.display = "block";
    currentTimer = pomodoro;
});

document.getElementById("shortbreak-btn").addEventListener("click", function() {
    hideAll();
    short.style.display = "block";
    currentTimer = short;
});

document.getElementById("longbreak-btn").addEventListener("click", function() {
    hideAll();
    long.style.display = "block";
    currentTimer = long;
});

function hideAll() {
    let timers = document.querySelectorAll(".timer-display");
    timers.forEach(timer => {
        timer.style.display = "none";
    });
}

let myInterval = null;
function startTimer(timerDisplay){
    timerDuration = timerDisplay.getAttribute("data-duration").split(":")[0];
    let durationMiliseconds = timerDuration * 60 * 1000;
    let endTimestamp = Date.now() + durationMiliseconds;
}

function startTimer(timerdisplay) {
    if (myInterval) {
        clearInterval(myInterval);
    }
    timerDuration = timerdisplay.getAttribute("data-duration").split(":")[0];
    console.log(timerDuration);

    let durationMiliseconds = timerDuration * 60 * 1000;
    let endTimestamp = Date.now() + durationMiliseconds;

    myInterval = setInterval(function(){
        const timeRemaining = new Date(endTimestamp - Date.now());

        if (timeRemaining <= 0) {
            clearInterval(myInterval);
            timerdisplay.textContent = "00:00";
            //const alarm = new Audio('alarm sound file path');
            //alarm.play();
        } else {
            const minutes = Math.floor(timeRemaining / 60000);
            const seconds = ((timeRemaining % 60000) / 1000).toFixed(0);
            const formattedTime = `${minutes}:$seconds.toString().padStart(2, '0')}`;
            console.log(formattedTime);
            timerdisplay.textContent = formattedTime;
        }
    }, 1000);
}

document.getElementById("start-btn").addEventListener("click", function() {
    if (currentTimer) {
        startTimer(currentTimer);
    }
});
document.getElementById("stop-btn").addEventListener("click", function() {
    if (myInterval) {
        clearInterval(myInterval);
    }
});


