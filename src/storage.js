import Project from './project';

export function addProject(title) {
    const newProject = new Project(title);
    localStorage.setItem(title, JSON.stringify(newProject));
}

export function deleteProject(title) {
    localStorage.removeItem(title);
}

export function addATask(projectTitle, taskTitle) {
    const unstringifiedProject = JSON.parse(
localStorage.getItem(projectTitle));
    const placeholder = new Project('placeholder');
    let project = Object.assign(placeholder, unstringifiedProject);
    project.addTask(taskTitle);
    project = JSON.stringify(project);
    localStorage.setItem(projectTitle, project);
}

// function getProjectObject(title) {
//     const unstringifiedProject = JSON.parse(
// localStorage.getItem(projectTitle));
//     const placeholder = new Project('placeholder');
//     return Object.assign(placeholder, unstringifiedProject);
// }