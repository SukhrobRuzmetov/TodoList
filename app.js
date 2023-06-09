// // On app load, get all tasks from localStorage
// window.onload = loadTasks;

// // On form submit add task
// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
//   addTask();
// });

// function loadTasks() {
//   // check if localStorage has any tasks
//   // if not then return
//   if (localStorage.getItem("tasks") == null) return;

//   // Get the tasks from localStorage and convert it to an array
//   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

//   // Loop through the tasks and add them to the list
//   tasks.forEach((task) => {
//     const list = document.querySelector("ul");
//     const li = document.createElement("li");
//     li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${
//       task.completed ? "checked" : ""
//     }>
//        <input type="text" value="${task.task}" class="task ${
//       task.completed ? "completed" : ""
//     }" onfocus="getCurrentTask(this)" onblur="editTask(this)">
//        <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
//     list.insertBefore(li, list.children[0]);
//   });
// }

// function addTask() {
//   const task = document.querySelector("form input");
//   const list = document.querySelector("ul");
//   // return if task is empty
//   if (task.value === "") {
//     alert("Please add some task!");
//     return false;
//   }
//   // check is task already exist
//   if (document.querySelector(`input[value="${task.value}"]`)) {
//     alert("Task already exist!");
//     return false;
//   }

//   // add task to local storage
//   localStorage.setItem(
//     "tasks",
//     JSON.stringify([
//       ...JSON.parse(localStorage.getItem("tasks") || "[]"),
//       { task: task.value, completed: false },
//     ])
//   );

//   // create list item, add innerHTML and append to ul
//   const li = document.createElement("li");
//   li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
//    <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
//    <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
//   list.insertBefore(li, list.children[0]);
//   // clear input
//   task.value = "";
// }

// function taskComplete(event) {
//   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
//   tasks.forEach((task) => {
//     if (task.task === event.nextElementSibling.value) {
//       task.completed = !task.completed;
//     }
//   });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   event.nextElementSibling.classList.toggle("completed");
// }

// function removeTask(event) {
//   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
//   tasks.forEach((task) => {
//     if (task.task === event.parentNode.children[1].value) {
//       // delete task
//       tasks.splice(tasks.indexOf(task), 1);
//     }
//   });
//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   event.parentElement.remove();
// }

// // store current task to track changes
// var currentTask = null;

// // get current task
// function getCurrentTask(event) {
//   currentTask = event.value;
// }

// // edit the task and update local storage
// function editTask(event) {
//   let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
//   // check if task is empty
//   if (event.value === "") {
//     alert("Task is empty!");
//     event.value = currentTask;
//     return;
//   }
//   // task already exist
//   tasks.forEach((task) => {
//     if (task.task === event.value) {
//       alert("Task already exist!");
//       event.value = currentTask;
//       return;
//     }
//   });
//   // update task
//   tasks.forEach((task) => {
//     if (task.task === currentTask) {
//       task.task = event.value;
//     }
//   });
//   // update local storage
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }


// // timer

// var time = document.querySelector('.time');
// var dateTime = document.querySelector('.date-time');

// function updateClock() {
//   // Get the current time, day , month and year
//   var now = new Date();
//   var hours = now.getHours();
//   var minutes = now.getMinutes();
//   var seconds = now.getSeconds();
//   var day = now.getDay();
//   var date = now.getDate();
//   var month = now.getMonth();
//   var year = now.getFullYear();

//   // store day and month name in an array
//   var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//   var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//   // format date and time
//   hours = hours % 12 || 12;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;
//   date = date < 10 ? '0' + date : date;

//   // display date and time
//   var period = hours < 12 ? 'AM' : 'PM';
//   time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
//   dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
// }

// updateClock();
// setInterval(updateClock, 1000);


// On app load, get all tasks from localStorage
window.onload = loadTasks;

// On form submit add task
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

function loadTasks() {
  // check if localStorage has any tasks
  // if not then return
  if (localStorage.getItem("tasks") == null) return;

  // Get the tasks from localStorage and convert it to an array
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

  // Sort tasks by date
  tasks.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // Loop through the tasks and add them to the list
  tasks.forEach((task) => {
    const list = document.querySelector("ul");
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${
      task.completed ? "checked" : ""
    }>
       <input type="text" value="${task.task}" class="task ${
      task.completed ? "completed" : ""
    }" onfocus="getCurrentTask(this)" onblur="editTask(this)">
       <span class="date">${task.date}</span>
       <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.insertBefore(li, list.children[0]);
  });
}

function addTask() {
  const task = document.querySelector("form input");
  const list = document.querySelector("ul");
  // return if task is empty
  if (task.value === "") {
    alert("Please add some task!");
    return false;
  }
  // check if task already exists
  if (document.querySelector(`input[value="${task.value}"]`)) {
    alert("Task already exists!");
    return false;
  }

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  // add task to local storage
  localStorage.setItem(
    "tasks",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("tasks") || "[]"),
      { task: task.value, completed: false, date: formattedDate },
    ])
  );

  // create list item, add innerHTML and append to ul
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
   <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
   <span class="date">${formattedDate}</span>
   <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
  list.insertBefore(li, list.children[0]);
  // clear input
  task.value = "";
}

function taskComplete(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach((task) => {
    if (task.task === event.nextElementSibling.value) {
      task.completed = !task.completed;
      task.date = new Date().toLocaleString();
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.forEach((task) => {
    if (task.task === event.parentNode.children[1].value) {
      // delete task
      tasks.splice(tasks.indexOf(task), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  event.parentElement.remove();
}

// store current task to track changes
var currentTask = null;

// get current task
function getCurrentTask(event) {
  currentTask = event.value;
}

// edit the task and update local storage
function editTask(event) {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  // check if task is empty
  if (event.value === "") {
    alert("Task is empty!");
    event.value = currentTask;
    return;
  }
  // task already exists
  tasks.forEach((task) => {
    if (task.task === event.value) {
      alert("Task already exists!");
      event.value = currentTask;
      return;
    }
  });
  // update task
  tasks.forEach((task) => {
    if (task.task === currentTask) {
      task.task = event.value;
      task.date = new Date().toLocaleString();
    }
  });
  // update local storage
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Implement sorting by date
function sortByDate() {
  let tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));
  tasks.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // Clear the current task list
  const list = document.querySelector("ul");
  while (list.firstChild) {
    list.firstChild.remove();
  }

  // Loop through the sorted tasks and add them to the list
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${
      task.completed ? "checked" : ""
    }>
       <input type="text" value="${task.task}" class="task ${
      task.completed ? "completed" : ""
    }" onfocus="getCurrentTask(this)" onblur="editTask(this)">
       <span class="date">${task.date}</span>
       <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
    list.appendChild(li);
  });
}

// Timer
var time = document.querySelector('.time');
var dateTime = document.querySelector('.date-time');

function updateClock() {
  // Get the current time, day, month, and year
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var day = now.getDay();
  var date = now.getDate();
  var month = now.getMonth();
  var year = now.getFullYear();

  // store day and month name in an array
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // format date and time
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  date = date < 10 ? '0' + date : date;

  // display date and time
  var period = hours < 12 ? 'AM' : 'PM';
  time.innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + period;
  dateTime.innerHTML = dayNames[day] + ', ' + monthNames[month] + ' ' + date + ', ' + year;
}

updateClock();
setInterval(updateClock, 1000);



