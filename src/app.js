import { addProject, deleteProject,
manageTasks, changeProjectDescription as changeDesc,
changeProjectTitle, changeTasksContent, getDailyTasks } from './storage';
export default function application() {
    localStorage.clear();
    addProject('inbox');
    addProject('project1');
    addProject('project2');
    
    getDailyTasks();
}

