export function printProjects(projects, setCurrentProject){
    const list = document.querySelector('.project-list')
    list.innerHTML = '';
    
    projects.map((project)=>{
        const li = document.createElement('li');
        li.innerText = project.name;
        console.log(project.name)
        li.addEventListener('click', ()=>{
            printTodos(project);
            setCurrentProject(project);
        })
        list.appendChild(li);
    })
}


export function createTodoCard(todo, project){
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = 'Delete'

    const detailsButton = document.createElement('button')
    detailsButton.innerHTML = 'Details'

    const details = document.createElement('div');
    details.id = 'details'+todo.id;
    details.style.display = "none";

    deleteButton.addEventListener('click', ()=>{
        project.deleteTodo(todo.id);
        printTodos(project);    
        saveProjectToLocalStorage([project]); 
    })

    detailsButton.addEventListener('click', ()=>{
        if(document.querySelector("#details"+todo.id).style.display == "none"){
            document.querySelector("#details"+todo.id).style.display = "flex";
        } else {
            document.querySelector("#details"+todo.id).style.display = "none"
        }
        
    })
    
    const title = document.createElement('p');
    const description = document.createElement('p');
    const dueDate = document.createElement('p');
    const priority = document.createElement('p');

    title.innerText = 'Title: '+todo.title;
    description.innerText = 'Description: '+todo.description;
    dueDate.innerText = 'Due Date: '+todo.dueDate;
    priority.innerText = 'Priority: '+todo.priority;

    todoDiv.appendChild(title);
    todoDiv.appendChild(dueDate);
    todoDiv.appendChild(detailsButton);

    details.appendChild(description);
    details.appendChild(priority);
    details.appendChild(deleteButton);

    todoDiv.appendChild(details);

    return todoDiv;
}

export function printTodos(project){
    const todoContainer = document.querySelector('.todobox');
    todoContainer.innerHTML = '';

    const todos = project.getTodos();
    todos.map((todo)=>{
        const todoDiv = createTodoCard(todo, project);
        todoContainer.appendChild(todoDiv);
    })
}