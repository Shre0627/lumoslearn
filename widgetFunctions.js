
//TODO JS
let button = document.getElementById('addtask');
if (button) {
    button.addEventListener('click', addTask);
}

let taskInput = document.getElementById('task');
if (taskInput) {
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();  // Trigger addTask function when Enter is pressed
        }
    });
}

//ADD TASKS FOR TODO
function addTask() {
    console.log("addTask triggered"); // This will help track how many times the function is triggered
    
    let taskInput = document.getElementById('task');
    console.log("Input Value Before Adding:", taskInput.value); // Check value before using it

    let taskValue = taskInput.value;
    if (taskValue.trim() === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new <li> element
    let newTask = document.createElement('li');


    //Complete task
    let complete = document.createElement('input');
    let del = document.createElement('button');
    //Style the delete button
    del.style.backgroundColor = 'red';
    del.style.border = 'none';
    del.style.borderRadius = '90%';
    del.style.color = 'white';
    del.style.justifyContent = 'center';
    del.style.alignItems = 'center';
    del.textContent = ' x ';
    
    complete.setAttribute('type','checkbox'); //add checkbox
    newTask.appendChild(complete); // Checkbox first
    newTask.appendChild(document.createTextNode(taskValue)); // Task text after, add typed value to new task li element
    newTask.appendChild(del);

    del.addEventListener('click', function(){
        newTask.remove(); //delete task
    })
    

    complete.addEventListener('change', function(){
        if (this.checked){
            newTask.style.textDecoration = 'line-through';
        } else {
            newTask.style.textDecoration = 'none'; //line through when complete
        }
    });

    // Find the task list (ul) and append the new task
    let taskList = document.getElementById('taskList');
    console.log(newTask)
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = '';
}
