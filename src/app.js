import { addProject, deleteProject,
addATask } from './storage';
export default function application() {
    addProject('inbox');
    // deleteProject('inbox');
    addATask('inbox', 'xxx');
    console.log(localStorage.inbox);
}

