// functions for display clock
function currentTime() {
    const today = new Date();
    let hour = today.getHours();
    let mins = today.getMinutes();
    mins = timeFormat(mins);
    document.getElementById('bg-clock').innerHTML = hour + ":" + mins; // need to change id name
    setTimeout(currentTime, 1000);
}

function timeFormat(i) { // formating the display clock to add 0's 
    if(i < 10) {
        i = "0" + i // adding 0's infront of the i
    }
    return i;
}

//Initial call to start clock
currentTime();

//Functions for widgets


//Functions for todo
document.getElementById('todoButton').addEventListener('click', function(){
    document.getElementById('todo').style.display='block';
});



