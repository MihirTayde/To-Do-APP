const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");

window.onload = function() {
    loadData(); 
};

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        li.className = "bg-cyan-50 rounded-xl h-auto px-3 shadow-xl my-2 flex cursor-pointer";
        li.ondblclick = function() {
            task_done(this);
        };
        li.oncontextmenu = function(event) {
            deleteTask(event, this); 
            return false;
        };
        listContainer.appendChild(li);
        saveData();
    }
    inputBox.value = "";
}

function task_done(item) {
    item.style.textDecoration = "line-through";
    item.style.color = "black";
    saveData();
}

function deleteTask(event, item) {
    event.preventDefault();
    item.remove();
    saveData();
}

function saveData(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function loadData(){
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
        listContainer.innerHTML = savedTasks;
    }
}

function clearTasks() {
    listContainer.innerHTML = ""; // Clear the list
    localStorage.removeItem("tasks"); // Remove tasks data from local storage
}
