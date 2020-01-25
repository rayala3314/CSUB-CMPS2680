function addTask(){
var task = document.getElementById("task").value;
var listOfTasks = document.getElementById("taskList");
var newTask = document.createElement("LI");
var textTask = document.createTextNode(task);


if (task){

newTask.appendChild(textTask);
listOfTasks.appendChild(newTask);

}
else{
console.log("Nothing to add");
}

}