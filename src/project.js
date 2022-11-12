import Task  from './task';

export default function Project(title) {
    this.title = title;
    this.tasks = {};
}

Project.prototype.addTask = function(taskTitle) {
    const newTask = new Task(taskTitle)
    this.tasks[taskTitle] = newTask;
}

Project.prototype.removeTask = function(taskTitle) {
    delete this.tasks[taskTitle];
}
