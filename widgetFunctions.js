
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
    newTask.style.padding = '5px'; //increase padding for task
    //Create an editable span for the task text
    let taskText = document.createElement('span');
    taskText.textContent = taskValue;
    taskText.contentEditable = false; // Make it non-editable
    taskText.style.cursor = 'pointer'; // Change cursor to pointer

    //double click to edit
    taskText.addEventListener('click', function() {
        this.contentEditable = true; // Make it editable
        this.style.backgroundColor = '#1f1c1c'; // Change background color to indicate edit mode
        this.style.outline = 'none'; // Remove outline
        this.focus(); // Focus on the span
    });
    //blur to save
    taskText.addEventListener('blur', function() {
        this.contentEditable = false; // Make it non-editable
        if (this.textContent.trim() === '') {
            alert('Task cannot be empty');
            this.textContent = taskValue; // Reset to original value
        } else {
            taskValue = this.textContent; // Update taskValue with new text
            this.style.backgroundColor = ''; // Reset background color
        }
    });

    //Complete task
    let complete = document.createElement('input');
    let del = document.createElement('button');
    let trashIcon = document.createElement('img');
    trashIcon.src = 'icons/trash.png'; // Path to your trash icon
    trashIcon.alt = 'Delete Task'; // Alt text for accessibility
    trashIcon.style.width = '16px'; // Set width of the icon
    trashIcon.style.height = '16px'; // Set height of the icon
    trashIcon.style.borderRadius = '50%'; // Make it circular
    trashIcon.style.cursor = 'pointer'; // Change cursor to pointer
    

    //Style the delete button
    del.style.border = 'none';
    del.style.display = 'flex';
    del.style.justifyContent = 'center';
    del.style.alignItems = 'center';
    //del.style.backgroundColor = 'transparent'; // Make background transparent
    del.style.padding = '4px';
    del.style.borderRadius = '40%'; // Make it circular
    del.appendChild(trashIcon); // Append the icon to the button

    //old styling
    //del.style.backgroundColor = 'red';
    //del.style.borderRadius = '90%';
    //del.style.color = 'white';
    //del.style.justifyContent = 'center';
    //del.style.alignItems = 'center';

    del.addEventListener('click', function() {
        newTask.remove(); // Delete task
        console.log("Task deleted"); // Log when task is deleted
    });
    //del.textContent = ' x ';
    
    complete.setAttribute('type','checkbox'); //add checkbox
    newTask.appendChild(complete); // Checkbox first
    //newTask.appendChild(document.createTextNode(taskValue)); // Task text after, add typed value to new task li element
    newTask.appendChild(taskText); // Append the editable span instead of plain text
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
    taskList.style.marginTop = '2px'; 
    console.log(newTask)
    taskList.appendChild(newTask);

    // Clear the input field after adding the task
    taskInput.value = '';
}
