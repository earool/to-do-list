import Task  from './task';

export default function Project(title) {
    this.title = title;
    this.description = null;
    this.tasks = {};
}

Project.prototype.addTask = function(taskTitle) {
    const newTask = new Task(taskTitle)
    this.tasks[taskTitle] = newTask;
}

Project.prototype.removeTask = function(taskTitle) {
    delete this.tasks[taskTitle];
}

export function addProject(title) {
    const newProject = new Project(title);
    localStorage.setItem(title, JSON.stringify(newProject));
}

export function removeProject(title) {
    localStorage.removeItem(title);
    // check case when title has two words separeted by space
}


export function getProject(title) {
    const parsedProject = JSON.parse(localStorage.getItem(title));
    const placeholder = new Project('placeholder');
    return Object.assign(placeholder, parsedProject);
}
