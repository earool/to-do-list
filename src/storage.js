import Project from './project';
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';
import getDay from 'date-fns/getDay'
import format from 'date-fns/format';




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
export function manageTasks(projectTitle, taskTitle, mode, value='') {
    const project = getProjectObject(projectTitle);
    switch(mode) {
        case 'a':   //add
            project.addTask(taskTitle);
            break;
        case 'r':   //remove
            project.removeTask(taskTitle);
            break;
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
    }
    updateStorage(project, projectTitle);
}

export function getDailyAndWeeklyTasks() {
    const dailyTasks = [];
    const weeklyTasks = [];
    for (const project of Object.values(localStorage)) {
        const tasks = JSON.parse(project).tasks;
        for (const task of Object.values(tasks)) {
            const date = new Date(task.dueDate);           
            if (isToday(date)) {
                const obj = {};
                obj.projectTitle = JSON.parse(project).title;
                obj.taskTitle = task.title;
                obj.dueDate = format(date, 'do MMMM yyyy (EEEEEE)');
                dailyTasks.push(obj);
                weeklyTasks.push(obj);
            } else if (isThisWeek(date)) {
                const obj = {};
                obj.projectTitle = JSON.parse(project).title;
                obj.taskTitle = task.title;
                obj.dueDate = format(date, 'do MMMM yyyy (EEEEEE)');
                weeklyTasks.push(obj);
            }
        }
    }
    return [
        dailyTasks,
        weeklyTasks
    ]
}