// Enumerating the UI Variables;
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput= document.querySelector('#task');


// Function to load all event Listeners
loadEventListeners();
function loadEventListeners(){

 form.addEventListener('submit', addTask);
      function addTask(e){
            if(taskInput.value === ''){
                  alert("Please, Add a task")
            }
            const li =  document.createElement('li');
            li.className = 'collection-item'; // This creates the li
            li.appendChild(document.createTextNode(taskInput.value)); // Adds the input value to the li
            const link = document.createElement('a');
            link.className = 'delete-item secondary-content';
            link.innerHTML = '<i class =" fa fa-remove"></i>' // adds the font awesome remove icon to the a tag
            li.appendChild(link); //appends link to li
            taskList.appendChild(li); //appends li to UL with class task list 
            taskInput.value = '';

      e.preventDefault();
      }

}