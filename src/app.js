import { addProject, deleteProject,
manageTasks, changeProjectDescription as changeDesc,
changeProjectTitle, getDailyAndWeeklyTasks } from './storage';
export default function application() {
    localStorage.clear();
    addProject('inbox');
    addProject('project1');
    addProject('project2');
    manageTasks('inbox', 'task with one day', 'a');
    manageTasks('inbox', 'second-inbox', 'a');
    manageTasks('project1', 'task for new project', 'a');
    manageTasks('project1', 'task new date', 'a');
    manageTasks('project1', 'task for new project', 'da', '2022-11-13');
    manageTasks('inbox', 'second-inbox', 'da', '2022-11-08');
    manageTasks('inbox', 'task with one day', 'da', '2022-11-12');
    manageTasks('project1', 'task new date', 'da', '2023-01-01');



    
    // const dAWTasks = getDailyAndWeeklyTasks();
    // console.log(dAWTasks[0]);
    // console.log(dAWTasks[1]);
}

