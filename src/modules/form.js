import { Todo } from "./todo";
import { printTodos } from "./ui";

export function openForm(project) {
    document.querySelector(".todo-form").style.display = "flex";
    createFormButtons(project);
}

export function closeForm() {
    document.querySelector(".todo-form").style.display = "none";
}

export function submitForm(){
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;

    const todo = new Todo( title, description, dueDate, priority);
    return todo;
}

export function createFormButtons(project){
    const createButton = document.querySelector('.create-todo');
    createButton.addEventListener('click', (event)=>{
        event.preventDefault()
        const todo = submitForm();
        project.setTodos(todo)
        printTodos(project); 
        closeForm();
    })

    const closeFormButton = document.querySelector('.close-form');
    closeFormButton.addEventListener('click', ()=>{
        closeForm();
    })
}