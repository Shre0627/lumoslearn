// Functions for display clock
function currentTime() {
    const today = new Date();
    let hour = today.getHours();
    let mins = today.getMinutes();
    mins = timeFormat(mins);
    document.getElementById('bg-clock').innerHTML = hour + ":" + mins;
    setTimeout(currentTime, 1000);
}

function timeFormat(i) {
    return i < 10 ? "0" + i : i;
}

// Initial call to start clock
currentTime();

// Toggle display for widgets
document.querySelectorAll('.open-widget').forEach(button => {
    button.addEventListener('click', function() {
        let targetId = this.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'block';
    });
});

document.querySelectorAll('.close-widget').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.widget').style.display = 'none';
    });
});

// Make widgets draggable
document.querySelectorAll('.widget').forEach(widget => {
    let header = widget.querySelector('.widget-header');

    if (!header) return; // Ensure there's a header before adding event listeners

    header.addEventListener('mousedown', function(e) {
        let offsetX = e.clientX - widget.offsetLeft;
        let offsetY = e.clientY - widget.offsetTop;

        function mouseMoveHandler(e) {
            widget.style.left = `${e.clientX - offsetX}px`;
            widget.style.top = `${e.clientY - offsetY}px`;
        }

        function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});

//temporary display pomodoro
document.getElementById('pomodoro').style.display = 'block';