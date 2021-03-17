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
 taskList.addEventListener('click', removeTask);
 clearBtn.addEventListener('click', clearTask);
 filter.addEventListener('keyup', filterTasks);
 document.addEventListener('DOMContentLoaded', getTasksFromLocalStorage);
 
}

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

            // store task in Local Storage
            storeTaskInLocalStorage(taskInput.value);
            taskInput.value = '';

      e.preventDefault();
      }

      function storeTaskInLocalStorage(task){
            let tasks;
            if(localStorage.getItem('tasks') === null){
                  tasks = [ ];
            }
            else {
                  tasks = JSON.parse(localStorage.getItem('tasks'));
            }
                  tasks.push(task);

                  localStorage.setItem('tasks',   JSON.stringify(tasks));
      }

      function getTasksFromLocalStorage(){
            let tasks;
            if(localStorage.getItem('tasks') === null){
                  tasks = [ ];
            }
            else {
                  tasks = JSON.parse(localStorage.getItem('tasks'));
            }

            tasks.forEach(function(task){
                  const li =  document.createElement('li');
                  li.className = 'collection-item'; // This creates the li
                  li.appendChild(document.createTextNode(task)); // Adds the input value to the li
                  const link = document.createElement('a');
                  link.className = 'delete-item secondary-content';
                  link.innerHTML = '<i class =" fa fa-remove"></i>' // adds the font awesome remove icon to the a tag
      
                  li.appendChild(link); //appends link to li
                  taskList.appendChild(li); //appends li to UL with class task list 
            })
      }

      function removeTask(e){
            if(e.target.parentElement.classList.contains('delete-item')){
                  if(confirm("Are you sure ?")){
                        e.target.parentElement.parentElement.remove();

                        // Remove from LS
                        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
                  }
            }
      }

      function removeTaskFromLocalStorage(taskItem){
            let tasks;
            if(localStorage.getItem('tasks') === null){
                  tasks = [ ];
            }
            else {
                  tasks = JSON.parse(localStorage.getItem('tasks'));
            }

            tasks.forEach(function(task, index){
                  if(taskItem.textContent=== task){
                        tasks.splice(index  ,  1);
                  } 
            });
            localStorage.setItem('tasks', JSON.stringify(tasks))
      }




      function clearTask(e){
            // taskList.innerHTML = ''; (This also works)
             while(taskList.firstChild){
                   taskList.removeChild(taskList.firstChild);
             }

             clearTaskFromLocalStorage();
      }


      function clearTaskFromLocalStorage(){
            localStorage.clear();
      }

   function filterTasks(e){
         const text = e.target.value.toLowerCase();
         document.querySelectorAll('.collection-item').forEach(function(task){
               const item = task.firstChild.textContent;
               if(item.toLowerCase().indexOf(text)  != -1){
                  task.style.display = 'block';
               }
               else { 
                     task.style.display = 'none';
               }

         })

   }

//    Persisting to Local Storage

