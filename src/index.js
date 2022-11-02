import './style.css';
import Task  from './task';

const content = document.querySelector('#content');
content.innerText = 'Hello World!'

const testTask = new Task('test');
console.log(testTask.title);
testTask.changeTitle('changed title');
console.log(testTask.title);