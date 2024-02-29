 const taskList = document.getElementById("task-list");
 const taskBox = document.getElementById("add-task-box"); 
 const taskDisplay = document.getElementById("add-task-display")


 const addTaskIcon = document.getElementById("add-task-icon");
 const addTaskInput = document.getElementById("add-task-input");
 const cancelTask = document.getElementById("cancel-button");
 const addTaskButton = document.getElementById("add-task-button"); 

 const menuIcon = document.getElementById("menuIcon");
 const nav = document.querySelector("nav");

 const searchDisplay = document.getElementById("searchDisplay");

 const checkSection = document.getElementById("check");
 const totalTasksCountElement = document.getElementById("totalTasksCount");
 const uncompletedTasksCountElement = document.getElementById("uncompletedTasksCount");

 const inbox = document.getElementById("in"); 

//In the following code I have assumed that the user will not put the same string more than once.
    //if the user puts the same string more than once:
        //If one of the tasks is checked, it will be removed from the main section.
            //Once the page is reloaded all the tasks with the same string will be considered marked and therefor not be displayed on the screen. 


 // Function to add a task
function onAddItemSubmitt() {
    const taskName = addTaskInput.value;
    if (taskName.trim() === "") {
        alert('Please add task'); 
        return; 
    }

    const newTask = { id: Date.now(), task: taskName, completed: false };
    addItemToLocalStorage(newTask); 
    addItemToDOM(newTask); 



     addTaskInput.value = "";

     countTasksTotal();
     countTasksIncompleted();  

    }


//Add task to the DOM
 function addItemToDOM(newTask){
    const newTaskItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newTaskItem.appendChild(checkbox); 
    // Create a <span> element for task text, make it editable
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = newTask.task;
    taskTextSpan.setAttribute('contentEditable', true); // Allow editing
    newTaskItem.appendChild(taskTextSpan);

    taskList.appendChild(newTaskItem);

    checkbox.addEventListener("change", () => {
        markTaskAsCompleted(newTaskItem);
    });

    // Add a blur event listener to the task text for saving edits
    taskTextSpan.addEventListener('blur', () => {
        // Update the task's text with the edited content
        newTask.task = taskTextSpan.textContent;

        // Save the updated task in local storage
        updateTaskInLocalStorage(newTask);

       
    });
    
 }

//Add task to the Local Storage
 function addItemToLocalStorage(newTask){
    const itemsFromStorage = getItemsFromLocalStorage(); 
    
    itemsFromStorage.push(newTask);

    localStorage.setItem('items', JSON.stringify(itemsFromStorage)); 

 }

 //Get tasks from Local Storage
 function getItemsFromLocalStorage(){
    let itemsFromStorage; 

    if(localStorage.getItem('items') === null){
        itemsFromStorage = []
    }else{
        itemsFromStorage = JSON.parse(localStorage.getItem('items')); 
    }

    return itemsFromStorage; 

 }


 // Update a task in Local Storage
 function updateTaskInLocalStorage(updatedTask) {
    const itemsFromStorage = getItemsFromLocalStorage();
    const updatedItems = itemsFromStorage.map((item) => {
        if (item.id === updatedTask.id) {
            return updatedTask;
        }
        return item;
    });

    localStorage.setItem('items', JSON.stringify(updatedItems));
}


//Mark task as completed, and remove from DOM
 function markTaskAsCompleted(taskObj) {
    const itemsFromStorage = getItemsFromLocalStorage();
    

    const taskText = taskObj.textContent.trim();

    itemsFromStorage.forEach((item) => {
        if (item.task === taskText) {
            item.completed = true;
            taskObj.remove();
        }
    });

    localStorage.setItem('items', JSON.stringify(itemsFromStorage));
    
    countTasksIncompleted();

}

 
 // Event listeners
window.addEventListener("load", () => {
    const itemsFromStorage = getItemsFromLocalStorage();

    itemsFromStorage.forEach((item) => {
        if (item.completed === false) {
            addItemToDOM(item);
        }
    });

    countTasksTotal(); 
    countTasksIncompleted();



});

function countTasksTotal(){
    const itemsFromStorage = getItemsFromLocalStorage();

    totalTasksCountElement.textContent = itemsFromStorage.length;


}

function countTasksIncompleted(){
    const itemsFromStorage = getItemsFromLocalStorage();

    const uncompletedTasks = itemsFromStorage.filter(item => !item.completed);
    uncompletedTasksCountElement.textContent = uncompletedTasks.length;

    inbox.textContent = uncompletedTasks.length; 

}




menuIcon.addEventListener("click", () => {
    // Toggle the display of the navigation bar
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
});


  addTaskIcon.addEventListener("click", () => {
    taskBox.style.display = "block";
    taskDisplay.style.display = "none"; 

 });

 cancelTask.addEventListener("click", () => {
     taskDisplay.style.display = "block"; 
     taskBox.style.display = "none";


 });

 addTaskButton.addEventListener("click", () => {
    onAddItemSubmitt()

 }); 

 searchDisplay.addEventListener("input", () => {
    const searchTerm = searchDisplay.value.toLowerCase();
    const taskItems = taskList.querySelectorAll("li");

    taskItems.forEach((taskItem) => {
        const taskText = taskItem.textContent.toLowerCase();
        if (taskText.includes(searchTerm)) {
            taskItem.style.display = "block";
        } else {
            taskItem.style.display = "none";
        }
    });
});


 

