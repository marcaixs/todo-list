export function printProjects(projects){
    const list = document.querySelector('.project-list')
    list.innerHTML = '';

    projects.map((project)=>{
        const li = document.createElement('li');
        li.innerText = project.name;
        console.log(project.name)
        li.addEventListener('click', ()=>{

        })
        list.appendChild(li);
    })
}

export function printTodos(project){
    
}