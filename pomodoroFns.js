// Set initial position of the pomodoro widget
document.getElementById('pomodoro').style.top = '100px';
document.getElementById('pomodoro').style.left = '200px';

// Selectors for displays within the pomodoro widget
let pomodoro = document.getElementById("pomodoro-timer");
let short = document.getElementById("short-timer");
let long = document.getElementById("long-timer");
let settings = document.getElementById("settings-area");
let settingsBtn = document.getElementById("settings-btn");

// Buttons for switching between timers
let pomodoroBtn = document.getElementById("pomodoro-btn");
let shortBtn = document.getElementById("shortbreak-btn");
let longBtn = document.getElementById("longbreak-btn");

// Initially hide all timers except the pomodoro timer, also hide settings area
function showDefault() {
    pomodoro.style.display = "block";
    short.style.display = "none";
    long.style.display = "none";
    settings.style.display = "none";
    highlightButton(pomodoroBtn);
    document.getElementById("start-btn").textContent = "Start";
}
showDefault();

function highlightButton(button) {
    [pomodoroBtn, shortBtn, longBtn].forEach(btn => {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.style.borderColor = ""; // Add this to reset the border
    });
    button.style.backgroundColor = "#2a2929";
    button.style.borderColor = "#1f1c1c";
}


// SWITCH BETWEEN DISPLAY SESSIONS
let myInterval = null;
let timeRemaining = null;
let pomodoroCount = 0;  // Track how many Pomodoros have been completed

function switchSession() {
    clearInterval(myInterval);
    myInterval = null;
    timeRemaining = null;

    if (currentTimer === pomodoro) {
        pomodoroCount++;
    }

    if (pomodoroCount >= 2) {  // After 2 Pomodoro sessions, switch to long break
        currentTimer = long;
        highlightButton(longBtn);
        pomodoroCount = 0;  // Reset Pomodoro count after long break
    } else {
        // Toggle between Pomodoro and Short Break
        currentTimer = (currentTimer === pomodoro) ? short : pomodoro;
        highlightButton(currentTimer === pomodoro ? pomodoroBtn : shortBtn);
    }

    hideAll();
    currentTimer.style.display = "block";
    resetTimer();  // Reset timer for new session
}
function resetTimer() {
    const duration = parseFloat(currentTimer.getAttribute("data-duration"));
    const minutes = Math.floor(duration);
    const seconds = Math.round((duration-minutes)*60);
    currentTimer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function showSession(sessionName){
    hideAll();
    settings.style.display = "none";

    if (myInterval){
        clearInterval(myInterval);
        myInterval = null;
    }

    if (sessionName === "pomodoro"){
        currentTimer = pomodoro;
        highlightButton(pomodoroBtn);
    } else if (sessionName === "short"){
        currentTimer = short;
        highlightButton(shortBtn);
    } else if (sessionName === "long"){
        currentTimer = long;
        highlightButton(longBtn);
    }
    currentTimer.style.display = "block";
    resetTimer();
}
document.getElementById("pomodoro-btn").addEventListener("click", function() {
    showSession("pomodoro");
});

document.getElementById("shortbreak-btn").addEventListener("click", function() {
    showSession("short");
});

document.getElementById("longbreak-btn").addEventListener("click", function() {
    showSession("long");
});

// SETTINGS BUTTON
document.getElementById("settings-btn").addEventListener("click", function () {
    settings.style.display = settings.style.display === "block" ? "none" : "block";
});

// HIDE ALL TIMERS
function hideAll() {
    let timers = document.querySelectorAll(".timer-display");
    timers.forEach(timer => {
        timer.style.display = "none";
    });
}



function startTimer(timerDisplay) {
    if (myInterval) {
        clearInterval(myInterval);
    }

    let totalSeconds = timeRemaining !== null
        ? timeRemaining
        : Math.floor(parseFloat(timerDisplay.getAttribute("data-duration")) * 60);

    function updateTimer() {
        if (totalSeconds <= 0) {
            clearInterval(myInterval);
            timerDisplay.textContent = "00:00";
            timeRemaining = null;

            // Optional: play alarm
            // const alarm = new Audio('path/to/alarm.mp3');
            // alarm.play();

            // Delay next session by 2 seconds
            setTimeout(() => {
                switchSession();
                startTimer(currentTimer);
            }, 2000);

            return;
        }

        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        totalSeconds--;
        timeRemaining = totalSeconds;
    }

    updateTimer();
    myInterval = setInterval(updateTimer, 1000);
}

// Start button event listener
document.getElementById("start-btn").addEventListener("click", function () {
    if (currentTimer) {
        startTimer(currentTimer);
        document.getElementById("start-btn").textContent = "Start";
        document.getElementById("start-btn").style.fontSize = "20px";
    }
});

// Pause button event listener
document.getElementById("pause-btn").addEventListener("click", function () {
    if (myInterval) {
        clearInterval(myInterval);
        myInterval = null;
        document.getElementById("start-btn").textContent = "Resume";
        document.getElementById("start-btn").style.fontSize = "15px";
    }
});

//Reset button event listener
document.getElementById("reset-btn").addEventListener("click", function () {
    if (myInterval) {
        clearInterval(myInterval); // Stop the timer
        myInterval = null; // Clear the interval reference
    }

    timeRemaining = null; // Reset the remaining time

    // Reset the timer display to the initial duration of the current session
    let initialDuration = parseFloat(currentTimer.getAttribute("data-duration")) * 60; // Convert minutes to seconds
    let minutes = Math.floor(initialDuration / 60);
    let seconds = Math.floor(initialDuration % 60);
    currentTimer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Reset the "Start" button text and style
    document.getElementById("start-btn").textContent = "Start";
    document.getElementById("start-btn").style.fontSize = "20px";
});

//Get the settings values from the input fields
function getSettings() {
    // Update Pomodoro duration
    let pomodoroMins = document.getElementById("pom-session-mins").value;
    let pomodoroSecs = document.getElementById("pom-session-secs").value;
    let pomodoroDuration = parseInt(pomodoroMins) + (parseInt(pomodoroSecs) / 60);
    pomodoro.setAttribute("data-duration", pomodoroDuration);

    // Update Short Break duration
    let shortMins = document.getElementById("short-session-mins").value;
    let shortSecs = document.getElementById("short-session-secs").value;
    let shortDuration = parseInt(shortMins) + (parseInt(shortSecs) / 60);
    short.setAttribute("data-duration", shortDuration);

    // Update Long Break duration
    let longMins = document.getElementById("long-session-mins").value;
    let longSecs = document.getElementById("long-session-secs").value;
    let longDuration = parseInt(longMins) + (parseInt(longSecs) / 60);
    long.setAttribute("data-duration", longDuration);

    // Update the timer display for the current session
    if (currentTimer === pomodoro) {
        pomodoro.textContent = `${pomodoroMins}:${pomodoroSecs.toString().padStart(2, '0')}`;
    } else if (currentTimer === short) {
        short.textContent = `${shortMins}:${shortSecs.toString().padStart(2, '0')}`;
    } else if (currentTimer === long) {
        long.textContent = `${longMins}:${longSecs.toString().padStart(2, '0')}`;
    }
}

// Save settings button event listener
document.getElementById("save-settings").addEventListener("click", function () {
    getSettings();
    settings.style.display = "none";
    showDefault();
});