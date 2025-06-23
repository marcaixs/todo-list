export function printProjects(projects){
    const list = document.querySelector('.project-list')
    list.innerHTML = '';

    projects.map((project)=>{
        const li = document.createElement('li');
        li.innerText = project.name;
        console.log(project.name)
        li.addEventListener('click', ()=>{
            printTodos(project);
        })
        list.appendChild(li);
    })
}


export function createTodoCard(todo){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'
    
    const title = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');

    title.innerText = 'Title: '+todo.title;
    description.innerText = 'Description: '+todo.description;
    dueDate.innerText = 'Due Date: '+todo.dueDate;
    priority.innerText = 'Priority: '+todo.priority;

    todoDiv.appendChild(title);
    todoDiv.appendChild(description);
    todoDiv.appendChild(dueDate);
    todoDiv.appendChild(priority);
    todoDiv.appendChild(deleteButton);

    return todoDiv;
}

export function printTodos(project){
    const todoContainer = document.querySelector('.todobox');
    todoContainer.innerHTML = '';

    const todos = project.getTodos();
    todos.map((todo)=>{
        const todoDiv = createTodoCard(todo);
        todoContainer.appendChild(todoDiv);
    })
}