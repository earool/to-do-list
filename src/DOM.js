import { addProject, deleteProject,
manageTasks,
changeProjectTitle,
getDailyAndWeeklyTasks } from './storage';


const typeProjectDiv = document.querySelector(
'.type-project-title');
const projectContainer = document.querySelector('.projects');
const rightDiv = document.querySelector('.right-side');


export function manageCreatingAProject() {
    const addProjectBtn = document.querySelector('.add-container');
    addProjectBtn.addEventListener('click', () => {
        createAddCancelAndManageProjects();
    })
    
    
}

// Create a add cancel buttons in sidebar
function createAddCancelAndManageProjects () {
    // if to prevent to do more add/cancel buttons
    if ( typeProjectDiv.innerText !== '' ) return;

    const input = document.createElement('input');
    input.setAttribute('id', 'type-title');
    input.setAttribute('type', 'text');
    typeProjectDiv.appendChild(input);

    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    typeProjectDiv.appendChild(buttons);

    const acceptBtn = document.createElement('button');
    const cancelBtn = document.createElement('button');
    acceptBtn.setAttribute('id', 'accept-title');
    acceptBtn.innerText = 'add';
    cancelBtn.innerText = 'cancel';
    cancelBtn.setAttribute('id', 'cancel-title');
    buttons.appendChild(acceptBtn);
    buttons.appendChild(cancelBtn);
    
    // add add and cancel btn
    manageAddBtn();
}

function manageAddBtn() {
    const typeProjectDiv = document.querySelector(
'.type-project-title');
    const btn = document.querySelector('#accept-title');
    const decBtn = document.querySelector('#cancel-title');
    const input = document.querySelector('#type-title');
    btn.addEventListener('click', () => {
        const title = input.value;
        if (title === '') return;
        for (const key of Object.keys(localStorage)) {
            if (title === key) return;
        }
        createProjectDiv(title);
        typeProjectDiv.innerHTML = '';
        // Way to delete project
        manageDeleteIcon();
    })
    decBtn.addEventListener('click', () => {
        typeProjectDiv.innerHTML = '';
    })
}

function manageDeleteIcon() {
    const declineBtns = document.querySelectorAll('.delete-icon');
    declineBtns.forEach((button) => {
        button.addEventListener('click', fc);

        function fc(e) {
            const value = e.target.getAttribute(
            'data-project-title');
            deleteProject(value);
            e.path[1].innerHTML = '';
            button.removeEventListener('click',fc);
            const rightHeader = document.querySelector('.right-side > h1')
            console.log(rightHeader);
            if (value === rightHeader.innerText) {
                rightDiv.innerHTML = '';
            }
            e.stopPropagation();
        }
    })

}

function createProjectDiv(projectTitle) {
    // create project in storage
    addProject(projectTitle);

    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.setAttribute('data-project-title', projectTitle);
    projectContainer.appendChild(projectDiv);
    // add addEventListener that causes loading of the right side
    loadRightSide(projectDiv);

    const projectIcon = document.createElement('div');
    projectIcon.classList.add('icon', 'project-icon');
    projectDiv.appendChild(projectIcon);

    const para = document.createElement('p');
    para.innerText = projectTitle;
    projectDiv.appendChild(para);

    const deleteIcon = document.createElement('div');
    deleteIcon.classList.add('small-icon', 'delete-icon');
    deleteIcon.setAttribute('data-project-title', projectTitle);
    projectDiv.appendChild(deleteIcon);
}

// Functions that manage right side (rightDiv) !!!
function loadRightSide(projectDiv) {
    projectDiv.addEventListener('click', createRightDiv);
}

function createRightDiv() {
    const title = this.getAttribute('data-project-title');
    rightDiv.innerHTML = '';
    // header
    const mainHeader = document.createElement('h1');
    mainHeader.innerText = title;
    rightDiv.appendChild(mainHeader);
    // task container
    createTasksContainer();
    const addTaskDiv = createAddTaskDiv(rightDiv);
}

function createAddTaskDiv(parentElement) {
    const addTaskDiv = document.createElement('div');
    addTaskDiv.classList.add('add-task');
    parentElement.appendChild(addTaskDiv);
    // create html content of addTaskDiv
    const addBtn = document.createElement('div');
    addBtn.classList.add('small-icon');
    addBtn.setAttribute('id', 'add-task');
    addTaskDiv.appendChild(addBtn);
    const para = document.createElement('p');
    para.innerText = 'Add a new task';
    addTaskDiv.appendChild(para);
    return addTaskDiv;
}

function createTasksContainer() {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('tasks-container')
    rightDiv.appendChild(taskContainer);
    return taskContainer;
}

// right side - create taskDiv
function createTaskDiv () {
    const tasksDivContainer = document.querySelector('.tasks-container')
    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    tasksDivContainer.appendChild(taskDiv);

    const upper = document.createElement('div');
    upper.classList.add('upper');
    taskDiv.appendChild(upper);
    
    const checkbox = document.createElement('input');
    checkbox.classList.add('small-icon');
    checkbox.setAttribute('type', 'checkbox');
    upper.appendChild(checkbox);

    const inputTitle = document.createElement('input');
    inputTitle.classList.add('small-icon');
    inputTitle.setAttribute('type', 'text');
    inputTitle.setAttribute('id', 'task-title');
    inputTitle.setAttribute('placeholder', 'Enter a title');

    inputTitle.value = ''
    upper.appendChild(inputTitle);
    
    const inputDate = document.createElement('input');
    inputDate.setAttribute('type', 'date');
    inputDate.setAttribute('id', 'task-date');
    upper.appendChild(inputDate);

    const taskExtend = document.createElement('div');
    taskExtend.classList.add('small-icon');
    taskExtend.setAttribute('id', 'task-extend');
    upper.appendChild(taskExtend);

    const taskDelete = document.createElement('div');
    taskDelete.classList.add('small-icon');
    taskDelete.setAttribute('id', 'task-delete');
    upper.appendChild(taskDelete);

    function manageTaskEvents() {
        
    }
}
