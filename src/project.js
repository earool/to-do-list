export default function Project(title) {
    this.title = title;
    this.description = null;
    this.tasks = [];
}

Project.prototype.addTask = function(task) {
    this.tasks.push(task);
}

Project.prototype.removeTask = function(taskToDelete) {
    let i = -1;
    for (const task of this.tasks) {
        i++;
        if (taskToDelete.title === task.title) {
            this.tasks.splice(i, 1);
            return;
        }
    }
}