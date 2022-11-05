import Project from './project';

// Manage projects
// Manage projects- export functions
export function addProject(title) {
    const newProject = new Project(title);
    localStorage.setItem(title, JSON.stringify(newProject));
}

export function deleteProject(title) {
    localStorage.removeItem(title);
}

export function changeProjectTitle(oldTitle, newTitle) {
    const project = getProjectObject(oldTitle);
    deleteProject(oldTitle)
    project.title = newTitle;
    updateStorage(project, newTitle);

}

export function changeProjectDescription(title, string) {
    const project = getProjectObject(title);
    project.description = string;
    updateStorage(project, title);
}

// Manage projects - inner functions
function getProjectObject(title) {
    const unstringifiedProject = JSON.parse(
localStorage.getItem(title));
    const placeholder = new Project('placeholder');
    return Object.assign(placeholder, unstringifiedProject);
}

function updateStorage(modifiedProject, title) {
    const project = JSON.stringify(modifiedProject);
    localStorage.setItem(title, project);
}


// Manage tasks
export function manageTasks(projectTitle, taskTitle, mode='a') {
    const project = getProjectObject(projectTitle);
    if (mode === 'a') {
        project.addTask(taskTitle);
    } else {
        project.removeTask(taskTitle);
    }
    updateStorage(project, projectTitle);
}

export function changeTasksContent(projectTitle, taskTitle, mode, value) {
    const project = getProjectObject(projectTitle);
    switch(mode) {
        case 't':   //title
            project.tasks[value] = project.tasks[taskTitle];
            project.tasks[value].title = value;
            delete project.tasks[taskTitle];
            break;
        case 'd':   //description
            project.tasks[taskTitle].description = value;
            break;
        case 'da':  //dueDate
            project.tasks[taskTitle].dueDate = value;
            break;
        case 'p':   //priority
            project.tasks[taskTitle].priority = value;
            break;
    }
    updateStorage(project, projectTitle);
}

export function getDailyTasks() {
    const dailyTasks = [];
    const data = [];
    for (const key of Object.keys(localStorage)) {
        data.push(JSON.parse(localStorage[key]));
    }   
}