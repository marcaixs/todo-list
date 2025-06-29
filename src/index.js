import "./styles.css";
import {Project} from './modules/Project.js'
import { Todo } from "./modules/todo.js";
import { saveProjectToLocalStorage, getProjectFromLocalStorage } from "./modules/storage.js";
import { printProjects, printTodos } from "./modules/ui.js";
import { openForm, submitForm } from "./modules/form.js";

const projects = [];
let currentProject;
function setCurrentProject(project) {
    currentProject = project;
}

function startTodoList(){
    const exampleProject = new Project('example');
    exampleProject.setTodos(new Todo('todo example 1', 'blablablablabla', '24/05/25', 5))
    exampleProject.setTodos(new Todo('todo example 2', 'blebleblelbe', '25/05/25', 6))
    projects.push(exampleProject)
    saveProjectToLocalStorage(projects);
    printProjects(projects, setCurrentProject);
    currentProject = exampleProject;
    printTodos(exampleProject)
}

startTodoList()

const newProjectButton = document.querySelector('.new-project');

newProjectButton.addEventListener('click', ()=>{
    const name = prompt('Enter the new project name', 'New project name')
    const project = new Project(name);
    projects.push(project);
    saveProjectToLocalStorage(projects);
    printProjects(projects, setCurrentProject);
    printTodos(project)
})

const newTodoButton = document.querySelector('.new-todo');

newTodoButton.addEventListener('click', ()=>{
    openForm(currentProject);
})



