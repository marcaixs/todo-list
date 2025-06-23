import "./styles.css";
import {Project} from './modules/Project.js'
import { saveProjectToLocalStorage, getProjectFromLocalStorage } from "./modules/storage.js";
import { printProjects } from "./modules/ui.js";

const projects = [];
let currentProject; 

function startTodoList(){
    const exampleProject = new Project('example');
    projects.push(exampleProject)
    saveProjectToLocalStorage(projects);
    printProjects(projects);
}

startTodoList()

const newProjectButton = document.querySelector('.new-project');

newProjectButton.addEventListener('click', ()=>{
    const name = prompt('Enter the new project name', 'New project name')
    const project = new Project(name);
    projects.push(project);
    saveProjectToLocalStorage(projects);
    printProjects(projects); 
})



