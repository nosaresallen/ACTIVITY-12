let todoInput = document.querySelector('#todoInput');
let addTask = document.querySelector('#addTask');
let taskList = document.querySelector('#taskList');

addTask.addEventListener('click', function() {
    if (todoInput.value === '') {
        alert('Please enter a task');
    } else {
        
        let li = document.createElement('li');
        let newTask = document.createTextNode(`${todoInput.value}`);

        li.appendChild(newTask);
        taskList.appendChild(li);

        li.addEventListener('click', function() {
        li.classList.toggle('done');
        })

        let deleteTask = document.createElement('button');
        let textX = document.createTextNode('X');

        deleteTask.appendChild(textX);
        li.appendChild(deleteTask);

        deleteTask.addEventListener('click', function() {
        taskList.removeChild(li);
        })
        
    }
    todoInput.value = '';
})