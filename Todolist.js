const form = document.querySelector('#add-task');
const input = document.querySelector('#task');
const taskList = document.querySelector('#list');
const todos = document.querySelector()

taskList.addEventListener('click',function(e){
if(e.target.innerText === 'Remove'){
    e.target.parentElement.remove();
}
else if(e.target.innerText === 'Complete'){
    e.target.parentElement.classList.add('done');
}
});

form.addEventListener('submit', function(e){
    e.preventDefault()
    const newTask = document.createElement('li');
    const completeBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    completeBtn.innerText = "Complete";
    removeBtn.innerText= 'Remove';
    newTask.innerText = input.value
    newTask.appendChild(completeBtn);
    newTask.appendChild(removeBtn)
    input.value = '';
    taskList.appendChild(newTask);
})

localStorage.setItem('todos',JSON.stringify(taskList));
