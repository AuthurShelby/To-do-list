const AddTask = document.getElementById('addtask');
const AddTaskBtn = document.getElementById('AddEventButton');
const GetItem = document.getElementById('get-item');
const ErrorMsg = document.getElementById('error-msg');

AddTaskBtn.addEventListener('click',function(){
    AddingTask();
    localStorage.getItem('tasks');
});

function AddingTask(){
    const task = document.createElement('p');
    task.textContent=AddTask.value.trim();
    
    if (AddTask.value.trim()==="")
    {
        EnteredValueNull();
    }
    else
    {
        task.classList.add('NewList');
        GetItem.appendChild(task);
        AddTask.value = "";
        ErrorMsg.textContent="";
    }

    task.addEventListener('click',function(){
        task.style.textDecoration="line-through";
        task.style.backgroundColor="#17B169";
        task.style.color = 'black';
    });
    task.addEventListener('dblclick',function(){
        GetItem.removeChild(task);
    });

}
function EnteredValueNull(){
    AddTask.value="";
    // AddTask.focus();
    ErrorMsg.textContent="Please enter a task";
}
function KeyEnter(event){
    if(event.key==="Enter"){
        AddingTask();
    }    
}