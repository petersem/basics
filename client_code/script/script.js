

// this function adds a task to the task list
function addTask(taskText) {
    // don't proceed if text box is empty
    if (taskText == "" || taskText == undefined) {
        console.log('You must enter text for a task');
        return;
    }

    // use getElementById to get an specific object on the web page
    const taskList = document.getElementById("task-list");

    const taskListItem = document.createElement("li");
    taskList.appendChild(taskListItem);

    const taskListItemCheckbox = document.createElement("input");
    taskListItemCheckbox.type = "checkbox";
    taskListItem.appendChild(taskListItemCheckbox);

    const taskListItemText = document.createElement("span");
    taskListItemText.innerText = taskText;
    console.log(taskText);
    taskListItem.appendChild(taskListItemText);

    function onListItemChanged(e) {
        console.log(e);
        if (e.target.checked) {
            console.log("The task was completed");
        } else {
            console.log("The task was undone?!");
        }
        console.log("Task " + taskText + " had the check changed!");
    }
    taskListItemCheckbox.addEventListener("change", onListItemChanged);
}

function onNewButtonPress() {
    const taskText = document.getElementById('task-text');
    addTask(taskText.value);
    taskText.value = "";
}

// add listener onclick to new task button
const newButton = document.getElementById("new-button");
newButton.addEventListener("click", onNewButtonPress);
