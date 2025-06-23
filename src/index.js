import "./styles.css";
import {Project} from './modules/project.js'

function startTodoList(){
    const exampleProject = new Project(example);
}

const newProjectButton = document.querySelector('.new-project');

newProjectButton.addEventListener('click', ()=>{
    const name = prompt('Enter the new project name', 'New project name')
    const project = new Project(name);
    
})