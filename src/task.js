export default function Task(title) {
    this.title = title;
    this.description = '';
    this.dueData = undefined;
    this.priority = 'low';
}

Task.prototype.changeTitle = function(value) {
    this.title = value;
}

Task.prototype.changeDescription = function(value) {
    this.description = value;
}

Task.prototype.changeDueDate = function(value) {
    this.dueData = value;
}

Task.prototype.changePriority = function(value) {
    this.priority = value;
}