

export function saveProjectToLocalStorage(projects){

    localStorage.setItem('projects', JSON.stringify(projects))
}

export function getProjectFromLocalStorage(){
    const storedProjects = localStorage.getItem('projects')

    if (storedUserData) {
    const projects = JSON.parse(storedProjects)
    return projects
    
    } else {
    console.log('Projects not found in local storage')
    }
}